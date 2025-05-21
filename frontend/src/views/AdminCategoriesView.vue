<template>
    <div id="admin-categories">
        <h1>Categorías</h1>
        <div class="form-card">
            <h2>Crear categoría</h2>
            <form>
                <div class="form-group">
                    <input type="text" name="nombre" id="nombre" placeholder="Nombre de la categoría">
                </div>
                <div class="container-btns">
                    <div class="input-image">
                        <label for="imagen" class="btn-upload">Subir imagen</label>
                        <input type="file" name="imagen" id="imagen" accept="image/*" required>
                    </div>
                    <button type="submit" class="btn-add">Añadir</button>
                </div>
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
                            <a href="{{ url_for('obtener_gasto', id_gasto=gasto.id) }}" class="btn-edit">Editar</a>
                            <a href="{{ url_for('eliminar_gasto', id_gasto=gasto.id) }}" class="btn-delete">Eliminar</a>
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
    margin: 20px;
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

.input-image {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.input-image input[type="file"] {
    display: none;
}

.btn-upload {
    width: 100px;
    padding: 10px 10px;
    margin: 5px 0;
    text-align: center;
    color: #ffffff;
    background-color: #1a232c;
    border-radius: var(--border-radius-input);
    cursor: pointer;
    transition: background 0.2s;
    box-shadow: var(--box-shadow);
}

.btn-upload:hover {
    background-color: #000101;
}

.btn-add {
    font-family: "Cal Sans", sans-serif;
    border: none;
    padding: 10px 20px;
    margin: 5px 0;
    text-align: center;
    color: #ffffff;
    background-color: #1a232c;
    border-radius: var(--border-radius-input);
    cursor: pointer;
    transition: background 0.2s;
    box-shadow: var(--box-shadow);
}

.container-btns{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}

.table-categories {
    background-color: white;
    border-radius: var(--border-radius-box);
    box-shadow: var(--box-shadow);
    padding: 20px;
    margin: 20px;
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

}

/* pantallas super pequeñas */
@media(max-width: 300px){
.container-btns{
    display: flex;
    align-items: center;
    flex-direction: column;
}
}

</style>