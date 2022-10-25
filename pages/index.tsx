import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Loader from "../components/Loader/loader";
import TransactionList from "../components/mobile-transaction-list";
import UserTable from "../components/UserTable/UserTable";
import Overview from "../components/wallet-overview";
import { useAppDispatch, useAppSelector } from "../hooks/setup";
import {
  getBalance,
  getTransactions,
} from "../store/features/wallet/walletAsyncThunkActions";
import {
  handleLocalStorage,
  wallet,
} from "../store/features/wallet/walletSlice";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const {
    isLoaded,
    isSuccess,
    message,
    balance,
    validatedAddress,
    walletTransactions,
    grouped,
  } = useAppSelector(wallet);

  useEffect(() => {
    const address = localStorage.getItem("validatedAddress");
    if (!!address) {
      const validAddress = JSON.parse(address);
      dispatch(getTransactions(validAddress));
      dispatch(handleLocalStorage(validAddress));
      dispatch(getBalance(validAddress));
    }
  }, []);

  return (
    <>
      <Overview walletAddress={validatedAddress} walletAmount={balance} />
      {isLoaded && <Loader />}
      {grouped && (
        <TransactionList
          grouped={grouped}
          walletTransactions={walletTransactions}
        />
      )}
      <UserTable walletTransactions={walletTransactions} isLoaded={isLoaded} />
    </>
  );
};

export default Home;
