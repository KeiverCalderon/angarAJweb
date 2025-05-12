<template>
    <div class="profile_area">
        <section class="options">
            <h2>Mi Perfil</h2>
            <article class="profile_card">
                <div class="profile_img">
                    <img src="../assets/user-cicrle-svgrepo-com.svg" alt="Profile Image">
                </div>
                <div class="profile_info">
                    <h3 class="username">Nombre de usuario</h3>
                    <p class="email">Correo@gmail.com</p>
                </div>
            </article>
            <article class="option">
                <h3><i class="bx bx-pencil"></i> Editar Mi Cuenta</h3>
            </article>
            <article class="option">
                <h3><i class="bx bx-book"></i> Historial de Compras</h3>
            </article>
            <button class="logout">
                <h3>Cerrar Sesión</h3>
            </button>
        </section>
    </div>
</template>
<style scoped>

.profile_area{
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-color: var(--fondo);
}

h2{
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
    font-weight: 400;
}

.options {
    width: 96%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: calc(100vh - 80px);
    padding: 20px 0;
    box-sizing: border-box;
}

.profile_card {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 20px;
    box-sizing: border-box;
    gap: 20px;
    width: 100%;
    max-width: 400px;
    margin-bottom: 20px;
    background-color: var(--tarjeta);
    border-radius: var(--border-radius-box);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.profile_img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.profile_img img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.profile_info{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

.profile_info .username{
    margin-bottom: 0;
    font-size: 1.5rem;
    font-weight: 400;
}

.profile_info .email{
    margin-top: 0;
    font-weight: 400;
    font-size: 1.2rem;
    color: #333;
}

.option{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    max-width: 400px;
    padding: 0 20px;
    box-sizing: border-box;
    margin-bottom: 10px;
    background-color: var(--tarjeta);
    border-radius: var(--border-radius-box);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.option h3{
    font-size: 1.5rem;
    color: #333;
    font-weight: 400;
}

.logout{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 400px;
    padding: 15px 20px;
    box-sizing: border-box;
    margin-top: 20px;
    background-color: var(--boton);
    color: var(--texto-inverso);
    font-size: 1.5em;
    font-weight: 400;
    border-radius: var(--border-radius-box);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border: none;
}

.logout h3{
    margin: 0;
    font-size: 1.5rem;
    color: var(--texto-inverso);
    font-weight: 400;
}

.logout:hover{
    background-color: var(--boton-hover);
    cursor: pointer;
}

</style>