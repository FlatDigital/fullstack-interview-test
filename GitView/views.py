from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from git import Repo



def index(request):
    # rorepo is a Repo instance pointing to the git-python repository.
    # For all you know, the first argument to Repo is a path to the repository
    # you want to work with
    repo = Repo('/Users/macbookair/Documents/GitHub/fullstack-interview-test')
    branches = []
    remote_branches = []
    for ref in repo.git.branch().split('\n'):
        for k in repo.branches[ref]:
            print(k)
            remote_branches.append(k)
    assert not repo.bare
    return HttpResponse("Hello, world. You're at the polls index.")