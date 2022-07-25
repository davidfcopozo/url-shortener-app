import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import ShortenedLink from "./ShortenedLink";

const ShortenedLinks = ({ inputValue }) => {

  const [shortenLinks, setShortenLinks] = useLocalStorage("shortenLinks", []);

  return (
    <>
      <div className="shortenedLinks">
        {
          <ShortenedLink
            inputValue={inputValue}
            setShortenLinks={setShortenLinks}
            shortenLinks={shortenLinks}
          />
        }
      </div>
    </>
  );
};

export default ShortenedLinks;
