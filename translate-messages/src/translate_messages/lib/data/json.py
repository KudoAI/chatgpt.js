import json, os

def read(path):
    if not os.path.exists(path) : return {}
    with open(path, 'r', encoding='utf-8') as file : return json.load(file)

def write(src_data, target_path):
    os.makedirs(os.path.dirname(target_path), exist_ok=True)
    with open(target_path, 'w', encoding='utf-8') as file:
        json.dump(src_data, file, indent=2, ensure_ascii=False)
