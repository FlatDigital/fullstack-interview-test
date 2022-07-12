"""
URL mappings for the repo app.
"""

from django.urls import path, include

from rest_framework.routers import DefaultRouter

from repo import views

router = DefaultRouter()
router.register('repos', views.RepoViewSet)
router.register('branch', views.BranchViewSet)
router.register('commit', views.CommitViewSet)
router.register('pullrequest', views.PullRequestViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]