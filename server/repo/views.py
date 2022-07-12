
from shutil import rmtree
from os import path

from django.conf import settings

from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import BasePermission

from core.models import (
    Repo,
    Commit,
    Branch,
    PullRequest,
)
from repo.serializers import (
    RepoSerializer,
    CommitSerializer,
    BranchSerializer,
    PullRequestSerializer
)

from git import Repo as GitRepo, remote


def get_repo_instance(name, link):
    repo_dir = f'{settings.BASE_DIR}/tmp/{name}'
    try:
        repo_instance = GitRepo.clone_from(link, repo_dir)
    except:
        repo_instance = GitRepo(repo_dir)
    return repo_instance


class RepoViewSet(ModelViewSet):
    """View for manage repo api."""
    serializer_class = RepoSerializer
    queryset = Repo.objects.all()

    def create(self, request):

        repo_name = request.data['name']
        repo_link = request.data['link']

        get_repo_instance(repo_name, repo_link)

        return super().create(request)

    def retrieve(self, request, pk=None):
        repo=Repo.objects.filter(pk=pk)
        if repo.exists():
            repo_instance = get_repo_instance(repo[0].name, repo[0].link)
            git_remote = remote.Remote(repo_instance, repo[0].link)
            git_remote.pull('refs/heads/master:refs/heads/origin')
            print(repo_instance.branches)

        return super().retrieve(self,request, pk)



class CommitViewSet(ModelViewSet):
    serializer_class = CommitSerializer
    queryset = Commit.objects.all()



class BranchViewSet(ModelViewSet):
    serializer_class = BranchSerializer
    queryset = Branch.objects.all()




class PullRequestViewSet(ModelViewSet):
    serializer_class = PullRequestSerializer
    queryset = PullRequest.objects.all()



