from flask import Blueprint
from flask import jsonify
from github import Github
from dotenv import dotenv_values

main_blueprint = Blueprint('main', __name__)
g = Github(dotenv_values().get('GITHUB_TOKEN'))
repo = g.get_repo('sanchezpili6/fullstack-interview-test')
default_branch_date = repo.get_branch("master").commit.commit.author.date.strftime('%Y-%m-%d %H:%M:%S')
branches = list(repo.get_branches())


def get_status(branch_last_commit_date):
    if branch_last_commit_date == default_branch_date:
        return "up-to-date"
    elif branch_last_commit_date > default_branch_date:
        return "ahead"
    else:
        return "behind"


@main_blueprint.route('/get_branches', methods=['GET'])
def get_branches():
    branches_names = []
    for branch in branches:
        date = branch.commit.commit.committer.date
        short_date = date.strftime('%Y-%m-%d')
        date = date.strftime('%Y-%m-%d %H:%M:%S')
        status = get_status(date)
        branches_names.append({'name': branch.name, 'total_commits': branch.commit.stats.total,
                               'date': short_date, 'status': status})
    return jsonify(branches_names)


@main_blueprint.route('/get_branch/<branch_name>', methods=['GET'])
def get_branch(branch_name):
    branch = repo.get_branch(branch_name)
    date = branch.commit.commit.committer.date
    short_date = date.strftime('%Y-%m-%d')
    date = date.strftime('%Y-%m-%d %H:%M:%S')
    status = get_status(date)
    return jsonify({'name': branch.name, 'total_commits': branch.commit.stats.total,
                    'date': short_date,
                    'status': status})
