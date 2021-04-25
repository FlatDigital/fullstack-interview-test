from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('branches/', views.branches, name='branches'),
    path('branch/<str:branch_name>', views.branch, name='branch'),
    path('compare/', views.compare, name='compare'),
    path('commit/<str:commit_sha>', views.commit, name='commit'),
    path('pull/', views.pull, name='pull'),
    path('pull/<int:number>', views.close_pull, name='close_pull'),
    path('pulls/', views.pulls, name='pulls'),
]