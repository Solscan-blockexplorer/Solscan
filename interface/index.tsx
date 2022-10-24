import { ReactNode } from "react";

export interface ImageProps {
    searchIcon?: string;
    logoIcon: string;
    moreInfoIcon:string;
    transferIcon:string;
    mintIcon:string;
    burnIcon:string;
    saleIcon:string;
};


export interface OverviewState{
    walletAddress:string;
    walletAmount:string;
}

export interface WalletTransaction{
    id:string;
    description: string;
    signature:string;
    date: string;
    type:string;
    amount:number;
}