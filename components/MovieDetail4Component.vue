<template>
    <div class="bg-gray-300 min-h-screen" v-if="product7 && product7.results">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div class="flex justify-between header">
                <h2 class="text-2xl font-bold tracking-tight text-gray-900">Phim Chiếu Rạp</h2>
            </div>
            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                <div v-for="product in selectedMovie" :key="product.id" class="group relative">
                    <div @click="RouterClick(product.id)"
                        class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img :src="getImg(product.poster_path)" :alt="product.poster_path"
                            class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                    </div>
                    <div class="mt-4 flex justify-between">
                        <div>
                            <h3 class="text-sm text-gray-700">
                                {{ product.title }}
                            </h3>
                            <p class="mt-1 text-sm text-gray-500">{{ product.vote_average }}</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <p class="text-sm font-medium text-gray-900">{{ product.vote_count }}$</p>
                            <button @click="ClickBuy">
                                <svg class="w-5 h-5 text-gray-800 dark:text-white " aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path fill-rule="evenodd"
                                        d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product7: {
            type: Object,
        }
    },
    methods: {
        getImg(path) {
            return `https://image.tmdb.org/t/p/w500/${path}`
        },
        RouterClick(id) {
            this.$router.push(`/home/${id}`)
        },
        ClickBuy(){
      this.$router.push("/ChiTietMuaPhim")
    }
    },
    computed: {
        selectedMovie() {
            return this.product7.results.slice(12, 16)
        }
    }
}
</script>

<style lang="scss" scoped></style>