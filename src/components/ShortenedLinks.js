import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ShortenedLinks = ({ inputValue }) => {
  const BASE_URL = "https://api.shrtco.de/v2/shorten?url=";

  const [data, setData] = useState("");
  const [link, setLink] = useState("");
  const [shortenLinks, setShortenLinks] = useState();
  const [clipboard, setClipboard] = useState(false);
  const [copy, setCopy] = useState(!clipboard ? "Copy" : "Copied");

  const handleCopy = (id) => {
    setClipboard((prevClipboard) => !prevClipboard);
    return shortenLinks.map((link) =>
      link.id === id ? { ...link, clipboard: clipboard } : link
    );

    //setClipboard((clipboard) => !clipboard);
    /* setCopy(!clipboard ? "Copied" : "Copy"); */
  };

  useEffect(() => {
    if (clipboard) {
      setTimeout(() => {
        handleCopy();
      }, 3000);
    }
    clearTimeout();
  }, [clipboard, copy]);

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
      clipboard: false,
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
            .sort((a, b) => (a.id > b.id ? -1 : 1))
            .map((el) => (
              <div key={el.id} className="shortenedLink">
                <p>{el["value"]}</p>
                <span></span>
                <div>
                  <a href={el.link} target="_blank">
                    {el["link"]}
                  </a>
                  <CopyToClipboard text={el["link"]}>
                    <button
                      id="btn"
                      className={clipboard ? "clipboard" : ""}
                      onClick={() => handleCopy(el.id)}
                    >
                      {clipboard ? "Copied" : "Copy"}
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
