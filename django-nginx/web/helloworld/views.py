import os
from django.http import HttpResponse

def index(request):
    return HttpResponse(f"Hello, world! {os.uname().nodename}")
