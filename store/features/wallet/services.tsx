import axios from "axios";
import { BASE_URL } from "../../../constants";
import { WalletTransaction } from "../../../interface";
import { CurrentWalletTransaction } from "./walletSlice";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import {v4} from "uuid"

const balance = async (walletAddress: string) => {
  const url = `${BASE_URL}${walletAddress}/balances?api-key=${process.env.NEXT_PUBLIC_API_KEY}`;
  let { data } = await axios.get(url);
  if (data.nativeBalance) {
    localStorage.setItem("validatedAddress", JSON.stringify(walletAddress));
    data = (data.nativeBalance / LAMPORTS_PER_SOL).toFixed(2);
    return data;
  }
};

const userTransactions = async (walletAddress: string) => {
  const url = `${BASE_URL}${walletAddress}/transactions?api-key=${process.env.NEXT_PUBLIC_API_KEY}`;
  const { data } = await axios.get(url);
  const userTransaction = data
    .filter(
      (transaction: CurrentWalletTransaction) =>
        transaction.type === "TRANSFER" ||
        transaction.type === "NFT_SALE" ||
        transaction.type === "NFT_MINT" ||
        transaction.type === "BURN"
    )
    .map((transaction: CurrentWalletTransaction) => {
      const formattedTransaction = {} as WalletTransaction;
      const dateObj = new Date(transaction.timestamp * 1000)
      const month = dateObj.toLocaleString("en-us",{month:"short"}).toUpperCase()
      const day = ('0' + dateObj.getDate()).slice(-2)
      const year = dateObj.getUTCFullYear().toString().slice(-2)
      formattedTransaction.description = transaction.description as string;
      formattedTransaction.type = transaction.type;
      formattedTransaction.id = v4()
      formattedTransaction.signature = transaction.signature as string
      formattedTransaction.date = `${day} ${month} ${year}`
      formattedTransaction.amount =
        (getAmount(transaction.type, transaction, walletAddress) /
        LAMPORTS_PER_SOL).toFixed(3) as unknown as number;
      return formattedTransaction;
    });
  console.log(userTransaction);
  return userTransaction;
};

const getAmount = (
  transactionType: string,
  transaction: CurrentWalletTransaction,
  walletAddress?: string
): number => {
  let amount = 0;
  switch (transactionType) {
    case "BURN":
      amount = (transaction?.accountData &&
        transaction?.accountData[0]?.nativeBalanceChange) as number;
      break;
    case "TRANSFER":
      amount = (
        transaction?.feePayer != walletAddress
          ? transaction?.accountData &&
            transaction?.accountData[1].nativeBalanceChange
          : transaction?.accountData &&
            transaction?.accountData[0].nativeBalanceChange
      ) as number;
      break;
    case "NFT_MINT":
      amount = (transaction?.accountData &&
        transaction?.accountData[0]?.nativeBalanceChange) as number;
      break;
    case "NFT_SALE":
      amount = (transaction?.nativeTransfers &&
        transaction?.nativeTransfers[0].amount) as number;
      break;
    default:
      break;
  }

  return amount;
};

const services = {
  balance,
  userTransactions,
};

export default services;
