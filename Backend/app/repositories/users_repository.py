from __future__ import annotations

from datetime import datetime
from datetime import timezone

from models.user import User
from sqlalchemy.orm import Session
from utils.user_types import UserDataDict


def get_all_users(db_session: Session):
    """Returns all users"""
    return [user.to_dict() for user in db_session.query(User).all()]


def get_user_by_id(db_session: Session, user_id: int):
    """Returns the user with the given id"""
    return db_session.query(User).filter(User.id == user_id).first()


def get_user_by_email(db_session: Session, email: str):
    """Returns the user with the given email"""
    return db_session.query(User).filter(User.email == email).first()


def get_user_by_cpf(db_session: Session, cpf: str):
    """Returns the user with the given cpf"""
    return db_session.query(User).filter(User.cpf == cpf).first()

def edit_user(db_session: Session, new_user_data: UserDataDict):
    """
    Receives a dictionary with the new user data and updates the user with the
    given id

    --> WARN: id is the only required field <--
    """
    user = get_user_by_id(db_session, new_user_data["id"])

    for key, value in new_user_data.items():
        if value:
            setattr(user, key, value)
    setattr(user, "updated_at", datetime.now(timezone.utc))
    db_session.commit()
    return user.to_dict()


def create_new_user(db_session: Session, new_user_data: UserDataDict):
    """Receives a dictionary with the new user data and creates a new user"""
    now = datetime.now(timezone.utc)
    new_user = User(
        name=new_user_data["name"],
        email=new_user_data["email"],
        cellphone=new_user_data["cellphone"],
        cpf=new_user_data["cpf"],
        status=new_user_data["status"],
        created_at=now,
        updated_at=now,
    )
    db_session.add(new_user)
    db_session.commit()
    return new_user.to_dict()
