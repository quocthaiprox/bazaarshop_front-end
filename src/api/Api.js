import axios from "axios";

import { store } from "../redux/store";
import Register from "./../pages/Register";

axios.defaults.baseURL = process.env.REACT_APP_BE_BASE_ADDRESS;
export async function productsData(page) {
  const products = await axios.get(
    // "https://fakestoreapiserver.reactbd.com/products"
    `/products?_page=${page}`
  );
  return products;
}

// BLOG

export async function blogsData() {
  const blogs = await axios.get("/blogs");
  return blogs;
}

export async function addBlogs(newBlog) {
  const state = store.getState();
  const userInfo = state.bazar.userInfo;

  const config = {
    headers: { Authorization: "Bearer " + userInfo?.accessToken },
  };

  const blogs = await axios.post(`/blogs/`, newBlog, config);
  return blogs;
}
export async function deleteBlogsData(id) {
  const state = store.getState();
  const userInfo = state.bazar.userInfo;

  const config = {
    headers: { Authorization: "Bearer " + userInfo?.accessToken },
  };
  const blogs = await axios.delete(`/blogs/${id}`, config);

  return blogs;
}

// USER
export async function usersData(page) {
  const state = store.getState();
  const userInfo = state.bazar.userInfo;

  const config = {
    headers: { Authorization: "Bearer " + userInfo?.accessToken },
  };
  const messages = await axios.get(`/auth/users?_page=${page}`, config);

  return messages;
}

export async function deleteUserData(id) {
  const state = store.getState();
  const userInfo = state.bazar.userInfo;

  const config = {
    headers: { Authorization: "Bearer " + userInfo?.accessToken },
  };
  const users = await axios.delete(`/auth/users/${id}`, config);

  return users;
}

// MESSAGES
export async function messageData(page) {
  const state = store.getState();
  const userInfo = state.bazar.userInfo;

  const config = {
    headers: { Authorization: "Bearer " + userInfo?.accessToken },
  };
  const messages = await axios.get(`/messages?_page=${page}`, config);

  return messages;
}

export async function deleteMessageData(id) {
  const state = store.getState();
  const userInfo = state.bazar.userInfo;

  const config = {
    headers: { Authorization: "Bearer " + userInfo?.accessToken },
  };
  const messages = await axios.delete(`/messages/${id}`, config);

  return messages;
}
//  PRODUCTS
export async function addProduct(newProduct) {
  const state = store.getState();
  const userInfo = state.bazar.userInfo;

  const config = {
    headers: { Authorization: "Bearer " + userInfo?.accessToken },
  };

  const product = await axios.post(`/products/`, newProduct, config);
  return product;
}
export async function editProduct(id, newProduct) {
  const state = store.getState();
  const userInfo = state.bazar.userInfo;

  const config = {
    headers: { Authorization: "Bearer " + userInfo?.accessToken },
  };
  const newProductEdit = await axios.put(`/products/${id}`, newProduct, config);
  return newProductEdit;
}

export async function deleteProductData(id) {
  const state = store.getState();
  const userInfo = state.bazar.userInfo;

  const config = {
    headers: { Authorization: "Bearer " + userInfo?.accessToken },
  };
  const products = await axios.delete(`/products/${id}`, config);

  return products;
}
//REGISTER
export async function registerUser(newUser) {
  const user = await axios.post(`/auth/register`, newUser);
  return user;
}

// ORDER

export async function addOrder(newOrder) {
  const state = store.getState();
  const userInfo = state.bazar.userInfo;

  const config = {
    headers: { Authorization: "Bearer " + userInfo?.accessToken },
  };
  const order = await axios.post(`/orders/`, newOrder, config);

  return order;
}

export async function orderData(page) {
  const state = store.getState();
  const userInfo = state.bazar.userInfo;

  const config = {
    headers: { Authorization: "Bearer " + userInfo?.accessToken },
  };
  const orders = await axios.get(`/orders?_page=${page}`, config);

  return orders;
}

export async function deleteOrderData(id) {
  const state = store.getState();
  const userInfo = state.bazar.userInfo;

  const config = {
    headers: { Authorization: "Bearer " + userInfo?.accessToken },
  };
  const orders = await axios.delete(`/orders/${id}`, config);

  return orders;
}

export async function editStatusOrder(id, newOrder) {
  const state = store.getState();
  const userInfo = state.bazar.userInfo;

  const config = {
    headers: { Authorization: "Bearer " + userInfo?.accessToken },
  };
  const newOrderEdit = await axios.put(`/orders/${id}`, newOrder, config);
  return newOrderEdit;
}