from flask import Flask, Blueprint
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
db = SQLAlchemy()
api_bp = Blueprint('api', __name__)
# Aspectos de seguridad y almacenamiento temporal
app.secret_key = "12345678"
app.config['SESSION_COOKIE_SECURE'] = True  # Solo enviar cookies a través de HTTPS
app.config['SESSION_COOKIE_SAMESITE'] = 'None'  # Permitir cookies en solicitudes cruzadas
# Base de datos
ruta_base_datos = ""
app.config['SQLALCHEMY_DATABASE_URI'] = ruta_base_datos
db.init_app(app)
CORS(app, supports_credentials=True)

app.register_blueprint(api_bp)

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000)