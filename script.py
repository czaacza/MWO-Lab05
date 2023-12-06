import requests
import json
import os

pat = os.getenv('PTA')
pat = '23jq4zgwxrochogu3k7nhy36oqq56vv3i5tbyxc47mxzc3ya2q4q'
# pat

organization = '01169549'  
project = 'Lab05-MWO'            

url = f'https://dev.azure.com/{organization}/{project}/_apis/wit/workitems/$Bug?api-version=6.0'

headers = {
    'Content-Type': 'application/json-patch+json',
    'Authorization': f'Basic {pat}'
}

work_item = [
    {
        "op": "add",
        "path": "/fields/System.Title",
        "value": "Tytuł błędu"  
    },
    {
        "op": "add",
        "path": "/fields/Microsoft.VSTS.TCM.ReproSteps",
        "value": "Opis kroków reprodukujących błąd"  
    }
]

response = requests.post(url, headers=headers, data=json.dumps(work_item))

if response.status_code == 200:
    print("Work Item utworzony pomyślnie.")
    print("ID Work Item:", response.json()['id'])
else:
    print("Błąd przy tworzeniu Work Item:", response.content)
