<template>
    <div id="admin-supervisors">
        <h1>Supervisores</h1>
        <div class="form-card">
            <h2>Añadir supervisor</h2>
            <form>
                <div class="container-inputs">
                    <div class="inputs">
                        <div class="form-group">
                            <input type="text" name="nombre" id="nombre" placeholder="Nombre" required>
                        </div>
                        <div class="form-group">
                            <input type="text" name="apellido" id="apellido" placeholder="Apellido" required>
                        </div>
                        <div class="form-group">
                            <input type="text" name="correo" id="correo" placeholder="Correo electrónico" required>
                        </div>
                        <div class="form-group">
                            <input type="text" name="contraseña" id="contraseña" placeholder="Contraseña" required>
                        </div>
                        <div class="form-group">
                            <input type="text" name="-repita-contraseña" id="repita-contraseña" placeholder="Repita contraseña" required>
                        </div>
                    </div>
                    <div class="image-box">
                        <img src="../assets/icon-supervisor.svg" alt="">
                    </div>
                </div>
                <button type="submit" class="btn-add">Añadir</button>
            </form>
        </div>
        <div class="table-supervisors">
            <h2>Supervisores registrados</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre y apellido</th>
                        <th>Correo</th>
                        <th>Cédula</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>El papu pro</td>
                        <th>elpapupro@gmail.com</th>
                        <th>31122800</th>
                        <td class="actions">
                            <a href="" class="btn-edit">Editar</a>
                            <a href="" class="btn-delete">Eliminar</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AdminSupervisorsView',
    components: {},
}

</script>
<style scoped>

h1{
    font-size: 2rem;
    margin: 20px;
}

h2{
    font-size: 1.5rem;
    margin-top: 0;
}

.form-card {
    background-color: white;
    border-radius: var(--border-radius-box);
    box-shadow: var(--box-shadow);
    margin: 30px 20px;
    padding: 20px;
}

.form-group {
    margin-bottom: 15px;
}

.form-group input {
    width: 100%;
    padding: 12px;
    font-size: 0.9rem;
    border: 1px solid #ddd;
    border-radius: var(--border-radius-input);
    box-sizing: border-box;
}

.form-group #descripcion{
    padding: 12px 0 30px 12px;
}

.image-box{
    display: none;
}

.image-box img{
    width: 200px;
    height: 200px;
}

.btn-add {
    font-family: "Cal Sans", sans-serif;
    border: none;
    padding: 12px 20px;
    margin-top: 15px;
    text-align: center;
    color: #ffffff;
    background-color: #1a232c;
    border-radius: var(--border-radius-input);
    cursor: pointer;
    transition: background 0.2s;
    box-shadow: var(--box-shadow);
}

.btn-add:hover {
    background-color: #000101;
}

.table-supervisors {
    background-color: white;
    border-radius: var(--border-radius-box);
    box-shadow: var(--box-shadow);
    padding: 20px;
    margin: 30px 20px;
    overflow-x: auto;
}

.table-supervisors h3 {
    margin-bottom: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    text-align: center;  
    padding: 12px 30px;
    border-bottom: 1px solid #ddd;
}

th {
    background-color: var(--light-color);
}

.actions {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.btn-edit {
    background-color: var(--btn-edit);
    color: var(--dark-color);
    padding: 10px 20px;
    border-radius: var(--border-radius-input);
    text-decoration: none;
}

.btn-delete {
    background-color: var(--btn-delete);
    color: white;
    padding: 10px 12px;
    border-radius: var(--border-radius-input);
    text-decoration: none;
}

@media (min-width: 900px){
#admin-supervisors{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.form-card,
.table-supervisors {
    max-width: 1200px;
    width: 90%;
    margin: 30px;
}
.container-inputs{
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 20px;
}
.image-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%; 
    height: 275px;
    border: 2px dashed #dbdbdb;
    border-radius: 5px; 
    background-color: #fbfbfb; 
    padding: 15px;
    gap: 10px;
    text-align: center; 
    box-sizing: border-box;
}
.inputs,
.image-box{
    width: 50%;
}
.form-group input{
    width: 100%;
}
}

</style>