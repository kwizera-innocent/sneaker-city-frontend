import axios from "axios";
const state = {
  cartItems: [],
};

const getters = {
  cartItems: (state) => state.cartItems,
  cartTotal: (state) => {
    return state.cartItems
      .reduce((acc, cartItem) => {
        return cartItem.quantity * cartItem.productSize.product.price + acc;
      }, 0)
      .toFixed(2);
  },
  cartQuantity: (state) => {
    return state.cartItems.reduce((acc, cartItem) => {
      return cartItem.quantity + acc;
    }, 0);
  },
};

const mutations = {
  UPDATE_CART_ITEMS(state, payload) {
    state.cartItems = payload;
  },
  removeCartItem: (state) => (state.cartItems = []),
};

const actions = {
  getCartItems({ commit }) {
    axios.get("/api/view-cart").then((response) => {
      commit("UPDATE_CART_ITEMS", response.data);
    });
  },
  addCartItem({ commit }, cartItem) {
    axios.post("/api/add-cart", cartItem).then((response) => {
      commit("UPDATE_CART_ITEMS", response.data);
    });
    console.log(cartItem);
  },
  removeCartItem({ commit }, cartItem) {
    axios.delete("/api/cart/delete", cartItem).then((response) => {
      commit("UPDATE_CART_ITEMS", response.data);
    });
  },
  removeAllCartItems({ commit }) {
    // axios.delete("/api/cart/delete/all").then((response) => {
    //   commit("UPDATE_CART_ITEMS", response.data);
    // });
    commit("removeCartItem");
  },
  checkout({ commit }) {
    // axios.delete("/api/cart/delete/all").then((response) => {
    commit("removeCartItem");
    // });
  },
};

const cartModule = {
  state,
  mutations,
  actions,
  getters,
};
export default cartModule;
