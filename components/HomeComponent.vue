<template>
  <div class="bg-gray-300 min-h-screen">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div class="flex justify-between header">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Phim Chiếu Rạp</h2>
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
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    product1: {
      type: Array,
      default: []

    }
  },
  data() {
    return {
      // searchList: '',
      product2: []
    }
  },
  mounted() {
    this.product2 = this.product1
  },
  methods: {
    getImg(path) {
      return `https://image.tmdb.org/t/p/w500/${path}`
    },
    RouterClick(id) {
      this.$router.push(`/home/${id}`)
    }
  },
  computed: {
    ...mapState(["key"]),
  },
  watch: {
    key(newValue, oldValue) {
      this.product2 = this.product1.filter(product =>
        product.title.toUpperCase().includes(newValue) ||
        String(product.vote_average).includes(newValue) ||  // Chuyển đổi vote_average thành chuỗi và tìm kiếm
        String(product.vote_count).includes(newValue)

      );
    },
  }
}
</script>

<style lang="scss" scoped></style>