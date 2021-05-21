from django.db import models

# Create your models here.
class PullRequest(models.Models):
	OPEN = 'Open'
	CLOSED = 'Closed'
	status_list = [
		(OPEN, 'Open'),
		(CLOSED, 'Closed')
	]

	title = models.CharField(max_length=500)
	owner = models.CharField(max_length=100)
	status = models.CharField(max_length=10, choices=status_list)

	class Meta:
		managed = True
		verbose_name = "Pull Request"
		verbose_name_plural = "Pull Requests"
		db_table = 'pull_request'
	def __str__(self):
		return self.title
