<template>
    <div class="login-div">
        <div class="logo-div">
            <img src="../assets/logo.jpg" alt="logo de decolorvers">
            <p>Nuestras Ofertas esperan por tí!</p>
        </div>
        <form action="" class="form">
            <h1>Iniciar Sesión</h1>
            <div class="label-input">
                <label for="email-input" class="form-label">Usuario o Correo</label>
                <input type="email" class="form-input" id="email-input" placeholder="Usuario o Correo">
            </div>
            <div class="label-input">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input type="password" class="form-input" id="password-input" placeholder="Contraseña">
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
        justify-content: flex-start;
        height: 100vh;
        width: 100%;
        background-color: #FFF7F7;
        gap: 20px;
    }
    h1 {
        color: #333;
        margin-bottom: 20px;
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
    }
    .logo-div img {
        width: 100px;
        height: auto;
        border-radius: 50%;
        margin-top: 20px;
    }

    .logo-div p{
        color: #660261;
        font-size: 1.5em;
        text-align: center;
        margin-top: 10px;
        font-family: "Cal Sans", sans-serif;
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
        border-radius: var(--border-radius-box);
        box-shadow: 0 2px 7px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease-in-out;
    }
    .label-input {
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
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
    .form {
        width: 400px;
    }
}

@media (max-height: 600px) and (max-width:900px) {
    .logo-div p {
        margin-top: 50px;
    }
    .logo-div img {
        display: none;
    }
}

@media (min-height: 900px) and (max-width:900px) {
    .login-div {
        justify-content: center;
    }
}
/* Animaciones Generales */
</style>