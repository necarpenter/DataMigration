from simple_salesforce import Salesforce, format_soql
from pprint import pprint
import json

def __login__(): 
    with open("./login.json", "r") as login_file:
        creds = json.load(login_file)

    sf = Salesforce(username=creds['login']['username'],
                    password=creds['login']['password'],
                    security_token=creds['login']['token'])
    return sf

def insertRecords(recs, obj):
    sf = __login__()
    results = eval('sf.bulk.'+obj+'.insert(recs, batch_size=10000, use_serial=True)')
    #pprint(results)
    isSuccess = True
    recordIds = []
    errors = []

    for res in results:
        if not res['success']:
            isSuccess = False
            errors.append(res['errors'])
        else:
            recordIds.append(res['id'])

    
    return {'success' : isSuccess,
            'recordIds' : recordIds,
            'errors' : errors}