from django.shortcuts import render
import json
# Create your views here.
from django.http import HttpResponse
from git import Repo

from django.template.response import TemplateResponse

def index(request):
    # rorepo is a Repo instance pointing to the git-python repository.
    # For all you know, the first argument to Repo is a path to the repository
    # you want to work with
    repo = Repo('/Users/macbookair/Documents/GitHub/fullstack-interview-test')
    tree = repo.heads.master.commit.tree
    loslpd = list(tree.traverse())
    branches = []
    remote_branches = []
    file_count = 0
    tree_count = 0
    heads = repo.heads
    #tree = past.commit.tree
    # for item in tree.traverse():
    #     file_count += item.type == 'blob'
    #     tree_count += item.type == 'tree'
    # assert file_count and tree_count                        # we have accumulated all directories and files
    
    # for entry in tree:                                         # intuitive iteration of tree members
    #     print(entry)
    # for ref in repo.git.branch().split('\n'):
    #     for k in repo.branches[ref]:
    #         print(k)
    #         remote_branches.append(k)
    ComitList = dict()
    for ref in repo.heads:
        #com = repo.heads[ref.name].commit
        HeadComits = (list(repo.iter_commits(ref.name)))
        HeadComits.reverse()
        prevComit = ''
        for comit in HeadComits:
            if comit.hexsha in ComitList:
                if (comit.summary not in ComitList[comit.hexsha] ):
                    ComitList[comit.hexsha].append({"sumary" : comit.summary, "branch" : ref.name, "PrevoiusComiit" : prevComit})
                
            else:
                ComitList[comit.hexsha] = [{"sumary" : comit.summary, "branch" : ref.name, "PrevoiusComiit" : prevComit}]
            prevComit = comit.hexsha
        # for k in repo.heads[ref.name].commit.tree:
        #     print(k)
        #     remote_branches.append(k)
    assert not repo.bare
    context = {'latest_question_list': "yolyo"}
    return TemplateResponse(request, 'BranchView/BranchView.html', json.dumps(ComitList))
    return render(request, 'BranchView/BranchView.html')
    #return HttpResponse("Hello, world. You're at the polls index.")