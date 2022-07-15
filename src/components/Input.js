import React, { useState } from "react";

const Input = ({ setInputValue }) => {
  let linkInput = document.getElementById("link");
  let linkBtn = document.getElementById("linkBtn");
  const [value, setValue] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const onChangeValidator = (e) => {
    setValue(e.target.value);
    const reg =
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    if (e.target.value.length > 1 && !reg.test(value)) {
      linkInput.style.outlineStyle = "solid";
      linkInput.style.outlineColor = "red";
      linkInput.style.outlineWidth = "2px";
      linkBtn.setAttribute("disabled", "disabled");
      setDisableBtn(true);
      linkBtn.classList.add("disabled");
    } else if (reg.test(value) || e.target.value.length < 2) {
      linkInput.style.outline = "none";
      setDisableBtn(false);
      linkBtn.classList.remove("disabled");
    }
  };

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
            onChange={(e) => onChangeValidator(e)}
          />
          <input
            onClick={handleClick}
            disabled={disableBtn}
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
