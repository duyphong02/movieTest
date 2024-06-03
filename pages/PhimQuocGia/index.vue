<template>
    <div>
        <MovieDetailComponent :product4="product4" v-if="product4" />
    </div>
</template>

<script>
import MovieDetailComponent from "@/components/MovieDetailComponent"
export default {
    components: {
        MovieDetailComponent
    },
    layout:"custom",
    data() {
        return {
            product4: {}/// chỗ này ban đầu e để là mảng mà res.data nó là object ý nên có bug Invalid prop: type check failed for prop "product4". Expected Object, got Array 
        }
    },
    created() {
        this.RouterMovie()
    },
    methods: {
        async RouterMovie() {
            this.$store.dispatch("getPopularTVShows2").then((res) => {
                this.product4 = res.data
            })
        }
    },

}
</script>

<style lang="scss" scoped></style>