from __future__ import annotations

from typing import TypedDict


class UserDataDict(TypedDict):
    id: str
    name: str
    email: str
    status: str
    cellphone: str
    cpf: str
