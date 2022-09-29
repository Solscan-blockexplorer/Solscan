import { FormEvent } from "react";
import styled from "styled-components";

interface ISubmit{
    onSubmit: (e:FormEvent) => void;
}
export const SearchWrapper = styled.form<ISubmit>`
  width: 100%;
  height: 3rem;
  padding: 10px;
  background-color: #000;
  border: 1px solid #E0E0E0;
  border-radius: 30px;
  position: relative;


  .input-field {
    width: 100%;
    height: 100%;
    padding: 8px 12px 8px 3rem;
    color: #fff;
    background-color: inherit;
    border: none;
    outline: none;

    ::placeholder{
        color: #E0E0E0;
    }
  }

  .input-icon {
    position: absolute;
    padding: 10px;
    background-color: transparent;
    min-width: 40px;
    top: 0;
  }
`;
