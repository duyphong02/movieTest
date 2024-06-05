<template>
    <div>
        <MovieDetail3Component :product6="product6" v-if="product6" />
    </div>
</template>

<script>
import MovieDetail3Component from "@/components/MovieDetail3Component"
export default {
    components: {
        MovieDetail3Component
    },
    layout:"custom",
    data() {
        return {
            product6: {}/// chỗ này ban đầu e để là mảng mà res.data nó là object ý nên có bug Invalid prop: type check failed for prop "product4". Expected Object, got Array 
        }
    },
    created() {
        this.RouterMovie3()
    },
    methods: {
        async RouterMovie3() {
            this.$store.dispatch("getPopularTVShows4").then((res) => {
                this.product6 = res.data
            })
        }
    },

}
</script>

<style lang="scss" scoped></style>