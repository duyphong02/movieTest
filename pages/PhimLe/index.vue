<template>
    <div>
        <MovieDetail2Component :product5="product5" v-if="product5" />
    </div>
</template>

<script>
import MovieDetail2Component from "@/components/MovieDetail2Component"
export default {
    components: {
        MovieDetail2Component
    },
    layout:"custom",
    data() {
        return {
            product5: {}/// chỗ này ban đầu e để là mảng mà res.data nó là object ý nên có bug Invalid prop: type check failed for prop "product4". Expected Object, got Array 
        }
    },
    created() {
        this.RouterMovie2()
    },
    methods: {
        async RouterMovie2() {
            this.$store.dispatch("getPopularTVShows3").then((res) => {
                this.product5 = res.data
            })
        }
    },

}
</script>

<style lang="scss" scoped></style>