from flask import Flask
from chatbot import bot

app = Flask(__name__)
vilaNetBot = bot()

@app.route('/')
def hello_world():
    response = vilaNetBot.get_response('fine')
    return str(response)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
