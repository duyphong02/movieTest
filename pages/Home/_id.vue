<template>

    <div>
        <div class='flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto'>
            <div class='w-2 bg-gray-800'></div>

            <div class="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card"
                data-movie-id="438631">
                <div
                    class="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent">
                </div>
                <div class="relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info" data-lity=""
                    href="https://www.youtube.com/embed/aSHs224Dge0">
                    <div class="poster__info align-self-end w-full">
                        <div class="h-32"></div>
                        <div class="space-y-6 detail_info">
                            <div class="flex flex-col space-y-2 inner">
                                <a class="relative flex items-center w-min flex-shrink-0 p-1 text-center text-white bg-red-500 rounded-full group-hover:bg-red-700"
                                    data-unsp-sanitized="clean">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <div
                                        class="absolute transition opacity-0 duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-x-16 text-xl font-bold text-white group-hover:pr-2">
                                        Trailer</div>
                                </a>
                                <h3 class="text-2xl font-bold text-white" data-unsp-sanitized="clean">{{ product3.title
                                    }}</h3>
                                <div class="mb-0 text-lg text-gray-400">{{ product3.original_title }}</div>
                            </div>
                            <div class="flex flex-row justify-between datos">
                                <div class="flex flex-col datos_col">
                                    <div class="popularity">{{ product3.popularity }}</div>
                                    <div class="text-sm text-gray-400">Popularity:</div>
                                </div>
                                <div class="flex flex-col datos_col">
                                    <div class="release">{{ product3.release_date }}</div>
                                    <div class="text-sm text-gray-400">Release date:</div>
                                </div>
                                <div class="flex flex-col datos_col">
                                    <div class="release">155 min</div>
                                    <div class="text-sm text-gray-400">Runtime:</div>
                                </div>
                            </div>
                            <div class="flex flex-col overview">
                                <div class="flex flex-col"></div>
                                <div class="text-xs text-gray-400 mb-2">Overview:</div>
                                <p class="text-xs text-gray-100 mb-6">
                                    {{ product3.overview }}
                                </p>
                            </div>
                        </div>
                        <div data-countdown="2021-09-15"
                            class="absolute inset-x-0 top-0 pt-5 w-full mx-auto text-2xl uppercase text-center drop-shadow-sm font-bold text-white">
                            00 Days 00:00:00</div>
                    </div>
                </div>
                <img class="absolute inset-0 transform w-full -translate-y-4" :src="getImg(product3.poster_path)"
                    style="filter: grayscale(0);" />
                <div class="poster__footer flex flex-row relative pb-10 space-x-4 z-10">
                    <a class="flex items-center py-2 px-4 rounded-full mx-auto text-white bg-red-500 hover:bg-red-700"
                        href="http://www.google.com/calendar/event?action=TEMPLATE&amp;dates=20210915T010000Z%2F20210915T010000Z&amp;text=Dune%20%2D%20Movie%20Premiere&amp;location=http%3A%2F%2Fmoviedates.info&amp;details=This%20reminder%20was%20created%20through%20http%3A%2F%2Fmoviedates.info"
                        target="_blank" data-unsp-sanitized="clean">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <div class="text-sm text-white ml-2">Set reminder</div>
                    </a>
                </div>
            </div>
        </div>
        <div style="padding-left: 35%;" v-if="trailerKey">
                <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${trailerKey}`" frameborder="0"
                    allowfullscreen></iframe>
            </div>
            <div v-else>
                <p>Không có trailer</p>
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            product3: {},
            trailerKey:''
        }
    },
    mounted() {
    // Lấy chi tiết phim
    this.fetchMovieDetails2();

    // Lấy trailer của phim
    this.fetchMovieTrailer2();
  },
    created() {
        this.ListProduct3()
    },
    methods: {
        async ListProduct3() {
            const id = this.$route.params.id;
            const res = await this.$store.dispatch("ListProduct2", id);
            this.product3 = res.data;
        },
        getImg(path) {
            return `https://image.tmdb.org/t/p/w500/${path}`
        },
    async fetchMovieDetails2() {
      const movieId = this.$route.params.id; // ID phim mẫu (Ví dụ: Inception)
      const res = await this.$store.dispatch("fetchMovieDetails",movieId);
      this.product3 = res.data;
        
    },

    async fetchMovieTrailer2() {
      const movieId = this.$route.params.id; // ID phim mẫu (Ví dụ: Inception)
      const videos = await this.$store.dispatch("fetchMovieTrailer",movieId);
    
      // Tìm key của trailer chính thức đầu tiên (nếu có)
      const officialTrailer = videos.find(video => video.type === 'Trailer' && video.site === 'YouTube' && video.official);
      if (officialTrailer) {
        this.trailerKey = officialTrailer.key;
      }
    }
}
}
</script>

<style lang="scss" scoped></style>