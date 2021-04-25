import binascii, json
from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, JsonResponse
# from git import Repo, Commit
from github import Github
# from git_logic.models import PR
# from git_logic.serializers import PRSerializer

# using username and password
# g = Github("daniboone", "nirvanasex271092")
g = Github("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")
repo = g.get_repo('daniboone/fullstack-interview-test')
# print(repo.get_branches())
# assert not repo.bare

def index(request):
    commit = repo.get_commit(sha='17d9a4a')
    # print(commit.files)
    details = {
        'message': commit.commit.message,
        # 'files_changes': commit.files.changes,
        'date': commit.commit.author.date,
        'author': commit.commit.author.name,
        'email': commit.commit.author.email,
        }
    return JsonResponse({'commit': details})

def branches(request):
    branches_names = []
    remote_refs = repo.get_branches()

    for branch in remote_refs:
        branches_names.append(branch.name)
    return JsonResponse({'branches': branches_names})

def branch(request, branch_name):
    commits = []
    branch = repo.get_branch(branch_name)

    for commit in repo.get_commits(sha=branch.commit.sha):
        commits.append({
            'message': commit.commit.message,
            'author': commit.commit.author.name,
            'date': commit.commit.author.date,
        })    
    return JsonResponse({'commits': commits})

def commit(request, commit_sha):
    commit = repo.get_commit(sha=commit_sha)
    # print(list(commit.files.changes))
    details = {
        'message': commit.commit.message,
        'files_changes': commit.stats.total,
        'date': commit.commit.author.date,
        'name': commit.commit.author.name,
        'email': commit.commit.author.email,
        }
    return JsonResponse({'commit': details})

def close_pull(request, number):
    pr = repo.get_pull(number)
    pr.edit(state="closed")

    return HttpResponse(status=200)

def compare(request):
    result = True
    head = repo.get_branch('master').name
    base = repo.get_branch('alfonsolzrg-patch-1').name
    compare = repo.compare(head=head, base=base)
    if compare.files: 
        result = False 
   
    return JsonResponse({'diff':  result})


def pull(request):
    body = '''
    SUMMARY
    Change HTTP library used to send requests

    TESTS
        - [x] Send 'GET' request
        - [x] Send 'POST' request with/without body
    '''
    pr = repo.create_pull(title="Use 'requests' instead of 'httplib'", body=body, head="alfonsolzrg-patch-1", base="master")
    pr.merge()
    
    return JsonResponse({'pull': pr.number})

def pulls(request):
    pulls = []
    pull_requests = repo.get_pulls(state='all')

    for pull in pull_requests:
        pulls.append({
            'author': pull.user.login,
            'title': pull.title,
            'description': pull.body,
            'status': pull.state,
            'mergable': pull.number
        })

    return JsonResponse({'pulls': pulls})

# def pr_create(request):
#     return 'create pr'