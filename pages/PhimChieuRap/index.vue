<template>
    <div>
        <MovieDetail4Component :product7="product7" v-if="product7" />
    </div>
</template>

<script>
import MovieDetail4Component from "@/components/MovieDetail4Component"
export default {
    components: {
        MovieDetail4Component
    },
    layout:"custom",
    data() {
        return {
            product7: {}/// chỗ này ban đầu e để là mảng mà res.data nó là object ý nên có bug Invalid prop: type check failed for prop "product4". Expected Object, got Array 
        }
    },
    created() {
        this.RouterMovie4()
    },
    methods: {
        async RouterMovie4() {
            this.$store.dispatch("getPopularTVShows5").then((res) => {
                this.product7 = res.data
            })
        }
    },

}
</script>

<style lang="scss" scoped></style>