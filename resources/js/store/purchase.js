
//let purchase = window.localStorage.getItem('purchase');

export default {
    namespaced: true,

    state: {
       // purchase: purchase ? JSON.parse(purchase) : [],
       purchase: [],
    },

    getters: {
        purchaseItemCount(state) {
            return state.purchase.length;
        },

        purchaseTotalPrice(state) {
            let total = 0;
            state.purchase.forEach(item => {
                total += item.product.selling_price * item.quantity;
            })
            return total;
        }
    },

    mutations: {

        ADD_TO_CART(state, { product, quantity, price, type, size, customSize }) {

            let productInPurchase = state.purchase.find(item => {
               return item.product.id === product.id;
              // return item.product.name === product.name;
            });

            if (productInPurchase) {
                productInPurchase.quantity += quantity;
              //  window.localStorage.setItem('purchase', JSON.stringify(state.purchase));
                return;
            }

            state.purchase.push({
                product,
                quantity,
                price
            })

         //   window.localStorage.setItem('purchase', JSON.stringify(state.purchase));
        },

        REMOVE_PRODUCT_FROM_CART(state, product) {
            state.purchase = state.purchase.filter(item => {
                return item.product.id !== product.id;
            })
         //   window.localStorage.setItem('purchase', JSON.stringify(state.purchase));
        },

        CLEAR_CART_ITEMS(state) {
            state.purchase = [];
        //    window.localStorage.setItem('purchase', JSON.stringify(state.purchase));
        },

       DECREASE_QTY (state, product) {

         let  productInPurchase = state.purchase.find(item => {
           return item.product.id === product.id;
         });

         if (productInPurchase) {
             productInPurchase.quantity--;
        //     window.localStorage.setItem('purchase', JSON.stringify(state.purchase));
             return;
         }

       },

       INCREASE_QTY (state, product) {

         let  productInPurchase = state.purchase.find(item => {
           return item.product.id === product.id;
         });

         if (productInPurchase) {
             productInPurchase.quantity++;
        //     window.localStorage.setItem('purchase', JSON.stringify(state.purchase));
             return;
         }

       }
    },

    actions: {

        addProductToPurchase({ commit }, { product, quantity, price, type, size, customSize }) {
            commit('ADD_TO_CART', { product, quantity, price, type, size, customSize });
        },

        removeProductFromPurchase({ commit }, product) {
            commit('REMOVE_PRODUCT_FROM_CART', product);
        },

        clearPurchaseItems({ commit }) {
            commit('CLEAR_CART_ITEMS');
        },

        decreaseProductQty ({ commit }, product) {
        commit('DECREASE_QTY', product)
        },

        increaseProductQty ({ commit }, product) {
        commit('INCREASE_QTY', product)
        }

    }

}
