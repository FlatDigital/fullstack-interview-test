from django.shortcuts import render
from git import Repo

# Create your views here.
def index(request):
	repo = Repo('../.')
	res = {
		'desc': repo.description,
		'branches': list(repo.branches),
		'active_branch': repo.active_branch,
		'remotes': list(repo.remotes),
	}
	return render(request, 'wrapper/index.html', res)

def commits(request, branch):
	repo = Repo('../.')
	res = {
		'branch': branch,
		'commits': list(repo.iter_commits(branch))
	}
	return render(request, 'wrapper/commits.html', res)

def commit_details(request, branch, commit_id):
	repo = Repo('../.')
	res = {
		'commit': repo.commit(commit_id),
		'branch': branch 
	}
	return render(request, 'wrapper/commit_details.html', res)