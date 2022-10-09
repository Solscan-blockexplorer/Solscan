import { ReactNode } from "react";

export interface ImageProps {
    searchIcon?: string;
    logoIcon: string;
};


export interface OverviewState{
    walletAddress:string;
    walletAmount:string;
}