from rest_framework.decorators import api_view
from twilio.twiml.voice_response import Gather, VoiceResponse


# import pandas as pd
from nltk.tokenize import word_tokenize, sent_tokenize
import re
from nltk.corpus import stopwords
import nltk
# nltk.download('punkt')
# nltk.download('stopwords')
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import speech_recognition as sr
from .models import Question, Answer, Feedback, SavedFeedback
from .serializers import QuestionSerializer, FeedbackSerializer, AnswerSerializer
from rest_framework.response import Response
from django.http import HttpResponse
from django.core import serializers
compareTexts = []


@api_view(["GET"])
def getQuestion(request):
    if request.method == 'GET':
        question = Question.objects.all()

        serializer = QuestionSerializer(question, many=True)
        

        return Response(serializer.data)


@api_view(
    ["POST"],
)
def saveNotes(request, id):
    if(request.method == 'POST'):
        note = request.data.get('note')
        username = request.data.get('username')

        answer = Answer(answer=note, user=username, questionId=id)
        answer.save()
        return Response()
        # return Similarity(request,note,compareText,username)


@api_view(
    ["GET"],
)
def getAnswers(request, username):
    if request.method == 'GET':

        answers = Answer.objects.filter(user=username)
        question = Question.objects.all()
        compareTexts=question.values().values_list('compare_text', flat=True)
        print(compareTexts)

        notes = answers.values().values_list('answer', flat=True)
        feedback = Similarity(request, notes, compareTexts,username)
        print('this is feeback:',feedback)
        serializer = serializers.serialize('json', [ feedback, ])
        print('this is serializer : ',serializer)
        return Response(serializer)


@api_view(
    ["GET"],
)
def getFeedback(request, username):
    if request.method == 'GET':
        feedback = SavedFeedback.objects.filter(user=username)
        serializer = FeedbackSerializer(feedback, many=True)
        return Response(serializer.data)



def Similarity(request, notes, compareTexts,username):
        # take note by note and compare it with compare_text then calculate total score
    # then save feedback and score in database
    # then display feedback in frontend
    # ///////////////////////////////////////////
    score = 0
    NumberOfQuestions = int(len(compareTexts))
    i = 0
    while i < len(notes):
        print('loop i : ',i)
        print('compare test len: ',len(compareTexts))
        
        print(f'note {i}: {notes[i]} --> compareText {i}: {compareTexts[i]}')
        
        notelist = []
        notetoken = sent_tokenize(notes[i])
        for line in notetoken:
            notelist.append(line)

        comparelist = []
        comparetoken = sent_tokenize(compareTexts[i])
        for line in comparetoken:
            comparelist.append(line)

        # this function returns a list of tokenized and stemmed words of any text

        def get_tokenized_list(doc_text):
            doc_text = re.sub("^\d+\s|\s\d+\s|\s\d+$", " ", doc_text)
            doc_text = re.sub('[()]', '', doc_text)

            doc_text = doc_text.lower()
            tokens = nltk.word_tokenize(doc_text)
            return tokens

        # This function will performing stemming on tokenized words
        def word_stemmer(token_list):

            ps = nltk.stem.PorterStemmer()
            stemmed = []
            for words in token_list:
                stemmed.append(ps.stem(words))
            return stemmed

        # Function to remove stopwords from tokenized word list
        def remove_stopwords(doc_text):

            cleaned_text = []
            for words in doc_text:
                if words not in stop_words:
                    cleaned_text.append(words)
            return cleaned_text

        def convert_to_lower(text):
            input_str = text.lower()
            return input_str

        #print(stopwords.words('english'))
        stop_words = set(stopwords.words('english'))
        cleaned_corpus = []
        #text = str(text)
        for doc in [str(notelist)]:

            tokens = get_tokenized_list(doc)
            doc_text = remove_stopwords(tokens)
            doc_text = word_stemmer(doc_text)
            doc_text = ' '.join(doc_text)
            cleaned_corpus.append(doc_text)
        cleaned_corpus

        cleaned_corpus2 = []
        for doc in comparelist :

            tokens = get_tokenized_list(doc)
            #print(tokens)
            doc_text = remove_stopwords(tokens)
            #print(doc_text)
            doc_text  = word_stemmer(doc_text)
            #print(doc_text)
            doc_text = ' '.join(doc_text)
            #print(doc_text)
            cleaned_corpus2.append(doc_text)
        cleaned_corpus2

        def clean_text(document):
            '''it must take a list and it will return it cleaned'''
            cleaned_corpus = []
            for doc in document:
                tokens = get_tokenized_list(doc)
                doc_text = remove_stopwords(tokens)
                doc_text  = word_stemmer(doc_text)
                doc_text = ' '.join(doc_text)
                cleaned_corpus.append(doc_text)
                print("document after cleaning: "+doc_text)

        clean_text(comparelist)

        clean_text(notelist)

        tfidf_vectorizer = TfidfVectorizer()
        vectorizer = CountVectorizer()
        #y = vectorizer.fit_transform(file_docs)
        tfidf_matrix_train = tfidf_vectorizer.fit_transform(comparelist)
        tfidf_matrix_test = tfidf_vectorizer.transform(notelist)
        cosine_similarity(tfidf_matrix_train,tfidf_matrix_test)

        tfidf_vectorizer = TfidfVectorizer()
        vectorizer = CountVectorizer()
        #y = vectorizer.fit_transform(file_docs)
        tfidf_matrix_train2 = tfidf_vectorizer.fit_transform(cleaned_corpus2)
        tfidf_matrix_test2 = tfidf_vectorizer.transform(cleaned_corpus)
        cosine_similarity(tfidf_matrix_train2,tfidf_matrix_test2,dense_output=True)
        sim=cosine_similarity(tfidf_matrix_train2,tfidf_matrix_test2,dense_output=True)*100
        finalsimilarity = sim[0]
        print(finalsimilarity)
        score = score+ finalsimilarity
        i = i+1
    score = score/NumberOfQuestions
    print('score: ',score)
    Answer.objects.all().delete()
    if score < 50:
        feedback = Feedback.objects.get(feedback_id = 1)
        # print(feedback)

    if score > 50 and score <= 70:
        feedback = Feedback.objects.get(feedback_id = 2)
        # print(feedback)

    if score > 70 and score <= 90:
        feedback = Feedback.objects.get(feedback_id = 3)
        # print(feedback)

    if score > 90:
        feedback = Feedback.objects.get(feedback_id = 4)
        # print(feedback)

    data = SavedFeedback(user=username,feedback_text=feedback,feedback_score=score)
    data.save()    
    return feedback  




