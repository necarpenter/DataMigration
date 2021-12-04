from simple_salesforce import Salesforce, format_soql
from pprint import pprint
import json
import requests

def __login__(authCode): 
    with open("./login.json", "r") as login_file:
        creds = json.load(login_file)

    url = f"https://{creds['login']['instance']}.salesforce.com/services/oauth2/token"
    payload = "&".join([
        f"client_id={creds['login']['clientid']}",
        f"client_secret={creds['login']['clientsecret']}",
        f"grant_type=authorization_code",
        f"code={authCode}",
        f"redirect_uri=http://localhost:4200/sfcallback"
    ])
    headers = {
        'content-type': "application/x-www-form-urlencoded"
    }

    response = requests.request("POST", url, data=payload, headers=headers)
    credentials = response.json()

    print(credentials)

    sf = Salesforce(instance_url=credentials["instance_url"],
                    session_id=credentials["access_token"],
                    version="47.0")
    #sf = Salesforce(username=creds['login']['username'],
    #                password=creds['login']['password'],
    #                security_token=creds['login']['token'])
                    
    return sf

def insertRecords(recs, obj, authCode):
    sf = __login__(authCode)
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