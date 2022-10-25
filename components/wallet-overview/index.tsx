import React from "react";
import { OverviewState } from "../../interface";
import { OverviewWrapper } from "./styles";

const Overview = ({walletAddress, walletAmount}: OverviewState) => {
  return (
    <OverviewWrapper>
      <div className="wallet">
        <h2 className="account-header">Account</h2>
        <div className="wallet-info">
        <p className="wallet-address">{walletAddress}</p>
        <p className="wallet-balance">{walletAmount} SOL</p>
        </div>
      </div>
    </OverviewWrapper>
  );
};

export default Overview;
