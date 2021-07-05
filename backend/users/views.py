from django.conf.global_settings import EMAIL_HOST_USER
from django.core.mail import send_mail
from rest_framework import generics, permissions, status
from rest_framework.decorators import api_view
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from knox.models import AuthToken
from rest_framework.viewsets import GenericViewSet
from django.views.generic import TemplateView
from .models import Subscribe
from .serializers import UserSerializer, RegisterSerializer, ChangePasswordSerializer, UpdateUserSerializer, \
    SubscribeSerializer
from django.contrib.auth import login
from rest_framework.authtoken.serializers import AuthTokenSerializer
from knox.views import LoginView as KnoxLoginView
from django.contrib.auth.models import User
import schedule
import time
import requests
from django.shortcuts import render
from rest_framework.decorators import api_view
# this is change


@api_view(['GET'])   
def getUser(request,username):
    if request.method == 'GET':
        print(username)
        user = User.objects.filter(username=username)
      
        serializer = UserSerializer(user,many=True)
        return Response(serializer.data)
        


# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


class ChangePasswordView(generics.UpdateAPIView):

    queryset = User.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = ChangePasswordSerializer


class UpdateProfileView(generics.UpdateAPIView):

    queryset = User.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = UpdateUserSerializer


class LoginAPI(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return super(LoginAPI, self).post(request, format=None)


class EmailCreate(CreateAPIView, GenericViewSet):

    @api_view(["POST"], )
    def create_subscribe_view(request):

        exists = Subscribe.objects
        # if exists:
        #     err = ErrorDetail(string="Email address already used.", code="unique")
        #     response_message = {"email": [err]}
        #     return Response(response_message, status=status.HTTP_400_BAD_REQUEST)

        if request.method == "POST":
            serializer = SubscribeSerializer(data=request.data)
            data = {}
            if serializer.is_valid():
                user = serializer.save()
                data["email"] = user.email
                # send an email
                subject = 'Welcome to Oursite'
                message = 'Hope you are well now, i love you!'
                recepient = str(data['email'])
                send_mail(subject, message, EMAIL_HOST_USER, [recepient], fail_silently=False)

                # url = "https://www.careeronestop.org/JobSearch/Interview/interview-tips.aspx"
                # page = requests.get(url)

                mail_content = {
                    1: "https://www.careeronestop.org/JobSearch/Interview/interview-tips.aspx",
                    2: "https://www.indeed.com/career-advice/interviewing/job-interview-tips-how-to-make-a-great-impression",
                    3: "https://www.roberthalf.co.nz/career-advice/interview",
                    4: "https://www.thebalancecareers.com/top-interview-tips-2058577"
                }

                # i = 1
                for key in mail_content:
                    if key <= 4:
                        url = mail_content[key]

                        def send_tips():
                            subject = 'Mock Interview Tips & trick'
                            message = 'Hello it tips and tricks for this week, please read it and stay tuned for more..' + url
                            recepient = str(data['email'])
                            return send_mail(subject, message, EMAIL_HOST_USER, [recepient], fail_silently=False)

                        schedule.every(2).seconds.do(send_tips)
                        key = key + 1

                # def send_tips():
                #     subject = 'Mock Interview Tips & trick'
                #     message = 'Hello it tips and tricks for this week, please read it and stay tuned for more..'+ url
                #     recepient = str(data['email'])
                #     return send_mail(subject, message, EMAIL_HOST_USER, [recepient], fail_silently = False)

                # schedule.every(4).seconds.do(send_tips)
                # schedule.every(604800).day().at("06:54").do(send_tips)
                while time:
                    schedule.run_pending()
                    time.sleep(1)

                return Response(data=data, status=status.HTTP_201_CREATED)
            else:
                data = serializer.errors
            return Response(data, status=status.HTTP_400_BAD_REQUEST)
