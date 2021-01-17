from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

from . import validate
import json
from django.views.decorators.csrf import csrf_exempt
from subs.models import Subscriber

@require_http_methods(["POST"])
@csrf_exempt
def subscribe(request):
    '''
        This method will be used to store the email of
        the subscribers
    '''
    request_data = json.loads(request.body)
    email = request_data.get('email')

    validated_data = validate.validate_email(email)
    if validated_data.get('success') == False:
        return JsonResponse(validated_data)
    else:
        sub = Subscriber.objects.all().filter(email=email).values()
        if len(sub) > 0:
            return JsonResponse({"message":"Email Address Already Subscribed", "success": False})
        subscribe = Subscriber(email=email, status="active")
        subscribe.save()
        return JsonResponse({"message":"Subscribed Successfully", "success": True})


@require_http_methods(["GET"])
@csrf_exempt
def subscribe_list(request):
    '''
        This method will be used to list the emails of all the active
        subscribers
    '''
    subscribe  = Subscriber.objects.all().filter(status="active").values()
    list_result = [entry for entry in subscribe]
    return JsonResponse({'subscribers':list_result})
