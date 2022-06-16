import React, { useState } from "react";
import { useShortened } from "../contexts/ShortenedContext";

const ShortenedLinks = () => {
  const shortenedLinks = useShortened();
  return (
    <>
      <div>
        <p></p>
        <div>
          <a href=""></a>
          <button></button>
        </div>
      </div>
    </>
  );
};

export default ShortenedLinks;
