<template>
    <div>
        <!-- component -->
        <!-- Create By Joker Banny -->
        <style>
            input[type="number"]::-webkit-inner-spin-button,
            input[type="number"]::-webkit-outer-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
        </style>

        <body>
            <div class=" bg-gray-100 pt-20" v-if="giohang.length > 0">
                <h1 class="mb-10 text-center text-2xl font-bold">Cart Items Movie</h1>
                <div class="flex mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div class="rounded-lg md:w-2/3">
                        <div v-for="product in giohang" :key="product.id"
                            class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                            <img :src="getImg(product.poster_path)" :alt="product.imageAlt" alt="product-image"
                                class="w-full rounded-lg sm:w-40" />
                            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                <div class="mt-5 sm:mt-0">
                                    <h2 class="text-lg font-bold text-gray-900">{{ product.title }}</h2>
                                    <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
                                </div>
                                <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                    <div class="flex items-center border-gray-100">
                                        <button @click="decreaseQuantity(product)"
                                            class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">-</button>
                                        <input v-model="product.quantity"
                                            @blur="changeValue(product.id, product.quantity)"
                                            class="h-8 w-8 border bg-white text-center text-xs outline-none"
                                            type="number" />
                                        <button @click="increaseQuantity(product)"
                                            class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">+</button>
                                    </div>
                                    <div class="flex items-center space-x-4">
                                        <p class="text-sm">{{ product.vote_count }}$</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor"
                                            class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                        <div class="mb-2 flex justify-between">
                            <p class="text-gray-700">Subtotal</p>
                            <p class="text-gray-700">$129.99</p>
                        </div>
                        <div class="flex justify-between">
                            <p class="text-gray-700">Shipping</p>
                            <p class="text-gray-700">$4.99</p>
                        </div>
                        <hr class="my-4" />
                        <div class="flex justify-between">
                            <p class="text-lg font-bold">Total</p>
                            <div class="">
                                <p class="mb-1 text-lg font-bold">$134.98 USD</p>
                                <p class="text-sm text-gray-700">including VAT</p>
                            </div>
                        </div>
                        <button
                            class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check
                            out</button>
                    </div>
                </div>
            </div>
        </body>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    data() {
        return {
            quant: 0,
            productMap: {},
            giohang: []
        }
    },
    created() {
        this.giohang = this.cart
    },

    methods: {
        ...mapActions(['setProductQuantity']),
        getImg(path) {
            return `https://image.tmdb.org/t/p/w500/${path}`
        },
        changeValue(id, quantity) {
            let data = {
                id: id,
                quantity: quantity
            };
            this.setProductQuantity(data);
        },
        increaseQuantity(product) {
            product.quantity++;
            this.changeValueProduct(product);
        },
        decreaseQuantity(product) {
            if (product.quantity > 1) {
                product.quantity--;
                this.changeValueProduct(product);
            }
        },
        changeValueProduct(product) {
            // Implement the logic to handle quantity change, e.g., API call or state update
            this.$store.commit('SET_CART', product);
            const seenIds = new Set();

            this.giohang = this.giohang.concat(this.cart).filter(item => {
                if (seenIds.has(item.id)) {
                    return false; // Loại bỏ các đối tượng trùng lặp
                } else {
                    seenIds.add(item.id); // Thêm id vào Set
                    return true; // Giữ lại đối tượng duy nhất
                }
            });
            // console.log("cart", this.cart);

        }
    },
    computed: {
        ...mapState(["cart"]),
    },


}
</script>

<style scoped></style>
