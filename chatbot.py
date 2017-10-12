from chatterbot import ChatBot

def bot():
    return ChatBot(
        'VilaNetBot',
        storage_adapter='chatterbot.storage.MongoDatabaseAdapter',
        logic_adapters=[
            'chatterbot.logic.BestMatch'
        ],
        filters=[
            'chatterbot.filters.RepetitiveResponseFilter'
        ],
        database='chatterbot-database',
        database_uri='mongodb://mongo:27017/'
    )