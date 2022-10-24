import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import UserTable from '../components/UserTable/UserTable'
import Overview from '../components/wallet-overview'
import { useAppDispatch, useAppSelector } from '../hooks/setup'
import { WalletTransaction } from '../interface'
import { getBalance, getTransactions } from '../store/features/wallet/walletAsyncThunkActions'
import { CurrentWalletTransaction, handleAddressChange, handleLocalStorage, wallet } from '../store/features/wallet/walletSlice'


const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const {isLoaded,isSuccess,message,balance,validatedAddress,walletTransactions} = useAppSelector(wallet);
  const [transactions, setTransactions] = useState<CurrentWalletTransaction[] | null>(null) 


  useEffect(()=>{
    const address = localStorage.getItem('validatedAddress')
    if (!!address){
     const validAddress = JSON.parse(address)
     dispatch(getTransactions(validAddress))
     dispatch(handleLocalStorage(validAddress))
      dispatch(getBalance(validAddress))
      setTransactions(walletTransactions)
    }
  },[transactions])


  return (
    <>
    <Overview walletAddress={validatedAddress} walletAmount={balance}/>
    <UserTable walletTransactions={transactions} isLoaded={isLoaded}/>
    </>
  )
}

export default Home

