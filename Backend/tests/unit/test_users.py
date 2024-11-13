# tests/unit/test_users.py
from __future__ import annotations

from unittest.mock import patch

from app.services.user_services import find_all_users

mock_users_db = [
    {
        "id": 1,
        "name": "Alice",
        "email": "alice@example.com",
        "status": "active",
        "cellphone": "1234567890",
        "cpf": "12345678901",
        "createdAt": 1672531199 * 1000,
        "updatedAt": 1672531200 * 1000,
    },
    {
        "id": 2,
        "name": "Bob",
        "email": "bob@example.com",
        "status": "inactive",
        "cellphone": "0987654321",
        "cpf": "09876543210",
        "createdAt": 1672531199 * 1000,
        "updatedAt": 1672531200 * 1000,
    },
]


@patch("app.services.user_services.get_all_users", return_value=mock_users_db)
def test_find_all_users(mock_get_all_users, app):
    with app.app_context():
        result = find_all_users()

    expected_result = [
        {
            "id": 1,
            "name": "Alice",
            "email": "alice@example.com",
            "status": "active",
            "cellphone": "1234567890",
            "cpf": "12345678901",
            "createdAt": 1672531199 * 1000,
            "updatedAt": 1672531200 * 1000,
        },
        {
            "id": 2,
            "name": "Bob",
            "email": "bob@example.com",
            "status": "inactive",
            "cellphone": "0987654321",
            "cpf": "09876543210",
            "createdAt": 1672531199 * 1000,
            "updatedAt": 1672531200 * 1000,
        },
    ]
    assert result == expected_result
    mock_get_all_users.assert_called_once()
