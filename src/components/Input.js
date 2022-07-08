import React, { useState } from "react";

const Input = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    if (setInputValue) {
      e.preventDefault();
      setInputValue(value);
      setValue("");
      console.log("This works!");
    }
  };

  return (
    <>
      <form onSubmit={handleClick}>
        <div className="input-container">
          <input
            type="text"
            name="link"
            id="link"
            placeholder="Shorten a link here..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <input
            type="button"
            name="linkBtn"
            id="linkBtn"
            value="Shorten it!"
          />
        </div>
      </form>
    </>
  );
};

export default Input;
