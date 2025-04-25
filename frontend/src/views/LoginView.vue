<template>
    <div class="login-div">
        <form action="" class="form">
            <h1>Iniciar Sesión</h1>
            <div class="label-input">
                <label for="email-input" class="form-label">Usuario o Correo</label>
                <input type="email" class="form-input" id="email-input">
            </div>
            <div class="label-input">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input type="password" class="form-input" id="password-input">
            </div>
            <button type="submit" class="send-form-button">Iniciar Sesión</button>
            <div class="label-input">
                <a href="/register">¿No tienes cuenta? Regístrate</a>
            </div>
        </form>
    </div>
</template>
<style scoped>
/* Importes */
@import url(../variables.css);
/* First Mobile */
    .login-div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: #f0f0f0;
        background-image: radial-gradient(circle, #810b6d, #714198, #5464b6, #3181c7, #249bcd);
    }
    h1 {
        color: #333;
        margin-bottom: 20px;
    }

    .form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 300px;
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease-in-out;
    }
    .label-input {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }
    .form-label {
        font-size: 1.2em;
        margin-bottom: 5px;
    }
    .form-input {
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
    }
    .send-form-button {
        background-color: var(--boton);
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 20px;
    }
    .send-form-button:hover {
        background-color: var(--boton-hover);
    }

/* Adaptación a Pantallas Más Grandes */
/* Animaciones Generales */
</style>