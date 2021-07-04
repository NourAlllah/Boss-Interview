from django.urls import path
from . import views

urlpatterns = [
    # path('api/similarity', views.Similarity, name='similarity'),
    # path('api/similarity', views.Similarity, name='similarity'),
    path('api/getFeedback/<str:username>', views.getFeedback),
    path('api/getAnswers/<str:username>', views.getAnswers),
    path('api/getQuestion',views.getQuestion),
    path('api/saveNotes/<int:id>',views.saveNotes),
]
