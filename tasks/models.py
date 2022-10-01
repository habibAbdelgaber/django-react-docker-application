from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Task(models.Model):
   # author = models.ForeignKey(User, on_delete=models.CASCADE)
   name = models.CharField(max_length=250)
   requirements = models.TextField(blank=True, null=True)
   description = models.TextField(blank=True, null=True)
   tasked = models.BooleanField(default=False)
   date_created = models.DateTimeField(auto_now_add=True)


   class Meta:
      ordering = ['-date_created']


   def __str__(self):
      return self.name
