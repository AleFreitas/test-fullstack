from __future__ import annotations

from flask_restx import Resource
from schemas.user_dto import UserDto
from services.user_services import find_all_users
from services.user_services import insert_user
from services.user_services import update_user

from .api import api as api_instance
from .api import api_namespace as api

api_instance.add_namespace(UserDto.api)


@api.route("/users")
class Users(Resource):
    def get(self):
        return find_all_users(), 200


@api.route("/user")
class User(Resource):
    @api.expect(UserDto.user_put, validate=True)
    def put(self):
        user_data = api.payload
        return update_user(user_data), 200


@api.route("/user")
class UserCreate(Resource):
    @api.expect(UserDto.user_post, validate=True)
    def post(self):
        user_data = api.payload
        return insert_user(user_data), 201
