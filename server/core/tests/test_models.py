"""
Tests for models
"""

from unittest.mock import patch
from django.test import TestCase
from django.contrib.auth import get_user_model

from core import models

class ModelTests(TestCase):

    def test_create_repo_success(self):
        """Creates a repo successfully"""
