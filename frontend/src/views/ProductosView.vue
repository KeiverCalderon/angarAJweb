<template>
    <div>
        <h2>Productos de la categoría: {{ categoria }}</h2>
        <!-- Aquí puedes usar la variable "categoria" para mostrar productos relacionados -->
    </div>
</template>

<script>
export default {
    name: 'ProductosView',
    emits: ['eventoPersonalizado'],
    computed: {
        categoria() {
            return this.$route.params.category;
        },
    },
};
</script>