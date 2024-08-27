from api import create_app
from config import Config


app = create_app()
app.config.from_object(Config)
config = Config()

@app.before_request
def initialize_table():
    config.create_UserInfo()

if __name__ == '__main__':
    app.run(debug=True)