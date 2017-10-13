# Chat Bot
VilaNetCon demo project

## Getting Started
First of all you should install [Docker](https://docs.docker.com/engine/installation/)

## Commands
### Set up
```
$ docker-compose up // you can add -d to execute in background
```
### Training
```
$ docker-compose exec app python /code/train.py // Execute this to train the Bot
```
### Talk with the Bot
Visit http://localhost:8080 to get access to the web client and start chatting :)

### Dependencies
 * https://chatterbot.readthedocs.io/en/stable/
 * http://flask.pocoo.org/
