import styled from "styled-components";

export const OverviewWrapper = styled.div`
/* max-width: 93%; */
  .wallet {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .wallet-info {
      display: flex;
      gap: 1.2rem;
      flex-direction: column;

      .account-header {
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 16px;
      }
      .wallet-address {
        font-family: "Roboto";
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 16px;
        word-break: break-word;
        padding:1rem 0;
      }
    }
    .wallet-balance {
      font-weight: 700;
      font-size: 4rem;
      line-height: 96px;
    }
  }
`;
