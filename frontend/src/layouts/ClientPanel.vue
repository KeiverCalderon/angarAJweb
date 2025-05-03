<template>
    <AppHeader />
    <main>
        <router-view />
    </main>
    <AppFooter />
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
export default {
    name: 'ClientPanel',
    components: {
        AppHeader,
        AppFooter,
    },
}
</script>
<style scoped>
main{
    min-height: calc(100vh - 80px);
}
</style>