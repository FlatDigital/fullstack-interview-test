from django.urls import path
from . import views

urlpatterns = [
	path('', views.index, name = 'index'),
	path('<str:branch>/', views.commits, name = 'commits'),
	path('<str:branch>/commit/<str:commit_id>/', views.commit_details, name = 'commit_details'),
]