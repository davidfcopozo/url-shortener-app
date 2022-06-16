import React, { useRef } from "react";
import { useShortened } from "../contexts/ShortenedContext";
import { useFetch } from "../hooks/useFetch";

const Input = () => {
  let input = document.getElementById("link");

  input?.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("linkBtn").click();
    }
  });

  let linkRef = useRef();

  let url = `https://api.shrtco.de/v2/shorten?url=${input?.value}`;
  const [data, error, loading] = useFetch(url);

  const { addLinks, shortenedLinks } = useShortened();

  function getData() {
    addLinks(data.result.short_link);
    console.log(shortenedLinks);
  }

  return (
    <div class="input-container">
      <input
        ref={linkRef}
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
        onClick={() => getData()}
      />
    </div>
  );
};

export default Input;
