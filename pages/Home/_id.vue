<template>

    <!-- <div>
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
                            </div>
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
    </div> -->
    <div>
        <div class=' flex items-center justify-center h-screen bg-[#0d1829]'>
            <div class='mx-auto bg-white rounded-3xl shadow-xl'>
                <div class="grid rounded-3xl max-w-[370px] shadow-sm bg-slate-100 flex-col">
                    <img :src="getImg(product3.poster_path)" width="375" height="200"
                        class="rounded-t-3xl justify-center grid h-80 object-cover"
                        alt="Spider-Man: Across the Spider-Verse" />

                    <div v-if="trailerKey" class="group p-6 grid z-10">
                        <div @click="openTrailer"
                            class="cursor-pointer group-hover:text-cyan-700 font-bold sm:text-2xl line-clamp-2">
                            {{ product3.title }}
                        </div>


                        <span class="text-slate-400 pt-2 font-semibold">
                            (2023)
                        </span>
                        <div class="h-28">
                            <span class="line-clamp-4 py-2 text-sm font-light leading-relaxed">
                                {{ product3.overview }}
                            </span>
                        </div>
                        <div class="grid-cols-2 flex justify-between">
                            <div class="font-black flex flex-col">
                                <span class="text-yellow-500 text-xl">IMDB SCORE</span>
                                <span class="text-3xl flex gap-x-1 items-center group-hover:text-yellow-600">
                                    8.8
                                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                            fill="#eab308" />
                                    </svg>
                                </span>
                            </div>
                            <div class="flex flex-col items-end">
                                <div class="h-7"></div>
                                <span class="text-3xl font-bold gap-x-2 text-slate-300">
                                    # 8
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>


</template>

<script>
export default {
    data() {
        return {
            product3: {},
            trailerKey: ''
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
            const res = await this.$store.dispatch("fetchMovieDetails", movieId);
            this.product3 = res.data;

        },

        async fetchMovieTrailer2() {
            const movieId = this.$route.params.id; // ID phim mẫu (Ví dụ: Inception)
            const videos = await this.$store.dispatch("fetchMovieTrailer", movieId);

            // Tìm key của trailer chính thức đầu tiên (nếu có)
            const officialTrailer = videos.find(video => video.type === 'Trailer' && video.site === 'YouTube' && video.official);
            if (officialTrailer) {
                this.trailerKey = officialTrailer.key;
            }
        },
        openTrailer() {
            const url = `https://www.youtube.com/embed/${this.trailerKey}`;
            window.open(url, '_blank'); // Mở URL trong một tab mới

        }
    },
    watch: {
        '$route'(to, from) {
            // Thực hiện hành động khi route thay đổi
            console.log(`Route thay đổi từ ${from.fullPath} đến ${to.fullPath}`);
        }
    }
}
</script>

<style lang="scss" scoped></style>