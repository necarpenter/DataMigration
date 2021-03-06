from fastapi import FastAPI, File, UploadFile, Form, Header
from typing import Optional

import csv
import json
import BulkUtil
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI()
origins = [
    "http://localhost",
    "http://localhost:4200",
    "http://localhost:8000/files/",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/files/")
async def create_file(file: bytes = File(...), auth_code: Optional[str] = Header(None, convert_underscores=False)):
    print(auth_code)
    filestr = file.decode() 
    text_file = open("temp.csv", "w")
    n = text_file.write(filestr)
    text_file.close()

    data = []
    with open('temp.csv', 'r') as csv_file:
        reader = csv.DictReader(csv_file)

        for row in reader:
            data.append(row)
    
    res = BulkUtil.insertRecords(data, 'Account', auth_code)
    print(res)
    return res


@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile = File(...)):

    # create a dictionary
    data = []
     
    # Open a csv reader called DictReader
    with open(file.file, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
         
        for row in csvReader:
            data.append(row)
    
    BulkUtil.insertRecords(data, 'Account')

