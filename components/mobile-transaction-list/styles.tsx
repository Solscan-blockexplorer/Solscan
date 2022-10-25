import styled from "styled-components";

export const MobileList = styled.div`
/* padding: 0 0.5rem; */

@media screen and (min-width: 768px) {
    display: none;
}
  .mobile-title {
    width: 100px;
    height: 24px;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 24px;

    display: flex;
    align-items: center;
    color: #fff;
    margin-bottom: 1.2rem;
  }

  .title{
    display: flex;
    align-items: center;
    height: 2rem;
    background: rgba(117, 117, 117, 0.2);
    justify-content:space-between ;
    padding: 1.2rem;
    font-size: 1.2rem;
}
  .title-date {
    font-weight: 700;
    line-height: 18px;
    color: #e0e0e0;
  }

  .transaction-detail{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.2rem;
    font-size: 0.8rem;
  }

 
  .trans-amount{
    display: flex;
    align-items: center;
    gap:0.3rem
    
  }
  .positive-amount{
    color:#00897B;
  }

  .negative-amount{
    color: #C62828;
  }
`;
