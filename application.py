from flask import Flask, render_template, jsonify, make_response
from github import Github
import requests
from config import config

# using username and password
user = config()['creds']['user']
password = config()['creds']['password']
g = Github(user, password)

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/branches")
def branches():
    """List all branches."""
    url = "http://127.0.0.1:5000/api/branches"
    r = requests.get(url = url)
    # extracting data in json format 
    json_response = r.json()
    branches = json_response['results']
    return render_template("branches.html", branches=branches)

@app.route("/api/branches")
def branches_api():
    """ Return the list of branches """
    for repo in g.get_user().get_repos():
            if repo.name == "fullstack-interview-test":
                branches = repo.get_branches()

    if branches is None:
        return jsonify({"error": "There is not branches"}), 422
    branches_list= [] 

    for branch in branches:
     branch_obj={}
     branch_obj["id"]=branch.name

     branches_list.append(branch_obj)
    
    response = make_response(jsonify(results=branches_list))
    response.headers['Access-Control-Allow-Origin']='*'   
    return response 
