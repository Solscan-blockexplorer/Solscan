import { ReactNode } from "react";

export interface ImageProps {
    searchIcon?: string;
    logoIcon: string;
};


export interface OverviewState{
    walletAddress:string;
    walletAmount:string;
}

export interface WalletTransaction{
    description: string;
    signature:string;
    date: Date;
    type:string;
    amount:number;
}