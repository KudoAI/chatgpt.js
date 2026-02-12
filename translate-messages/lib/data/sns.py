from types import SimpleNamespace as sns

def from_dict(obj):
    for key, val in obj.items():
        if isinstance(val, dict):
            obj[key] = from_dict(val)
    return sns(**obj)
