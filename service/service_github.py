import requests

class ServiceGithub():

    url_base = "https://api.github.com/"
    user = "ydmm12"
    repo = "fullstack-interview-test"

    def getBranches(self, name = None):
        
        branchUrl = "repos/{}/{}/branches".format(
            self.user,
            self.repo
        )
        if name:
            branchUrl += "/{}".format(name)
        response = self.getRequest(branchUrl)
        data = response.json()
        if response.status_code == 200:
            return data
        else:
            return data["message"]

    def getBranch(self, name):
        branchUrl = "/repos/{}/{}/branches/{}".format(
            self.user,
            self.repo,
            name
        )

    def getHeaders(self):
        return {
            "Accept": "application/vnd.github.v3+json"
        }
    
    def getRequest(self, path):
        url = self.url_base + path
        result = requests.get(url, headers=self.getHeaders())
        return result