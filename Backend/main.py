from flask import Flask
from views.api import api_blueprint
import views.users  # Importing the views/users.py file to guarantee the routes are registered

def create_app():
    flask_app = Flask(__name__)

    flask_app.register_blueprint(api_blueprint)

    print("Registered routes:")
    for rule in flask_app.url_map.iter_rules():
        print(f"{rule.endpoint} - {rule}")

    return flask_app

app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
