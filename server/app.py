from flask import Flask
from flask_cors import CORS
from models import db
from routes import main_routes

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///portfolio.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
app.register_blueprint(main_routes)

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)