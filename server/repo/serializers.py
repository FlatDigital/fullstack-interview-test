"""
Serializers for the repo API
"""
from rest_framework import serializers

from core.models import Repo, Commit, Branch, PullRequest


class RepoSerializer(serializers.ModelSerializer):
    """Serializers for Repos."""

    class Meta:
        model = Repo
        fields = ['id', 'name', 'link']
        read_only_fields = ['id']



class BranchSerializer(serializers.ModelSerializer):
    repo = RepoSerializer(read_only=True)
    repo_id = serializers.PrimaryKeyRelatedField(
        source="repo",
        queryset=Repo.objects.all(),
        write_only=True,
        required=False,
    )

    class Meta:
        model = Branch
        fields = ['name', 'repo', 'id', 'repo_id']
        reead_only_fields = ['id']



class CommitSerializer(serializers.ModelSerializer):
    branch = BranchSerializer(required=False)

    class Meta:
        model = Commit
        fields = [
            'id',
            'branch',
            'name',
            'author',
            'message',
            'created_at',
            'updated_at'
        ]
        reead_only_fields = ['id', 'created_at', 'updated_at']



class PullRequestSerializer(serializers.ModelSerializer):
    base_branch = BranchSerializer(required=True)
    compare_branch = BranchSerializer(required=True)

    class Meta:
        model = PullRequest
        fields = [
            'base_branch',
            'compare_branch',
            'author',
            'title',
            'description',
            'status',
        ]


