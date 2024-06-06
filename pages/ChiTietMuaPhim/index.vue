<template>
    <div>
        <BuyPhimComponent  :product9="product9" v-if="product9" />
    </div>
</template>

<script>
import BuyPhimComponent from "@/components/BuyPhimComponent";
export default {
    components: {
        BuyPhimComponent
    },
    layout: "custom",
    data() {
        return {
            product9: {}
        }
    },
    created(){
        this.BuyListPhim()
    },
    methods:{
      async BuyListPhim(){
        this.$store.dispatch("BuyFilmDetail").then((res)=>{
            this.product9 = res.data
        })
        }
    }

}
</script>

<style lang="scss" scoped></style>