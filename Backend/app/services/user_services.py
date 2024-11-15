from __future__ import annotations

from models import db
from repositories.users_repository import create_new_user
from repositories.users_repository import edit_user
from repositories.users_repository import get_all_users
from repositories.users_repository import get_user_by_email
from repositories.users_repository import get_user_by_id
from repositories.users_repository import get_user_by_cpf
from utils.user_types import UserDataDict
from werkzeug.exceptions import BadRequest
from werkzeug.exceptions import Conflict


def find_all_users():
    """Implements the business logic to return all users"""
    with db.session() as session:  # Gerencia automaticamente a sessão do banco
        return get_all_users(session)


def update_user(user: UserDataDict):
    """Implements the business logic to update a user"""
    with db.session() as session:
        user_exists = get_user_by_id(session, user["id"])
        if not user_exists:
            raise BadRequest("User does not exist")
        if user.get("cpf"):
            existent_user_by_cpf = get_user_by_cpf(session, user["cpf"])
            if (existent_user_by_cpf and (
                existent_user_by_cpf.to_dict()["id"] != user["id"]
            )):
                raise Conflict("User already exists")
        if user.get("email"):
            existent_user_by_email = get_user_by_email(session, user["email"])
            if existent_user_by_email and (
                existent_user_by_email.to_dict()["id"] != user["id"]
            ):
                raise Conflict("User already exists")
            
        return edit_user(session, user)


def insert_user(user: UserDataDict):
    """Implements the business logic to create a new user"""
    with db.session() as session:
        existent_user = get_user_by_email(session, user["email"])
        if existent_user:
            raise Conflict("User already exists")
        existent_user = get_user_by_cpf(session, user["cpf"])
        if existent_user:
            raise Conflict("User already exists")
        return create_new_user(session, user)
