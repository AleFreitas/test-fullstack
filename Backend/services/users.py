from models import db
from repositories.users import *

from utils.user_types import UserDataDict
from utils.errors import ConflictError

def find_all_users():
    """Implements the business logic to return all users"""
    with db.session() as session:  # Gerencia automaticamente a sessão do banco
            users_db = get_all_users(session)
        
    return [{
        "id": user.id,
        "name": user.name,
        "email": user.email,
        "status": user.status,
        "cellphone": user.cellphone,
        "cpf": user.cpf,
        "createdAt": user.created_at.timestamp() * 1000,
        "updatedAt": user.updated_at.timestamp() * 1000
    } for user in users_db]

def update_user(user: UserDataDict):
    """Implements the business logic to update a user"""
    with db.session() as session:
        if user.get("email"):
            existent_user = get_user_by_email(session, user["email"])
            if existent_user and existent_user.id != user["id"]:
                raise ConflictError("User already exists")
        return edit_user(session, user)
    
def insert_user(user: UserDataDict):
    """Implements the business logic to create a new user"""
    with db.session() as session:
        existent_user = get_user_by_email(session, user["email"])
        if existent_user:
            raise ConflictError("User already exists")
        return create_new_user(session, user)
