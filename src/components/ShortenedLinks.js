import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { CopyToClipboard } from "react-copy-to-clipboard";
import useLocalStorage from "../hooks/useLocalStorage";

const ShortenedLinks = ({ inputValue }) => {
  const BASE_URL = "https://api.shrtco.de/v2/shorten?url=";

  const [data, setData] = useState("");
  const [link, setLink] = useState("");
  const [shortenLinks, setShortenLinks] = useLocalStorage();
  const [copy, setCopy] = useState("Copy");

  const handleCopy = (id) => {
    setCopy("Copied");
    console.log(id);
    return shortenLinks.map((link) => (link.id === id ? { ...link } : link));
  };

  useEffect(() => {
    if (!inputValue) {
      return;
    }
    const url = `${BASE_URL}${inputValue}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [inputValue]);

  useEffect(() => {
    if (!data || !data.ok) {
      return;
    }
    setLink(data?.result.full_short_link);
  }, [data]);

  useEffect(() => {
    if (!link) {
      return;
    }
    const links = {
      id: uuidv4(),
      value: inputValue,
      link: link,
    };

    setShortenLinks((prevShortenedLinks) =>
      !prevShortenedLinks ? [links] : [...prevShortenedLinks, links]
    );
  }, [link]);

  return (
    <>
      <div className="shortenedLinks">
        {shortenLinks &&
          shortenLinks
            .slice(0)
            .reverse()
            .map((el) => (
              <div key={el.id} className="shortenedLink">
                <p>{el["value"]}</p>
                <span></span>
                <div>
                  <a href={el.link} target="_blank">
                    {el["link"]}
                  </a>
                  <CopyToClipboard text={el["link"]}>
                    <button id="btn" onClick={() => handleCopy(el.id)}>
                      {copy}
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default ShortenedLinks;
