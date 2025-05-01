from flask import jsonify, request, session
from app import db, api_bp

@api_bp.route('/api/register', methods=['POST'])
def registrar_usuario():
    try:
        data = request.get_json()  # Obtiene los datos JSON del cuerpo de la petición

        if not data:
            return jsonify({'error': 'No se recibieron datos'}), 400

        usuario = data.get('usuario')
        contraseña = data.get('contraseña')
        
        # new_user = Usuarios(usuario=usuario)
        # new_user.set_password(contraseña)
        # db.session.add(new_user)
        # db.session.commit()

        # return jsonify({'mensaje': 'Registrado con éxito', 'id': new_user.id}), 201

    except Exception as e:
        print(f"Error al recibir o procesar los datos: {e}")
        return jsonify({'error': 'Error al procesar la petición'}), 400
    
@api_bp.route('/api/login', methods=['POST'])
def iniciar_sesion():
    try:
        data = request.get_json()  # Obtiene los datos JSON del cuerpo de la petición

        # if not data:
        #     return jsonify({'error': 'No se recibieron datos'}), 400

        # usuario = data.get('usuario')
        # contraseña = data.get('contraseña')
        
        # new_user = Usuarios.query.filter_by(usuario=usuario).first()
        # if new_user.check_password(contraseña):
        #     session['sesion_iniciada'] = True
        #     session['id_usuario'] = new_user.id
        #     session.permanent = True
        #     session.modified = True
        #     print(f"estado de la sesion:{session.get('sesion_iniciada')}")

        #     return jsonify({'mensaje': 'Sesión iniciada con exito', 'nombre': new_user.usuario}), 201
        # else:
        #     return jsonify({'error': 'Usuario o Contraseña Incorrecta'}), 400

    except Exception as e:
        print(f"Error al recibir o procesar los datos: {e}")
        return jsonify({'error': 'Error al procesar la petición'}), 400