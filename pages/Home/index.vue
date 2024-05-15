<template>
    <HomeComponent v-if="product1.length > 0" :product1="product1" />
</template>

<script>
import HomeComponent from '@/components/HomeComponent';

export default {
    components: {
        HomeComponent
    },
    layout:"custom",
    data() {
        return {
            product1: [],
            searchList: ''
        }
    },
    created() {
        this.ListMovie()
    },
    methods: {
        async ListMovie() {
            this.$store.dispatch("getPopularTVShows").then((res) => {
                this.product1 = res.data.results
            })
        }
    },
 }



</script>

<style lang="scss" scoped></style>