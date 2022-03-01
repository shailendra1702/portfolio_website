from wsgi import app 
from waitress import serve
from paste.translogger import TransLogger
import logging

logger = logging.getLogger('waitress')
logger.setLevel(logging.INFO)
serve(TransLogger(app),host = '127.0.0.1',port = 8080)