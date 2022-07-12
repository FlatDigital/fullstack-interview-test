"""
Database models
"""
import uuid
import os

from django.conf import settings
from django.db import models
from django.contrib.auth.models import(
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)


class Repo(models.Model):
    name = models.CharField(max_length=255, null=False, blank=False, unique=True)
    link = models.CharField(max_length=255, null=False, blank=False, unique=True)

    def __str__(self):
        return self.name



class Branch(models.Model):

    repo = models.ForeignKey(
        'Repo',
        on_delete=models.CASCADE,
    )
    name = models.CharField(max_length=255, null=False, blank=False)

    def __str__(self):
        return self.name



class Commit(models.Model):

    branch = models.ForeignKey(
        'Branch',
        on_delete=models.CASCADE,
    )
    name = models.CharField(max_length=255, null=False, blank=False)
    author = models.CharField(max_length=255)
    message = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name



class PullRequest(models.Model):

    base_branch = models.ForeignKey(
        'Branch',
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name='base_branch',
    )
    compare_branch = models.ForeignKey(
        'Branch',
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name='compare_branch'
    )
    author = models.CharField(max_length=255, blank=True)
    title = models.CharField(max_length=255, blank=True)
    description = models.TextField(blank=True)
    status = models.CharField(
        max_length=10,
        choices = [
            ('OPEN', 'open'),
            ('CLOSED', 'closed'),
            ('MERGED', 'merged'),
        ],
        default='OPEN',
        )

    def __str__(self):
        return self.author