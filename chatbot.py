from chatterbot import ChatBot

def bot():
    return ChatBot(
        'VilaNetBot',
        storage_adapter='chatterbot.storage.SQLStorageAdapter',
    )