import json
import datetime

def empty(event, context):
    return {
        "statusCode": 200,
        "body": json.dumps({
            "message": "call made at %s" % datetime.datetime.today().strftime("%Y.%m.%d - %H:%M:%S.%f")
        })
    }

