def parse(val: str) -> list[str]:
    if not val : return []
    return [item.strip() for item in val.split(',')]
