import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../..";
import { getBalance } from "./walletAsyncThunkActions";

export interface walletState {
  address: string;
  validatedAddress:string;
  balance:string;
  message:string;
  isLoaded:boolean;
  isError:boolean;
  isSuccess:boolean
}


const initialState: walletState = {
  address: "",
  validatedAddress:"",
  balance:"0",
  message:"",
  isLoaded:false,
  isError:false,
  isSuccess:false
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    handleAddressChange:(state,{payload})=>{
      state.address = payload
    },
    handleLocalStorage:(state,{payload})=>{
      state.validatedAddress = payload
    },
    reset: (state) => {
      state.isLoaded = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder)=>{
    builder.addCase(HYDRATE, (state,action: any)=>{
      return {
        ...state,
        ...action.payload.wallet
      };
    })
    .addCase(getBalance.pending,(state,{payload})=>{
      state.isLoaded=true
    })
    .addCase(getBalance.fulfilled,(state,action)=>{
      state.isLoaded = false
      state.isSuccess = true
      state.balance = action.payload as unknown as string
      state.validatedAddress = state.validatedAddress ? state.validatedAddress : state.address
      state.message = "successful"
    })
    .addCase(getBalance.rejected,(state,{payload})=>{
      state.isLoaded = false
      state.isSuccess = false
      state.message = payload as unknown as string
      state.balance = "0"
    })
    },
});

export const { reset,handleAddressChange,handleLocalStorage } = walletSlice.actions;
export const wallet = (state:AppState) => state.wallet

export default walletSlice.reducer
