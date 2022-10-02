import { FormEvent } from "react";
import styled from "styled-components";

interface ISubmit {
  onSubmit: (e: FormEvent) => void;
}
export const SearchWrapper = styled.form<ISubmit>`
  width: 100%;
  height: 3rem;
  padding: 10px;
  background-color: #000;
  border: 1px solid #e0e0e0;
  border-radius: 30px;
  position: relative;
  max-width: 93%;

  .input-field {
    width: 100%;
    height: 100%;
    padding: 8px 12px 8px 3rem;
    color: #fff;
    background-color: inherit;
    border: none;
    outline: none;

    ::placeholder {
      color: #e0e0e0;
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
