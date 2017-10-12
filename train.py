from chatbot import bot
from chatterbot.trainers import ListTrainer

vilaNetBot = bot()

conversation = [
    "Hello",
    "Hi there!",
    "How are you doing?",
    "I'm doing great.",
    "That is good to hear",
    "Thank you.",
    "You're welcome."
]

vilaNetBot.set_trainer(ListTrainer)
vilaNetBot.train(conversation)

