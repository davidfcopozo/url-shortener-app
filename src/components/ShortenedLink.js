import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useFetch } from "../hooks/useFetch";
import Error from "./Error";

const ShortenedLink = ({ inputValue, shortenLinks, setShortenLinks }) => {
  const BASE_URL = "https://api.shrtco.de/v2/shorten?url=";

  const [link, setLink] = useState("");

  const [data, error, loading] = useFetch(`${BASE_URL}${inputValue}`);

  const fetchData = () => {
    return data;
  };

  const handleCopy = (el) => {
    let $btn = document.getElementById(el.id);
    $btn.innerHTML = "Copied!";
    $btn.classList.add("btnClicked");

    setTimeout(() => {
      $btn.innerHTML = "Copy";
      $btn.classList.remove("btnClicked");
    }, 3000);
  };

  useEffect(() => {
    if (!inputValue) {
      return;
    }
    fetchData();
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
      {shortenLinks ? (
        shortenLinks
          .slice(0)
          .reverse()
          .map((el) => (
            <div key={el.id} className="shortenedLink">
              <p>{el["value"]}</p>
              <span></span>
              <div>
                <a href={el.link} target="_blank" rel="noreferrer">
                  {el["link"]}
                </a>
                <CopyToClipboard text={el["link"]}>
                  <button id={el.id} onClick={() => handleCopy(el)}>
                    Copy
                  </button>
                </CopyToClipboard>
              </div>
            </div>
          ))
      ) : loading ? (
        <div className="shortenedLink">Is loading</div>
      ) : data?.status > 399 ? (
        <>
          <Error error={error?.message} />
          {shortenLinks
            .slice(0)
            .reverse()
            .map((el) => (
              <div key={el.id} className="shortenedLink">
                <p>{el["value"]}</p>
                <span></span>
                <div>
                  <a href={el.link} target="_blank" rel="noreferrer">
                    {el["link"]}
                  </a>
                  <CopyToClipboard text={el["link"]}>
                    <button id={el.id} onClick={() => handleCopy(el)}>
                      Copy
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
            ))}
        </>
      ) : null}
    </>
  );
};

export default ShortenedLink;
