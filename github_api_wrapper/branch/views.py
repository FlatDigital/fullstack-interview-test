from django.conf import settings
from rest_framework import viewsets
from rest_framework.response import Response

from branch.serializers import BranchSerializer
from github_client.client import Client


class BranchViewSet(viewsets.ViewSet):
    """
    A simple ViewSet for listing or retrieving users.
    """

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.client = Client(
            token=settings.GITHUB_TOKEN,
            owner=settings.GITHUB_OWNER,
            repository=settings.GITHUB_REPOSITORY
        )

    def list(self, request):
        branches = self.client.get_active_branches()
        return Response(data)

    def retrieve(self, request, pk=None):
        commits = self.client.get_commits_for_branch(pk)
        serializer = BranchSerializer(data={
            'name': pk,
            'commits': commits
        })
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data)
