import React, { FormEvent, ChangeEvent,useState } from "react";
import { SearchWrapper } from "./searchStyles";
import Images from "../../utils/images";
import { useAppDispatch, useAppSelector } from "../../hooks/setup";
import { handleAddressChange, wallet } from "../../store/features/wallet/walletSlice";
import { PublicKey } from "@solana/web3.js";
import { getBalance, getTransactions } from "../../store/features/wallet/walletAsyncThunkActions";

const SearchBox = () => {
  const [input, setInput] = useState("");
  const dispatch = useAppDispatch()
  const {address} = useAppSelector(wallet)


  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    dispatch(handleAddressChange(value))
  };

  const validateSolAddress=(address:string)=>{
    try {
        let pubkey = new PublicKey(address)
        let  isSolana =  PublicKey.isOnCurve(pubkey.toBuffer())
        return isSolana
    } catch (error) {
        return false
    }
} 

  const handleSubmit = (e:FormEvent): void =>{
    e.preventDefault();
    if (validateSolAddress(address)){
      dispatch(getBalance(address))
      dispatch(getTransactions(address))
    }
  }

  return (
    <SearchWrapper onSubmit={(e)=>handleSubmit(e)}>
        <img src={Images.searchIcon} alt="search-icon" className="input-icon" onClick={handleSubmit} />
      <input type="text" value={address} onChange={handleChange} placeholder="Search wallet address" className="input-field" />
    </SearchWrapper>
  );
};

export default SearchBox;
