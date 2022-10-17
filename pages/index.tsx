import type { NextPage } from 'next'
import { useEffect } from 'react'
import UserTable from '../components/UserTable/UserTable'
import Overview from '../components/wallet-overview'
import { useAppDispatch, useAppSelector } from '../hooks/setup'
import { getBalance, getTransactions } from '../store/features/wallet/walletAsyncThunkActions'
import { handleAddressChange, handleLocalStorage, wallet } from '../store/features/wallet/walletSlice'


const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const {isLoaded,isSuccess,message,balance,validatedAddress} = useAppSelector(wallet);

  useEffect(()=>{
    const address = localStorage.getItem('validatedAddress')
    if (!!address){
     const validAddress = JSON.parse(address)
     dispatch(getTransactions(validAddress))
     dispatch(handleLocalStorage(validAddress))
      dispatch(getBalance(validAddress))
    }
  },[])


  return (
    <>
    <Overview walletAddress={validatedAddress} walletAmount={balance}/>
    <UserTable/>
    </>
  )
}

export default Home

