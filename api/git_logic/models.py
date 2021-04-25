from django.db import models

# Create your models here.
class PR(models.Model):
    class Status(models.IntegerChoices):
        OPEN = 0
        CLOSED = 1
        MERGED = 2

    author = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    status = models.IntegerField(choices = Status.choices)
    create_date = models.DateTimeField(auto_now_add=True)