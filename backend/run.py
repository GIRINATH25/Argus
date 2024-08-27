from api import create_app
from config import Config
from flask_cors import CORS


app = create_app()
CORS(app)
app.config.from_object(Config)
config = Config()

@app.before_request
def initialize_table():
    config.create_UserInfo()

if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=True)