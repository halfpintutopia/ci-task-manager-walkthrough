import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

if os.path.exists('env.py'):
    import env  # noqa

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DB_URL')

db = SQLAlchemy(app)

# Imported here because it relies on the app and db imported first
# Otherwise Circular import errors - those variables aren't available to use
from taskmanager import routes  # noqa
