<template>
    <HomeComponent v-if="product1.length > 0" :product1="product1" />
</template>

<script>
import HomeComponent from '@/components/HomeComponent'
export default {
    components: {
        HomeComponent
    },
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
//     searchUser() {
//         const searchTerm = this.searchList.trim().toLowerCase()
//         if (!searchTerm) {
//             // Nếu ô tìm kiếm trống, hiển thị lại toàn bộ danh sách sản phẩm
//             return this.product1
//         } else {
//             // Lọc danh sách sản phẩm dựa trên giá trị searchTerm
//             return this.product1.filter(product =>
//                 product.title.toLowerCase().includes(searchTerm)
//             )
//         }
//     },
//     computed: {
//         filteredProducts() {
//             // Sử dụng computed property để lọc danh sách sản phẩm dựa trên searchList
//             const searchTerm = this.searchList.trim().toLowerCase()
//             if (!searchTerm) {
//                 return this.product1  // Hiển thị toàn bộ danh sách nếu không có giá trị tìm kiếm
//             } else {
//                 return this.product1.filter(product =>
//                     product.title.toLowerCase().includes(searchTerm)
//                 )
//             }
//         }
//     }
 }



</script>

<style lang="scss" scoped></style>