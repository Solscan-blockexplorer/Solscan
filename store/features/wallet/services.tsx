import axios from "axios"
import { BASE_URL, oneSolana } from "../../../constants"

 const balance = async(walletAddress: string)=>{
    const url =`${BASE_URL}${walletAddress}/balances?api-key=${process.env.NEXT_PUBLIC_API_KEY}`
    let {data} = await axios.get(url)
    if(data.nativeBalance){
        localStorage.setItem("validatedAddress",JSON.stringify(walletAddress))
        data =  (Math.round(data.nativeBalance * 100.0 / 9) / oneSolana).toFixed(2)
    }
    return data
}

const userTransactions = async (walletAddress: string)=>{
    const url =`${BASE_URL}${walletAddress}/transactions?api-key=${process.env.NEXT_PUBLIC_API_KEY}`
    const {data} = await axios.get(url)
    return data
}

const services = {
    balance,
    userTransactions
}

export default services;