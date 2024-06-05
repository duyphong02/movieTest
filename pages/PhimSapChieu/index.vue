<template>
    <div>
        <MovieDetail5Component :product8="product8" v-if="product8" />
    </div>
</template>

<script>
import MovieDetail5Component from "@/components/MovieDetail5Component"
export default {
    components: {
        MovieDetail5Component
    },
    layout: "custom",
    data() {
        return {
            product8: {}/// chỗ này ban đầu e để là mảng mà res.data nó là object ý nên có bug Invalid prop: type check failed for prop "product4". Expected Object, got Array 
        }
    },
    created() {
        this.RouterMovie5()
    },
    methods: {
        async RouterMovie5() {
            this.$store.dispatch("getPopularTVShows6").then((res) => {
                this.product8 = res.data
            })
        }
    },
}
</script>

<style lang="scss" scoped></style>