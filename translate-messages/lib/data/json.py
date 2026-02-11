import json, os

def read(path):
    if not os.path.exists(path) : return {}
    with open(path, 'r', encoding='utf-8') as file : return json.load(file)

def write(srcData, targetPath):
    os.makedirs(os.path.dirname(targetPath), exist_ok=True)
    with open(targetPath, 'w', encoding='utf-8') as file:
        json.dump(srcData, file, indent=2)
