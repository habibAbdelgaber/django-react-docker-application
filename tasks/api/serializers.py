from dataclasses import field
from rest_framework import serializers
from tasks.models import Task


class TaskSerializer(serializers.ModelSerializer):
   # requirements = serializers.ListSerializer(child=serializers.CharField(allow_blank=False), required=False)
   # requirements = serializers.ListField(child=serializers.DictField(), max_length=7, min_length=7)
   class Meta:
      model = Task
      fields = ['id', 'name', 'requirements', 'description', 'tasked', 'date_created']