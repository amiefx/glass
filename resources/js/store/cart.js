
//let cart = window.localStorage.getItem('cart');

export default {
    namespaced: true,

    state: {
        //cart: cart ? JSON.parse(cart) : [],
        cart: [],
    },

    getters: {
        cartItemCount(state) {
            return state.cart.length;
        },

        cartTotalPrice(state) {
            let total = 0;
            state.cart.forEach(item => {

                if (item.product.enable_stock === 0) {
                    total += ((item.product.height * item.product.width)/12) * item.product.selling_price * item.quantity;
                } else {
                    total += item.product.selling_price * item.quantity;
                }
            })
            return total.toFixed(0);
        }
    },

    mutations: {

        ADD_TO_CART(state, { product, quantity, price, type, size, customSize }) {

            let productInCart = state.cart.find(item => {
               return item.product.id === product.id;
              // return item.product.name === product.name;
            });

            if (productInCart) {
                productInCart.quantity += quantity;
            //    window.localStorage.setItem('cart', JSON.stringify(state.cart));
                return;
            }

            state.cart.push({
                product,
                quantity
            })

        //    window.localStorage.setItem('cart', JSON.stringify(state.cart));
        },

        ADD_TO_CART_SINGLE(state, { product, quantity, price, g_height, g_width }) {

            state.cart.push({
                product,
                quantity,
                g_height,
                g_width
            })

        },

        CHANGE_HEIGHT(state, { product, quantity, height }) {

            let productInCart = state.cart.find(item => {
               return item.product.id === product.id;
            });

            if (productInCart) {
                productInCart.product.height = height;
                return;
            }

            state.cart.push({
                product,
                quantity
            })

        },

        CHANGE_WIDTH(state, { product, quantity, width }) {

            let productInCart = state.cart.find(item => {
               return item.product.id === product.id;
            });

            if (productInCart) {
                productInCart.product.width = width;
                return;
            }

            state.cart.push({
                product,
                quantity
            })

        },

        REMOVE_PRODUCT_FROM_CART(state, product) {
            state.cart = state.cart.filter(item => {
                return item.product.id !== product.id;
            })
        //    window.localStorage.setItem('cart', JSON.stringify(state.cart));
        },

        CLEAR_CART_ITEMS(state) {
            state.cart = [];
        //    window.localStorage.setItem('cart', JSON.stringify(state.cart));
        },

       DECREASE_QTY (state, product) {

         let  productInCart = state.cart.find(item => {
           return item.product.id === product.id;
         });

         if (productInCart) {
             productInCart.quantity--;
        //     window.localStorage.setItem('cart', JSON.stringify(state.cart));
             return;
         }

       },

       INCREASE_QTY (state, product) {

         let  productInCart = state.cart.find(item => {
           return item.product.id === product.id;
         });

         if (productInCart) {
             productInCart.quantity++;
        //     window.localStorage.setItem('cart', JSON.stringify(state.cart));
             return;
         }

       },

       GET_CART_ITEMS (state, products) {}
    },

    actions: {

        addProductToCart({ commit }, { product, quantity, price, type, size, customSize }) {
            commit('ADD_TO_CART', { product, quantity, price, type, size, customSize });
        },

        addProductToCartSingle({ commit }, { product, quantity, price, g_height, g_width }) {
            commit('ADD_TO_CART_SINGLE', { product, quantity, price, g_height, g_width });
        },

        changeProductHeight({ commit }, { product, quantity, height}) {
            commit('CHANGE_HEIGHT', { product, quantity, height });
        },

        changeProductWidth({ commit }, { product, quantity, width}) {
            commit('CHANGE_WIDTH', { product, quantity, width });
        },

        removeProductFromCart({ commit }, product) {
            commit('REMOVE_PRODUCT_FROM_CART', product);
        },

        clearCartItems({ commit }) {
            commit('CLEAR_CART_ITEMS');
        },

        decreaseProductQty ({ commit }, product) {
        commit('DECREASE_QTY', product)
        },

        increaseProductQty ({ commit }, product) {
        commit('INCREASE_QTY', product)
        },

        getCartItems({ commit }, products) {
            commit('GET_CART_ITEMS', products)
        }

    }

}
