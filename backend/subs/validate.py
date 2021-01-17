import re

def validate_email(email):    
    if email is None:
        return {"message":"Email is required.", "success": False}
    elif not re.match(r"^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$", email):
        return {"message":"Invalid Email Address.", "success": False}
    else:
        return {"message":"Email Subscribed Successfully.", "success": True }