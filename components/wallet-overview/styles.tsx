import styled from "styled-components";

export const OverviewWrapper = styled.div`
/* max-width: 93%; */
  .wallet {
    display: flex;
    flex-direction: column;
    gap:0.1rem;
    .account-header {
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 16px;
      }
    .wallet-info {
      display: flex;
      gap: 1.2rem;
      align-items: center;
      justify-content: space-between;

      
      .wallet-address {
        font-family: "Roboto";
        font-weight: 400;
        font-size: 1.3rem;
        line-height: 1.6rem;
        word-break: break-word;
        height:auto;
        padding:1rem 0;
        width: fit-content;
        max-width: 50%;
      }
    }
    .wallet-balance {
      font-weight: 700;
      font-size: 2rem;
      line-height: 96px;

      @media screen and (min-width: 800px ) {
        font-size: 2.5rem;
      }
      @media screen and (min-width: 900px ) {
        font-size: 3rem;
      }
    }
  }
`;
