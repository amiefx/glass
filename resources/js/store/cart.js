
//let cart = window.localStorage.getItem('cart');

export default {
    namespaced: true,

    state: {
        //cart: cart ? JSON.parse(cart) : [],
        cart: [],
        ceiling: [],
        panel: [],
        glass: []
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

        ADD_TO_CART_SINGLE(state, { product, quantity, price, g_height, g_width, g_number }) {

            state.cart.push({
                product,
                quantity,
                g_height,
                g_width,
                g_number
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
            // state.cart = state.cart.filter(item => {
            //     return item.product.id !== product.id;
            // })

            const index = state.cart.indexOf(product)
              state.cart.splice(index, 1)

        },

        REMOVE_PRODUCT_FROM_CART_SINGLE(state, product) {
            state.cart = state.cart.filter(item => {
                return item.product.id !== product.id;
            })

            const index = this.categories.data.indexOf(item)
            this.categories.data.splice(index, 1)
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

       ADD_PRODUCTS_TO_CART (state, product) {
        state.cart = product.product;
       },

       ADD_ITEMS_TO_CEILING (state, product) {
        state.ceiling.push({
            product
        })
       },

    },

    actions: {

        addProductToCart({ commit }, { product, quantity, price, type, size, customSize }) {
            commit('ADD_TO_CART', { product, quantity, price, type, size, customSize });
        },

        addProductToCartSingle({ commit }, { product, quantity, price, g_height, g_width, g_number }) {
            commit('ADD_TO_CART_SINGLE', { product, quantity, price, g_height, g_width, g_number });
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

        REMOVE_PRODUCT_FROM_CART_SINGLE({ commit }, product) {
            commit('REMOVE_PRODUCT_FROM_CART_SINGLE', product);
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
        },

        addProductsToCart({ commit }, { product }) {
            commit('ADD_PRODUCTS_TO_CART', { product});
        },

        addItemsToCeiling({ commit }, { product }) {
            commit('ADD_ITEMS_TO_CEILING', { product});
        },

    }

}
