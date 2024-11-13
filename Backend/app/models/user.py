from __future__ import annotations

import uuid

from . import db as db_instance

db = db_instance  # type: ignore


class User(db.Model):  # type: ignore
    __tablename__ = "users"

    id = db.Column(
        db.String(36), primary_key=True, default=lambda: str(uuid.uuid4())
    )
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    cellphone = db.Column(db.String(20))
    cpf = db.Column(db.String(20))
    status = db.Column(db.String(50), default="inactive")
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    updated_at = db.Column(
        db.DateTime,
        default=db.func.current_timestamp(),
        onupdate=db.func.current_timestamp(),
    )

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "cellphone": self.cellphone,
            "cpf": self.cpf,
            "status": self.status,
            "createdAt": self.created_at.isoformat()
            if self.created_at
            else None,
            "updatedAt": self.updated_at.isoformat()
            if self.updated_at
            else None,
        }

    def __repr__(self):
        return f"<User {self.name}, {self.email}>"
