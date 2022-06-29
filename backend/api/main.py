from flask import Blueprint
from flask import jsonify
import json
from github import Github
from dotenv import dotenv_values

main_blueprint = Blueprint('main', __name__)
g = Github(dotenv_values().get('GITHUB_TOKEN'))
u = g.get_user()
repo = u.get_repo("fullstack-interview-test")
default_branch_date = repo.get_branch("master").commit.commit.author.date
branches = list(repo.get_branches())


@main_blueprint.route('/get_branches', methods=['GET'])
def get_branches():
    branches_names = []
    for branch in branches:
        date = branch.commit.commit.committer.date
        status = 'up to date with default branch'
        if date > default_branch_date:
            status = 'ahead of default branch'
        elif date < default_branch_date:
            status = 'behind default branch'
        elif branch.name == 'master':
            status = 'this is the default branch'
        branches_names.append({'name': branch.name, 'total_commits': branch.commit.stats.total,
                               'date': branch.commit.commit.committer.date, 'status': status})
    return jsonify(branches_names)
