<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div style="display: flex; justify-content: space-between;" class="header">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Phim Chiếu Rạp</h2>
        <input @blur="searchUser" v-model="searchList" style="border: 1px solid ; margin-top: 10px;" type="text"
          placeholder="Search" class="name"> </input>
      </div>
      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in product2" :key="product.id" class="group relative">
          <div @click="RouterClick(product.id)"
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img :src="getImg(product.poster_path)" :alt="product.imageAlt"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                {{ product.title }}
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.vote_average }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ product.vote_count }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product1: {
      type: Array,
      default: []

    }
  },
  data() {
    return {
      searchList: '',
      product2: []
    }
  },
  mounted() {
    this.product2 = this.product1
    console.log(1234567, this.product2, this.product1);
  },
  methods: {
    searchUser() {
      const searchTerm = this.searchList.trim().toLowerCase()
      if (!searchTerm) {
        // Nếu ô tìm kiếm trống, hiển thị lại toàn bộ danh sách sản phẩm
        this.product2 = this.product1
      } else {
        // Lọc danh sách sản phẩm dựa trên giá trị searchTerm
        this.product2 = this.product1.filter(product =>
          product.title.toLowerCase().includes(searchTerm)||
        String(product.vote_average).includes(searchTerm) ||  // Chuyển đổi vote_average thành chuỗi và tìm kiếm
        String(product.vote_count).includes(searchTerm)       // Chuyển đổi vote_count thành chuỗi và tìm kiếm
      );
      }
    },
    getImg(path) {
      return `https://image.tmdb.org/t/p/w500/${path}`
    },
    RouterClick(id) {
      console.log(1233);
      this.$router.push(`home/${id}`)
    }
  },
  computed: {
    filteredProducts() {
      // Sử dụng computed property để lọc danh sách sản phẩm dựa trên searchList
      const searchTerm = this.searchList.trim().toUpperCase()
      if (!searchTerm) {
        return this.product1  // Hiển thị toàn bộ danh sách nếu không có giá trị tìm kiếm
      } else {
        return this.product1.filter(product =>
          product.title.toUpperCase().includes(searchTerm)
        )
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>