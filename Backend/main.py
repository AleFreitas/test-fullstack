from __future__ import annotations

import os

import controllers.users  # to guarantee that the routes are registered # noqa: F401 E501
import errors  # to guarantee that the error handlers are registered # noqa: F401 E501
from controllers.api import api_blueprint
from dotenv import load_dotenv
from flask import Flask
from flask_cors import CORS
from models import db

load_dotenv()


def create_app():
    flask_app = Flask(__name__)

    CORS(flask_app, origins=["*"])

    flask_app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv(
        "DATABASE_URL", "postgresql://user:password@localhost/mydatabase"
    )
    flask_app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.init_app(flask_app)

    with flask_app.app_context():
        db.create_all()

    flask_app.register_blueprint(api_blueprint)

    print("Registered routes:")
    for rule in flask_app.url_map.iter_rules():
        print(f"{rule.endpoint} - {rule}")

    return flask_app


app = create_app()

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
