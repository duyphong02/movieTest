import Vue from 'vue';

export default {
    SET_SEARCH(state, search) {
        state.key = search
    },
    SET_USER(state, userData) {
        state.user = { ...userData }
    },
    SET_CART(state, product) {
        const existingProduct = state.cart.find(item => item.id === product.id);

        if (existingProduct) {
            // Sử dụng Vue.set để đảm bảo tính phản ứng
            Vue.set(existingProduct, 'quantity', product.quantity);
        } else {
            // Thêm sản phẩm mới vào giỏ hàng
            product.quantity = 1;
            state.cart.push(product);
            console.log("đã thêm quantity");
        }
    },
    updateQuantity(state, { id, quantity }) {
        const product = state.cart.find(product => product.id === id);
        if (product) {
            product.quantity = quantity;
        }
    }
}