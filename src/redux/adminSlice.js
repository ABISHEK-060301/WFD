'use client';
import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    user: {},
    products: [],
    isLoggedIn: false,
    isDarkTheme: false,
    siderKey: ["dashboard"],
  },
  reducers: {
    setLogin: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
    setTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
    setSiderKey: (state, action) => {
      state.siderKey = action.payload;
    },
    setProduct: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setLogin, setTheme, setSiderKey, setProduct } = adminSlice.actions;

export default adminSlice.reducer;
