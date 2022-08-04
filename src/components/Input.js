import React, { useState } from "react";

const Input = ({ setInputValue }) => {
  let linkInput = document.getElementById("link");
  let linkBtn = document.getElementById("linkBtn");
  const [value, setValue] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const onChangeValidator = (e) => {
    setValue(e.target.value);
    const reg =
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]{2,6}$/;

    if (e.target.value.length > 1 && !reg.test(value)) {
      linkInput.style.outlineStyle = "solid";
      linkInput.style.outlineColor = "red";
      linkInput.style.outlineWidth = "2px";
      linkBtn.setAttribute("disabled", "disabled");
      setDisableBtn(true);
      linkBtn.classList.add("disabled");
      $span.remove();
    } else if (reg.test(value) || e.target.value.length < 2) {
      $span.remove();
      linkInput.style.outline = "none";
      setDisableBtn(false);
      linkBtn.classList.remove("disabled");
    }
  };

  let $span = document.createElement("span");

  const handleClick = (e) => {
    let linkInput = document.getElementById("link");
    if (value.length < 1) {
      if ($span) {
        $span.innerText = "Please add a link";
        $span.classList.add("addLinkError");
        linkInput.insertAdjacentElement("afterend", $span);

        linkInput.style.outlineStyle = "solid";
        linkInput.style.outlineColor = "red";
        linkInput.style.outlineWidth = "2px";
      }
    }

    if (setInputValue) {
      e.preventDefault();
      setInputValue(value);
      setValue("");
    }
  };

  return (
    <>
      <form onSubmit={handleClick} autocomplete="on">
        <div className="input-container">
          <input
            type="text"
            name="link"
            id="link"
            placeholder="Shorten a link here..."
            value={value}
            onChange={(e) => onChangeValidator(e)}
            required
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
