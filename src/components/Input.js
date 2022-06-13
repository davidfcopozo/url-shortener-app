import React from "react";

const Input = ({ setValue }) => {
  console.log(document.getElementById("link"));

  let input = document.getElementById("link");

  input.addEventListener("keypress", function (e) {
    let $inputBtn = document.getElementById("linkBtn");
    if (e.key === "Enter") {
      e.preventDefault();
      $inputBtn.click();
    }
  });

  return (
    <div class="input-container">
      <input
        type="url"
        name="link"
        id="link"
        placeholder="Shorten a link here..."
      />
      <input
        type="submit"
        name="linkBtn"
        id="linkBtn"
        value="Shorten a link here..."
      />
    </div>
  );
};

export default Input;
