from flask import Flask,jsonify
from urllib.request import urlopen

app = Flask(__name__)


@app.route("/verifyCarNo/<strs>")
def findavail(strs):
    page = urlopen(f'https://www.carinfo.app/rc-details/{strs}')
    html = page.read()
    html = html.decode('utf-8')
    findavail = html.find('Maker')
    return jsonify({"avail":"False" if findavail == -1 else "True"})