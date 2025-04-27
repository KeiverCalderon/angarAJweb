<template>
    <AppHeader />
    <AppBanner />
    <AppCategories />

</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import AppBanner from '../components/AppBanner.vue';
import AppCategories from '../components/AppCategories.vue';
export default {
    name: 'IndexView',
    components: {
        AppHeader,
        AppBanner,
        AppCategories
    },
}
</script>