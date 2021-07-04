from .views import RegisterAPI, LoginAPI, EmailCreate,ChangePasswordView,UpdateProfileView
from django.urls import path
from knox import views as knox_views
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path('api/getUserId/<str:username>',views.getUser),
    path('api/register/', RegisterAPI.as_view(), name='register'),
    path('api/login/', LoginAPI.as_view(), name='login'),
    path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('api/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
    path('api/subscribe/', EmailCreate.create_subscribe_view, name='subscribe'),
    path('api/change_password/<int:pk>/', ChangePasswordView.as_view(), name='auth_change_password'),
    path('api/update_profile/<int:pk>/', UpdateProfileView.as_view(), name='auth_update_profile'),
]

