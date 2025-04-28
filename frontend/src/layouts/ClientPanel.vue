<template>
    <AppHeader />
    <main>
        <router-view />
    </main>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
export default {
    name: 'ClientPanel',
    components: {
        AppHeader,
    },
}
</script>