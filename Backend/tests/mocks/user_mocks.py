from __future__ import annotations

from app.models.user import User

mock_user_data = User(
    id="123e4567-e89b-12d3-a456-426614174000",
    email="arthur@example.com",
    name="Arthur",
    status="active",
    cellphone="1234569999",
    cpf="12345677777",
)

mock_same_email_user = User(
    id="123e4567-e89b-12d3-a456-426614174001",
    email="arthur@example.com",
    name="Thiago",
    status="active",
    cellphone="12345697777",
    cpf="12341111111",
)

mock_user_list = [
    {
        "id": "123e4567-e89b-12d3-a456-426614174002",
        "name": "Alice",
        "email": "alice@example.com",
        "status": "active",
        "cellphone": "1234567890",
        "cpf": "12345678901",
        "createdAt": 1672531199 * 1000,
        "updatedAt": 1672531200 * 1000,
    },
    {
        "id": "123e4567-e89b-12d3-a456-426614174003",
        "name": "Bob",
        "email": "bob@example.com",
        "status": "inactive",
        "cellphone": "0987654321",
        "cpf": "09876543210",
        "createdAt": 1672531199 * 1000,
        "updatedAt": 1672531200 * 1000,
    },
]
