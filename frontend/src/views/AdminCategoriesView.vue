<template>
    <div id="admin-categories">
        <h1>Categorías</h1>
        <div class="form-card">
            <h2>Crear categoría</h2>
            <form>
                <div class="container-inputs">
                    <div class="inputs">
                        <div class="form-group">
                            <input type="text" name="nombre" id="nombre" placeholder="Nombre de la categoría" required>
                        </div>
                        <div class="form-group">
                            <input type="text" name="eslogan" id="eslogan" placeholder="(Opcional) Eslogan o pequeña descripción">
                        </div>
                    </div>
                    <div class="upload-image-box">
                        <p>Selecciona la imagen para subir:</p>
                        <input type="file" name="imagen" id="imagen" accept="image/*" required>
                    </div>
                </div>
                <button type="submit" class="btn-add">Añadir</button>
            </form>
        </div>
        <div class="table-categories">
            <h2>Categorías existentes</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Imagen</td>
                        <td>Nombre</td>
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
    name: 'AdminCategoriesView',
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

.upload-image-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%; 
    height: 150px;
    border: 2px dashed #dbdbdb;
    border-radius: 5px; 
    background-color: #f4f4f4; 
    padding: 15px;
    gap: 10px;
    text-align: center; 
    box-sizing: border-box;
}

.upload-image-box p{
    margin: 10px;
}

#imagen {
    width: 90%;
    border: none;
    padding: 20px 10px;
    cursor: pointer;
    background-color: #ebebeb;
    border-radius: 10px;
    color: #333;
    transition: background-color 0.3s;
}

#imagen:hover {
    background-color: #bbb;
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

.table-categories {
    background-color: white;
    border-radius: var(--border-radius-box);
    box-shadow: var(--box-shadow);
    margin: 30px 20px;
    padding: 20px;
    overflow-x: auto;
}

.table-categories h3 {
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
#admin-categories{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.form-card,
.table-categories {
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
.inputs,
.upload-image-box{
    width: 50%;
}
}

</style>