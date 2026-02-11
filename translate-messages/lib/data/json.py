import json, os

def write(srcData, targetPath):
    os.makedirs(os.path.dirname(targetPath), exist_ok=True)
    with open(targetPath, 'w', encoding='utf-8') as file:
        json.dump(srcData, file, indent=2)
