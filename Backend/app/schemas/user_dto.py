from __future__ import annotations

from flask_restx import fields
from flask_restx import Namespace


class UserDto:
    api = Namespace("user", description="User related operations")
    user = api.model(
        "user",
        {
            "id": fields.String(
                example="06018407-c3e9-4a2a-a381-b4b70cce2b1e",
                required=True,
                description="user UUID",
            ),
            "name": fields.String(
                example="User", required=True, description="User's last name"
            ),
            "email": fields.String(
                example="user", required=True, description="User's e-mail"
            ),
            "cellphone": fields.String(
                example="99999999999",
                required=True,
                description="User's cellphone",
            ),
            "cpf": fields.String(
                example="99999999999", required=True, description="User's cpf"
            ),
            "status": fields.String(
                example="ACTIVE", required=True, description="User's status"
            ),
            "createdAt": fields.Integer(
                example="1679948600392",
                required=True,
                description="User created at",
            ),
            "updatedAt": fields.Integer(
                example="1679948600392",
                required=True,
                description="User updated at",
            ),
        },
    )
    user_post = api.model(
        "user_post",
        {
            "name": fields.String(
                example="User", required=True, description="User's last name"
            ),
            "email": fields.String(
                example="user", required=True, description="User's e-mail"
            ),
            "cellphone": fields.String(
                example="99999999999",
                required=True,
                description="User's cellphone",
            ),
            "cpf": fields.String(
                example="99999999999", required=True, description="User's cpf"
            ),
            "status": fields.String(
                example="ACTIVE", required=True, description="User's status"
            ),
        },
    )
    user_put = api.model(
        "user_put",
        {
            "id": fields.String(
                example="06018407-c3e9-4a2a-a381-b4b70cce2b1e",
                required=True,
                description="user UUID",
            ),
            "name": fields.String(
                example="User", required=False, description="User's last name"
            ),
            "email": fields.String(
                example="user", required=False, description="User's e-mail"
            ),
            "cellphone": fields.String(
                example="99999999999",
                required=False,
                description="User's cellphone",
            ),
            "cpf": fields.String(
                example="99999999999", required=False, description="User's cpf"
            ),
            "status": fields.String(
                example="ACTIVE", required=False, description="User's status"
            ),
        },
    )
