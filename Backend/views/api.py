from flask import Blueprint
from flask_restx import Api

api_blueprint = Blueprint('api', __name__)

api = Api(api_blueprint)

api_namespace = api.namespace('api', description='User related operations')