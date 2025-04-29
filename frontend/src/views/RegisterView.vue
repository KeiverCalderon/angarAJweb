<template>
    <div class="login-div">
        <div class="logo-div">
            <img src="../assets/logo.jpg" alt="logo de decolorvers">
            <p>¡Bienvenido a la tienda!</p>
            <p>¡Regístrate y disfruta de nuestras ofertas!</p>
            <a href="/" class="return-index">Volver a la tienda</a>
        </div>
        <form action="" class="form">
            <h1>Registro</h1>
            <div class="label-input">
                <label for="nombre-input" class="form-label">Nombre de usuario</label>
                <input type="email" class="form-input" id="email-input" placeholder="Nombre de usuario">
            </div>
            <div class="label-input">
                <label for="email-input" class="form-label">Correo electrónico</label>
                <input type="email" class="form-input" id="email-input" placeholder="Correo electrónico">
            </div>
            <div class="label-input">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input type="password" class="form-input" id="password-input" placeholder="Contraseña">
            </div>
            <div class="label-input">
                <label for="exampleInputPassword2" class="form-label">Repita contraseña</label>
                <input type="password" class="form-input" id="confirm-password-input" placeholder="Repita contraseña">
            </div>
            <button type="submit" class="send-form-button">Registrarse</button>
            <div class="options-div">
                <p>¿Ya tienes una cuenta? ‎</p><a href="/login">Inicia sesión</a>
            </div>
        </form>
    </div>
</template>

<style scoped>
/* Importes */
@import url(../assets/variables.css);
/* First Mobile */
    *{
        font-family: "Cal Sans", sans-serif;
    }
    .login-div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        min-height: 100vh;
        width: 100%;
        background-color: var(--fondo);
        gap: 20px;
    }
    h1 {
        color: #333;
        margin-bottom: 40px;
        font-weight: 400;
    }

    .logo-div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        min-width: 280px;
        width: 80%;
        max-width: 400px;
        animation: fade-in-normal 1s ease 0s 1 normal none;
    }
    .logo-div img {
        width: 100px;
        height: auto;
        border-radius: 50%;
        margin-top: 20px;
    }

    .logo-div p{
        display: none;
        color: var(--letras);
        font-size: 1.5em;
        text-align: center;
        margin-top: 0;
        margin-bottom: 0;
        font-family: "Cal Sans", sans-serif;

    }
    .logo-div a {
        display: none;
    }

    .form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-width: 280px;
        width: 80%;
        max-width: 400px;
        background-color: var(--tarjeta);
        padding: 20px;
        border-radius: var(--border-radius-box);
        box-shadow: 0 2px 7px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
        animation: fade-in-normal 1s ease 0s 1 normal none;
    }
    .label-input {
        display: flex;
        flex-direction: column;
        margin-bottom: 25px;
        width: 90%;
    }
    .form-label {
        display: none;
    }
    .form-input {
        font-size: 1em;
        padding: 12px 12px;
        border-radius: var(--border-radius);
        border: 1px solid #4e4e4e;
        font-family: Arial, Helvetica, sans-serif;
    }
    .send-form-button {
        background-color: var(--boton);
        color: white;
        padding: 10px;
        border: none;
        border-radius: var(--border-radius);
        cursor: pointer;
        margin-bottom: 20px;
        box-sizing: border-box;
        min-width: 250px;
        width: 90%;
        max-width: 400px;
        font-size: 1.2em;
        font-weight: 600;
        font-family: Arial, Helvetica, sans-serif;
    }
    .send-form-button:hover {
        background-color: var(--boton-hover);
    }

    .options-div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 20px;
    }

    .options-div a {
        color: var(--url);
        text-decoration: none;
    }

/* Adaptación a Pantallas Más Grandes */
@media (min-width: 900px) {
    .login-div {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }
    .logo-div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 400px;
    }
    .logo-div img {
        width: 50%;
        height: auto;
        margin-top: 0px;
    }
    .logo-div p {
        display: block;
        margin-top: 20px;
    }
    .logo-div a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        background-color: var(--boton);
        color: white;
        text-decoration: none;
        border: none;
        border-radius: var(--border-radius);
        cursor: pointer;
        box-sizing: border-box;
        min-width: 100px;
        width: 90%;
        max-width: 150px;
        font-size: 1em;
        font-weight: 200;
        margin-top: 20px;
    }
    .logo-div a:hover {
        background-color: var(--boton-hover);
    }
    .form {
        width: 380px;
    }
}

@media (max-height: 600px) and (max-width:900px) {
    .logo-div p {
        display: none;
    }
    .logo-div img {
        margin-top: 30px;
    }
}

@media (min-height: 900px) and (max-width:900px) {
    .login-div {
        justify-content: center;
    }
}
/* Animaciones Generales */

@keyframes fade-in-normal {0% { opacity: 0; } 100% { opacity: 1;} }
</style>