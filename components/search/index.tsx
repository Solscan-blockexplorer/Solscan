import React, { FormEvent, ChangeEvent,useState } from "react";
import { SearchWrapper } from "./searchStyles";
import Images from "../../utils/images";

const SearchBox = () => {
  const [input, setInput] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    setInput(value);
  };

  const handleSubmit = (e:FormEvent): void =>{
    e.preventDefault();
    console.log("as e dey be")
  }

  return (
    <SearchWrapper onSubmit={(e)=>handleSubmit(e)}>
        <img src={Images.searchIcon} alt="search-icon" className="input-icon" onClick={handleSubmit} />
      <input type="text" value={input} onChange={handleChange} placeholder="Search wallet address" className="input-field" />
    </SearchWrapper>
  );
};

export default SearchBox;
