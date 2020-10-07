from django.db import models
from datetime import datetime
# Create your models here.
class Datas(models.Model):
    id = models.AutoField(primary_key=True)
    file=models.FileField(upload_to='media')
    date=models.DateTimeField(default=datetime.now, blank=True)