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
	commit = repo.commit(commit_id)
	if commit.parents:
		diff = commit.diff(commit.parents[-1], create_patch=True)
	else:
		diff = commit.diff('4b825dc642cb6eb9a060e54bf8d69288fbee4904', create_patch=True)
	res = {
		'commit': commit,
		'branch': branch, 
		'diff': diff,
		'dir': dir(commit)
	}
	return render(request, 'wrapper/commit_details.html', res)