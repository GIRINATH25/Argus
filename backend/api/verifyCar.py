from flask import Blueprint, jsonify, request
from urllib.request import urlopen
from config import Config
import psycopg2

verify = Blueprint('verifyCar', __name__)
config = Config()

@verify.get("/verifyCarNo/<string:strs>")
def find_all(strs):
    try:
        url = f'https://www.carinfo.app/rc-details/{strs}'
        with urlopen(url) as page:
            html = page.read().decode('utf-8')
            findavail = html.find('Maker')
            avail = False if findavail == -1 else True
            return jsonify({"avail": avail})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@verify.post('/register')
def create_accounts():
    try:
        data = request.get_json()
        with config.get_connection() as con:
            with con.cursor() as cur:
                sav = cur.execute('''INSERT INTO UserInfo (name, phno, regno) VALUES (%s,%s,%s)''',
                                                        (data['name'],data['phno'],data['regNo']))
                con.commit()
                return jsonify({'message':'registered'})
        return jsonify({"messsage":'problem in insert'})
    except Exception as e:
        return jsonify({"error":str(e)}), 500