from rest_framework import serializers
from git_logic.models import PR

class PRSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PR
        fields = ['author', 'title', 'description', 'status', 'create_date']