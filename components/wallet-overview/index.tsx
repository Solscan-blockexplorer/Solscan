import React from "react";
import { OverviewState } from "../../interface";
import { OverviewWrapper } from "./styles";

const Overview = ({walletAddress, walletAmount}: OverviewState) => {
  return (
    <OverviewWrapper>
      <div className="wallet">
        <div className="wallet-info">
        <h2 className="account-header">Account</h2>
        <p className="wallet-address">{walletAddress}</p>
        </div>
        <p className="wallet-balance">{walletAmount} SOL</p>
      </div>
    </OverviewWrapper>
  );
};

export default Overview;
