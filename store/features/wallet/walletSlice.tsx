import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export interface walletState {
  address: string;
}

const initialState: walletState = {
  address: "",
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.wallet,
      };
    },
  },
});
