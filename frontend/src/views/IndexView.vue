<template>
    <AppBanner />
    <AppCategories :mode="'three'"/>
    <AppFixedProducts />
</template>

<script>
import AppBanner from '../components/AppBanner.vue';
import AppCategories from '../components/AppCategories.vue';
import AppFixedProducts from '../components/AppFixedProducts.vue';
export default {
    name: 'IndexView',
    components: {
        AppBanner,
        AppCategories,
        AppFixedProducts,
    },
}
</script>