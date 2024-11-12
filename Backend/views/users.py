from flask_restx import Resource
from .api import api_namespace as api
from schemas.UserDto import UserDto

user_model = UserDto.user
user_post_model = UserDto.user_post
user_put_model = UserDto.user_put

@api.route('/users')
class Users(Resource):
    @api.expect(user_model)
    def get(self):
        """Returns a list of users"""
        users = [
            {"id": "06018407-c3e9-4a2a-a381-b4b70cce2b1e", "name": "User1", "email": "user1@example.com", "status": "ACTIVE", "createdAt": 1679948600392, "updatedAt": 1679948600392},
            {"id": "06018407-c3e9-4a2a-a381-b4b70cce2b1f", "name": "User2", "email": "user2@example.com", "status": "ACTIVE", "createdAt": 1679948600392, "updatedAt": 1679948600392},
        ]
        return {'users': users}

@api.route('/user/<string:id>')
class User(Resource):
    @api.expect(user_put_model)
    def put(self, id):
        """Updates a user"""
        updated_user = api.payload
        return {'message': f'User {id} updated', 'updated_user': updated_user}, 200

@api.route('/user')
class UserCreate(Resource):
    @api.expect(user_post_model)
    def post(self):
        """Creates a new user"""
        new_user = api.payload
        return {'message': 'User created', 'new_user': new_user}, 201
