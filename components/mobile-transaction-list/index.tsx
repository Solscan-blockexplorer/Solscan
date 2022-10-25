import React, { useState } from "react";
import { WalletTransaction } from "../../interface";
import { IGrouped } from "../../store/features/wallet/walletSlice";
import Images from "../../utils/images";
import Pagination from "../utility-components/paginate";
import Type from "../utility-components/type";
import { MobileList } from "./styles";

const TransactionList = ({
  grouped,
  walletTransactions,
}: {
  grouped: IGrouped[] | null;
  walletTransactions: WalletTransaction[] | null;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState<number>(3);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const groupedTransaction = grouped?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <MobileList>
      <p className="mobile-title">Transactions</p>
      {walletTransactions &&
        groupedTransaction &&
        groupedTransaction.map((group) => {
          return (
            <div key={group.amount}>
              <div className="title">
                <p className="title-date">{group.date}</p>{" "}
                <span
                  className={`title-amount ${
                    Number(group.amount) > 0
                      ? "positive-amount"
                      : "negative-amount"
                  }`}
                >
                  {Number(group.amount) > 0
                    ? `+${group.amount} SOL`
                    : `${group.amount} SOL`}
                </span>
              </div>
              {walletTransactions.map(
                (transaction: WalletTransaction) =>
                  transaction.date === group.date && (
                    <div
                      className="transaction-detail"
                      key={transaction.description}
                    >
                      <Type
                        type={transaction?.type}
                        details={transaction.type}
                      />

                      <div className="trans-amount">
                        <p
                          className={`amount ${
                            Number(transaction.amount) > 0
                              ? "positive-amount"
                              : "negative-amount"
                          }`}
                        >
                          {Number(transaction.amount) > 0
                            ? `+${transaction.amount} SOL`
                            : `${transaction.amount} SOL`}
                        </p>
                        <img src={Images.moreInfoIcon} alt="more info button" />
                      </div>
                    </div>
                  )
              )}
            </div>
          );
        })}
      {grouped && groupedTransaction && groupedTransaction.length > 0 && (
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={grouped.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}
    </MobileList>
  );
};

export default TransactionList;
