import React from "react";
import { OverviewWrapper } from "./styles";

const Overview = () => {
  return (
    <OverviewWrapper>
      <div className="wallet">
        <div className="wallet-info">
        <h2 className="account-header">Account</h2>
        <p className="wallet-address">C13YkA4qG1vsfBUbgTYQo589yTBDTvkB28SefLLi9qKx</p>
        </div>
        <p className="wallet-balance">140.00 SOL</p>
      </div>
    </OverviewWrapper>
  );
};

export default Overview;
