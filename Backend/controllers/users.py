from flask_restx import Resource

from .api import api_namespace as api
from schemas.UserDto import UserDto
from services.users import *

user_model = UserDto.user
user_post_model = UserDto.user_post
user_put_model = UserDto.user_put

@api.route('/users')
class Users(Resource):
    def get(self):
        return find_all_users(), 200

@api.route('/user')
class User(Resource):
    @api.expect(user_put_model, validate=True)
    def put(self):
        user_data = api.payload
        return update_user(user_data), 200

@api.route('/user')
class UserCreate(Resource):
    @api.expect(user_post_model, validate=True)
    def post(self):
        user_data = api.payload
        return insert_user(user_data), 201
