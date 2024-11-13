from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Import all models here so they can be registered on SQLAlchemy
from .user import User
