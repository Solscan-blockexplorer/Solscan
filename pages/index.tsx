import type { NextPage } from 'next'
import { useEffect } from 'react'
import UserTable from '../components/UserTable/UserTable'
import Overview from '../components/wallet-overview'
import { useAppDispatch, useAppSelector } from '../hooks/setup'
import { getBalance } from '../store/features/wallet/walletAsyncThunkActions'
import { handleAddressChange, wallet } from '../store/features/wallet/walletSlice'


const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const {isLoaded,isSuccess,message,balance,validatedAddress} = useAppSelector(wallet);

  useEffect(()=>{
    const address = localStorage.getItem('validatedAddress')
    if (!!address){
     const validatedAddress = JSON.parse(address)
      dispatch(handleAddressChange(validatedAddress))
      dispatch(getBalance(validatedAddress))
    }
  },[validatedAddress])


  return (
    <>
    <Overview walletAddress={validatedAddress} walletAmount={balance}/>
    <UserTable/>
    </>
  )
}

export default Home

