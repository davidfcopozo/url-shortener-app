import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

const ShortenedLinks = ({ inputValue }) => {
  const BASE_URL = "https://api.shrtco.de/v2/shorten?url=";

  const [data, setData] = useState("");
  const [link, setLink] = useState("");
  const [shortenLinks, setShortenLinks] = useState();

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
      value: inputValue,
      link: link,
    };

    setShortenLinks((prevShortenedLinks) =>
      !prevShortenedLinks ? [links] : [...prevShortenedLinks, links]
    );
    console.log(shortenLinks);
  }, [link]);

  return (
    <>
      <div>
        {shortenLinks &&
          shortenLinks.map((el, i) => (
            <div key={i}>
              <p>{el["value"]}</p>
              <div>
                <a href="" target="_blank">
                  {el["link"]}
                </a>
                <button></button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ShortenedLinks;
