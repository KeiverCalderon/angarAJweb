<template>
    <AppBanner />
    <AppCategories :mode="'three'"/>
</template>

<script>
import AppBanner from '../components/AppBanner.vue';
import AppCategories from '../components/AppCategories.vue';
export default {
    name: 'IndexView',
    components: {
        AppBanner,
        AppCategories
    },
}
</script>