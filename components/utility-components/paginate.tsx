import React from "react";
import { PaginateWrapper } from "./styles";

interface IPaginate{
    postsPerPage:number;
    totalPosts:number;
    paginate : (arg0:number)=>void
    currentPage:number

}

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }:IPaginate) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginateWrapper>
      <div className="btn-container">
        {pageNumbers.map(number => (
          <button key={number} onClick={() => paginate(number)} className={(number === currentPage) ? "btn active-btn" : "btn page-btn"}>
            {number}
          </button>
        ))}
      </div>
    </PaginateWrapper>
  );
};

export default Pagination;