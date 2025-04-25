<template>
    <div class="login-div">
        <img src="../assets/logo.png" alt="">
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
            <div class="options-div">
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
        width: 100%;
        background-color: #f0f0f0;
        background-image: radial-gradient(circle, #810b6d, #714198, #5464b6, #3181c7, #249bcd);
        gap: 20px;
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
        min-width: 280px;
        width: 80%;
        max-width: 400px;
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
        width: 90%;
    }
    .form-label {
        font-size: 1.2em;
        margin-bottom: 5px;
    }
    .form-input {
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #4e4e4e;
    }
    .send-form-button {
        background-color: var(--boton);
        color: white;
        padding: 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 20px;
        box-sizing: border-box;
        min-width: 250px;
        width: 90%;
        max-width: 400px;
        font-size: 1.2em;
        font-weight: 600;
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
    }

/* Adaptación a Pantallas Más Grandes */
@media (min-width: 768px) {
    .login-div {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }
    .form {
        width: 400px;
    }
}
/* Animaciones Generales */
</style>