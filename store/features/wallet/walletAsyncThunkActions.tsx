import { createAsyncThunk } from "@reduxjs/toolkit";
import services from "./services";

export const getBalance = createAsyncThunk(
  "balance",
  async (walletAddress: string, thunkAPI) => {
    try {
      return await services.balance(walletAddress);
    } catch (error: unknown) {
      if (error instanceof Error) {
        const message =
          (error && error.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const getTransactions = createAsyncThunk(
  "transactions",
  async (walletAddress: string, thunkAPI) => {
    try {
      return await services.userTransactions(walletAddress);
    } catch (error: unknown) {
      if (error instanceof Error) {
        const message =
          (error && error.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);
