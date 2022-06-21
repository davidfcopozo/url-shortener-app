import React, { useState } from "react";

const Input = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    if (setInputValue) {
      setInputValue(value);
      setValue("");
    } else {
      console.log("no setInputValue");
    }
  };

  return (
    <>
      <div className="input-container">
        <input
          type="url"
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
          value="Shorten a link here..."
          onClick={handleClick}
        />
      </div>
    </>
  );
};

export default Input;
