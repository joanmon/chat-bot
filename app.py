from flask import Flask, send_from_directory, render_template, request
from chatbot import bot

app = Flask(__name__, static_url_path='')
vilaNetBot = bot()


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/get_response', methods=['POST'])
def get_response():
    response = vilaNetBot.get_response(request.form['message'])
    return str(response)

@app.route('/public/<path:path>')
def send_asset(path):
    return send_from_directory('public', path)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
