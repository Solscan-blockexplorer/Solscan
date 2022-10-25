import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../..";
import { WalletTransaction } from "../../../interface";
import { getBalance, getTransactions } from "./walletAsyncThunkActions";

export interface WalletState {
  address: string;
  validatedAddress:string;
  balance:string;
  message:string;
  walletTransactions: CurrentWalletTransaction[] | WalletTransaction[] | null;
  grouped:IGrouped[] | null
  isLoaded:boolean;
  isError:boolean;
  isSuccess:boolean
}

export interface CurrentWalletTransaction{
  type:string;
  description?:string;
  feePayer?: string;
  signature?:string;
  timestamp:number;
  accountData?: AccountData[]
  nativeTransfers?:NativeTransfers[]
}

export interface IGrouped{
  date:string;
  amount:string;
}

export interface AccountData{
  account?:string;
  nativeBalanceChange?:number
}

type NativeTransfers = {
  amount?: number
}

const initialState: WalletState= {
  address: "",
  validatedAddress:"",
  balance:"0",
  message:"",
  walletTransactions:null,
  grouped:null,
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
    .addCase(getTransactions.pending,(state,{payload})=>{
      state.isLoaded=true
    })
    .addCase(getTransactions.fulfilled,(state,action)=>{
      state.isLoaded = false
      state.isSuccess = true
      state.walletTransactions = action.payload?.userTransaction
      state.grouped = action.payload?.grouped
      state.message = "successful"
    })
    .addCase(getTransactions.rejected,(state,{payload})=>{
      state.isLoaded = false
      state.isSuccess = false
      state.message = payload as unknown as string
    })
    },
});

export const { reset,handleAddressChange,handleLocalStorage } = walletSlice.actions;
export const wallet = (state:AppState) => state.wallet

export default walletSlice.reducer
