from rest_framework import viewsets, status
from rest_framework.response import Response
# from rest_framework.viewsets import ViewSet
from rest_framework.views import APIView
from tasks.api.serializers import TaskSerializer


from tasks.models import Task




class TaskViewSet(viewsets.ViewSet):
   def list(self, request):
      tasks = Task.objects.all()
      serializer = TaskSerializer(tasks, many=True)
      return Response(serializer.data, status=status.HTTP_200_OK)

   def create(self, request):
      serializer = TaskSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)

   def retrieve(self, request, pk=None):
      task = Task.objects.get(id=pk)
      serializer = TaskSerializer(task)
      return Response(serializer.data)

   def update(self, request, pk=None):
      task = Task.objects.get(id=pk)
      serializer = TaskSerializer(instance=task, data=request.data)
      serializer.is_valid(raise_exception=True)
      serializer.save()
      return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

   def destroy(self, request, pk=None):
      task = Task.objects.get(id=pk)
      task.delete()
      return Response(status=status.HTTP_204_NO_CONTENT)