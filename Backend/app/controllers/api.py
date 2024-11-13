from __future__ import annotations

from flask import Blueprint
from flask_restx import Api

api_blueprint = Blueprint("api", __name__)

api = Api(api_blueprint)

api_namespace = api.namespace("api", description="All api related operations")
api.add_namespace(api_namespace)
