import json
import requests

from dataclasses import dataclass
from urllib.parse import urljoin
from json.decoder import JSONDecodeError
from typing import Dict, Union


@dataclass
class Client:
    """Client for Github API."""
    token: str
    owner: str
    repository: str
    base_url = 'https://api.github.com/repos/'

    def _execute(self, path: str, data: dict = {}, params: Dict = {}, method: str = "get") -> Union[str, Dict]:
        _method_to_exec = getattr(requests, method)
        url = urljoin(
            f'{self.base_url}{self.owner}/{self.repository}/',
            path
        )

        request_data = {}
        headers = {'Authorization': f'token {self.token}'}
        if method == 'get':
            request_data = {
                'url': url,
                'headers': headers,
                'params': params
            }
        elif method in ['post', 'patch']:
            headers['accept'] = 'application/vnd.github.v3+json'
            request_data = {
                'url': url,
                'headers': headers,
                'data': json.dumps(data),
            }

        response = _method_to_exec(**request_data)

        try:
            r_body = response.json()
        except JSONDecodeError:
            r_body = response.text

        return r_body

    def get_active_branches(self) -> Union[str, Dict]:
        return self._execute(path='branches')

    def get_branch(self, branch_name: str) -> Union[str, Dict]:
        return self._execute(path=f'branches/{branch_name}')

    def get_commits_for_branch(self, branch_name: str) -> Union[str, Dict]:
        return self._execute(
            path=f'commits',
            params={'sha': branch_name}
        )

    def get_commit(self, commit_sha: str) -> Union[str, Dict]:
        return self._execute(path=f'commits/{commit_sha}')

    def get_pull_requests(self):
        return self._execute(path='pulls')

    def create_pull_request(
            self,
            origin: str,
            destination: str,
            title: str,
            description:str
    ) -> Union[str, Dict]:
        return self._execute(
            path='pulls',
            data={
                'owner': self.owner,
                'repo': self.repository,
                'title': title,
                'body': description,
                'head': origin,
                'base': destination
            },
            method='post'
        )

    def update_pull_request(
            self,
            pull_request: int,
            destination: str,
            title: str,
            description:str
    ) -> Union[str, Dict]:
        return self._execute(
            path=f'pulls/{pull_request}',
            data={
                'owner': self.owner,
                'repo': self.repository,
                'base': destination,
                'title': title,
                'body': description,
            },
            method='patch'
        )
