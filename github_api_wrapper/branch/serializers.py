from rest_framework import serializers


class BranchCommitSerializer(serializers.Serializer):
    sha = serializers.CharField()
    message = serializers.SerializerMethodField()
    author = serializers.SerializerMethodField()
    timestamp = serializers.SerializerMethodField()

    class Meta:
        fields = ('message', 'author', 'timestamp')

    def get_message(self, obj):
        return self.initial_data['commit']['message']

    def get_author(self, obj):
        return  self.initial_data['commit']['committer']['name']

    def get_timestamp(self, obj):
        return  self.initial_data['commit']['committer']['date']


class BranchSerializer(serializers.Serializer):

    name = serializers.CharField()
    commits = serializers.SerializerMethodField()
    class Meta:
        fields = ('name', 'commits')

    def get_commits(self, obj):
        commits = []
        for commit in self.initial_data.get('commits'):
            serializer = BranchCommitSerializer(data=commit)
            serializer.is_valid(raise_exception=True)
            commits.append(serializer.data)
        return commits