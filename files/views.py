
from django.shortcuts import render
from django.http import HttpResponse
from .models import Datas
from django.core.files.storage import FileSystemStorage
import pickle
import json

def index(request):
    return render(request,"index.html")
def upload(request):
    file=request.FILES.getlist('file')
    print(file)
    for f in file:
        if " " in f:
            f=changename(file)
        obj=Datas(file=f)
        obj.save()
    files=list(Datas.objects.all().values('file'))
    return HttpResponse(json.dumps(files))

def changename(file):
    oldname=file.name
    newname=""
    for i in range(0, len(oldname)):

        if oldname[i] == " ":
            newname += "_"
        else:
            newname += oldname[i]
    file.name=newname
    print(file.name)
    return file