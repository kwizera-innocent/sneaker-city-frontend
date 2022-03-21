import axios from "axios";

const state = {
  productItems: [],
  productItemDetails: [],
};

const getters = {
  productItems: (state) => state.productItems,
  productItemById: (state) => (id) => {
    return state.productItems.find((productItem) => productItem.id === id);
  },
  productItemDetails: (state) => state.productItemDetails,
};

const mutations = {
  UPDATE_PRODUCT_ITEMS(state, payload) {
    state.productItems = payload;
  },
  UPDATE_PRODUCT_ITEMS_Details(state, payload) {
    state.productItemDetails = payload;
  },
};

const actions = {
  getProductItems({ commit }) {
    axios.get(`/api/find-available-products`).then((response) => {
      commit("UPDATE_PRODUCT_ITEMS", response.data);
    });
    // commit("UPDATE_PRODUCT_ITEMS", [
    //   {
    //     id: 1,
    //     title: "puma 1s",
    //     description:
    //       "Lorem ipsum dolor sit amet, consectetur  dignissimos suscipit voluptatibus distinctio, error nostrum expedita omnis ipsum sit inventore aliquam sunt quam quis!",
    //     product_type: "power set/diesel engine",
    //     image_tag:
    //       "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1421&q=80",
    //     created_at: "12/03/2003",
    //     owner: "PUMA",
    //     price: 719.9,
    //   },
    //   {
    //     id: 2,
    //     title: "Jordan 4",
    //     description:
    //       "Lorem ipsum dolor sit amet, consectetur  dignissimos suscipit voluptatibus distinctio, error nostrum expedita omnis ipsum sit inventore aliquam sunt quam quis! ",
    //     product_type: "power set/diesel engine",
    //     image_tag:
    //       "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    //     created_at: "12/12/2005",
    //     owner: "NIKE",
    //     price: 650.9,
    //   },
    //   {
    //     id: 3,
    //     title: "Air 1",
    //     description:
    //       "Lorem ipsum dolor sit amet, consectetur  dignissimos suscipit voluptatibus distinctio, error nostrum expedita omnis ipsum sit inventore aliquam sunt quam quis!",
    //     product_type: "power set/diesel engine",
    //     image_tag:
    //       "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412&q=80",
    //     created_at: "3/5/2017",
    //     owner: "NIKE",
    //     price: 619.9,
    //   },
    //   {
    //     id: 4,
    //     title: "Yeezy",
    //     description:
    //       "Lorem ipsum dolor sit amet, consectetur  dignissimos suscipit voluptatibus distinctio, error nostrum expedita omnis ipsum sit inventore aliquam sunt quam quis!",
    //     product_type: "power set/diesel engine",
    //     image_tag:
    //       "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    //     created_at: "2/5/2017",
    //     owner: "Addidas",
    //     price: 319.9,
    //   },
    // ]);
  },
  getProductItemDetails({ commit }, productId) {
    axios.get(`/api/find-available-size/` + productId).then((response) => {
      commit("UPDATE_PRODUCT_ITEMS", response.data);
    });
    // commit("UPDATE_PRODUCT_ITEMS_Details", [
    //   {
    //     id: 3,
    //     title: "Air 1",
    //     size: 10,
    //     description:
    //       "Lorem ipsum dolor sit amet, consectetur  dignissimos suscipit voluptatibus distinctio, error nostrum expedita omnis ipsum sit inventore aliquam sunt quam quis!",
    //     product_type: "power set/diesel engine",
    //     image_tag:
    //       "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412&q=80",
    //     created_at: "3/5/2017",
    //     owner: "NIKE",
    //     price: 619.9,
    //   },
    //   {
    //     id: 3,
    //     title: "Air 1",
    //     size: 2,
    //     description:
    //       "Lorem ipsum dolor sit amet, consectetur  dignissimos suscipit voluptatibus distinctio, error nostrum expedita omnis ipsum sit inventore aliquam sunt quam quis!",
    //     product_type: "power set/diesel engine",
    //     image_tag:
    //       "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412&q=80",
    //     created_at: "3/5/2017",
    //     owner: "NIKE",
    //     price: 619.9,
    //   },
    //   {
    //     id: 3,
    //     title: "Air 1",
    //     size: 8,
    //     description:
    //       "Lorem ipsum dolor sit amet, consectetur  dignissimos suscipit voluptatibus distinctio, error nostrum expedita omnis ipsum sit inventore aliquam sunt quam quis!",
    //     product_type: "power set/diesel engine",
    //     image_tag:
    //       "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412&q=80",
    //     created_at: "3/5/2017",
    //     owner: "NIKE",
    //     price: 619.9,
    //   },
    //   {
    //     id: 3,
    //     title: "Air 1",
    //     size: 6,
    //     description:
    //       "Lorem ipsum dolor sit amet, consectetur  dignissimos suscipit voluptatibus distinctio, error nostrum expedita omnis ipsum sit inventore aliquam sunt quam quis!",
    //     product_type: "power set/diesel engine",
    //     image_tag:
    //       "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412&q=80",
    //     created_at: "3/5/2017",
    //     owner: "NIKE",
    //     price: 619.9,
    //   },
    // ]);
  },
};

const productModule = {
  state,
  mutations,
  actions,
  getters,
};

export default productModule;
