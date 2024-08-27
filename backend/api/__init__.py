from flask import Flask
from .verifyCar import verify

def create_app():
    app = Flask(__name__)
    app.register_blueprint(verify)
    return app
