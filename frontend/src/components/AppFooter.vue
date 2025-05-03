<template>
    <footer class="bg-gray-800 text-white py-4">
        <div class="container mx-auto text-center">
            <p>&copy; {{ year }} Distribuciones Angar AJ. Todos los Derechos Reservados.</p>
            <p>Algún problema? <a href="">contacta al soporte</a></p>
        </div>
        <div class="social-media">
            <a href="https://www.instagram.com/distribucionesangaraj/" target="_blank" rel="noopener noreferrer"><i class='bx bxl-instagram'></i></a>
        </div>
    </footer>
</template>
<script>
import 'boxicons/css/boxicons.min.css';

export default {
    name: 'AppFooter',
    data() {
        return {
            year: new Date().getFullYear(),
        };
    },
    mounted() {
        this.year = new Date().getFullYear();
    },
};
</script>
<style scoped>
footer {
    background-color: var(--footer-bg); 
    color: #fff;
    padding: 1rem 0;
}
.container {
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
p {
    margin: 0;
    font-size: 0.875rem; 
}
a {
    color: var(--footer-link); 
    text-decoration: none;
    transition: color 0.3s ease;
}

.social-media{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    font-size: 1.5rem;
}
</style>