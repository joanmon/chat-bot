from flask import Flask, send_from_directory, render_template
from chatbot import bot

app = Flask(__name__, static_url_path='')
vilaNetBot = bot()


@app.route('/')
def index():
    #response = vilaNetBot.get_response('fine')
    #return str(response)
    return render_template('index.html')

@app.route('/public/<path:path>')
def send_js(path):
    return send_from_directory('public', path)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
