<template>
    <AppHeader />
    <AppBanner />

</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import AppBanner from '../components/AppBanner.vue';
export default {
    name: 'IndexView',
    components: {
        AppHeader,
        AppBanner
    },
}
</script>