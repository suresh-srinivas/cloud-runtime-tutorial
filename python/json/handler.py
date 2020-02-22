import json
def jsonparse(event, context):
  with open('1.json') as f:
    data = json.load(f)
    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*", # Required for CORS support to work
        },
        "body": ""
    }


