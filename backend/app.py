from traceback import print_stack
from flask import Flask, jsonify
import requests

API_BASE_URL = 'https://api.github.com/repos/'
GIT_USERNAME = 'FlatDigital'
GIT_REPO = 'fullstack-interview-test'
API_URL = API_BASE_URL + GIT_USERNAME + '/' + GIT_REPO

app = Flask(__name__)

if __name__ == "__main__":
    app.run(debug=True)

@app.route("/")
def branches():
    try:
        result = requests.get(API_URL + "/branches")
    except requests.exceptions.RequestException as e:
        return "Error: " + str(e)
    else:
        print(result.json())
        branches = [branch['name'] for branch in result.json()]
    return jsonify(branches)

@app.route("/branch/<branch>")
def branch_detail(branch = 'master'):
    url = API_URL + "/commits"
    
    params = {
        'sha': branch
    }
    try:
        result = requests.get(url, params)
    except requests.exceptions.RequestException as e:
        contenido = {
            "error": str(e)
        }
        return jsonify(contenido)
    else:
        commits = result.json()
        response = []
        for commit in commits:
            commit_dict = {
                'author': commit['commit']['author']['name'],
                'message': commit['commit']['message'],
                'date': commit['commit']['author']['date'],
                'sha': commit['sha']
            }
            response.append(commit_dict)
        return jsonify(response)

@app.route("/commits/<sha>")
def commit_detail(sha = None):
    url = API_URL + "/commits/" + sha
    
    # params = {
    #     'sha': sha
    # }
    if sha:
        try:
            result = requests.get(url)
        except requests.exceptions.RequestException as e:
            contenido = {
                "error": str(e)
            }
            return jsonify(contenido)
        else:
            # commit message, timestamp, number of files changed and author names / emails.

            commit = result.json()
            response = {
                'message': commit['commit']['message'],
                'date': commit['commit']['author']['date'],
                'files_changed': len(commit['files']),
                'author': commit['commit']['author']['name'],
                'email': commit['commit']['author']['email']
            }
            print(response)
            # for commit in commits:
            #     commit_dict = {
            #         'author': commit['commit']['author']['name'],
            #         'message': commit['commit']['message'],
            #         'date': commit['commit']['author']['date'],
            #         'sha': commit['sha']
            #     }
            #     response.append(commit_dict)
            return jsonify(response) 
    else:
        contenido = {
            "error": 'Sha is required'
        }
        return jsonify(contenido)


@app.route("/pr")
def pr():
    print("PR")
    params = {
        'state': 'all'
    }
    try:
        result = requests.get(API_URL + "/pulls", params)
    except requests.exceptions.RequestException as e:
        return "Error: " + str(e)
    else:
        print(result.json())
        prs = [pr['title'] for pr in result.json()]
        # prs = [branch['name'] for branch in result.json()]
    return jsonify(prs)


# https://api.github.com/repos/maikosoft/fullstack-interview-test/git/commits/3e489f26eb5eaca5e66812223f00dc33185dd9ed