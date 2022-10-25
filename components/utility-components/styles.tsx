import styled from "styled-components";

export const TypeWrapper = styled.div`
    display: flex;
    gap:0.3rem;
`;

export const PaginateWrapper = styled.div`
    .btn-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 0 auto 2rem;
      }
      .btn {
        width: 2rem;
        height: 2rem;
        border-radius: 5px;
        cursor: pointer;
        margin: 0.5rem;
        transition: all 0.3s linear;
        :hover {
            box-shadow: 0px 1px 5px 1px rgba(0, 179, 159, 0.5);
        }
      }
      .page-btn {
        background: #000;
        border:0;
        color: #00897B;
      }
      .active-btn {
        background: ${props => props.theme.secondaryColor};
        border: 1px solid #00897B;
        color: #00897B;
      } 
      
      .active-btn:hover{
        background-color: rgba(0, 179, 159, 0.3);
      }

      `;