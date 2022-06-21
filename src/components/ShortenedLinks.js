import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

const ShortenedLinks = ({ inputValue }) => {
  console.log(inputValue);

  let url = `https://api.shrtco.de/v2/shorten?url=${inputValue}`;

  const [data, setData] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
    console.log(data);
  }, [url]);

  /*   const [link, setLink] = useState();
  /*   const [link, setLink] = useState();
  const [shortenedLink, setShortenedLink] = useState();
  const [data, error, loading] = useFetch(); */
  /* const [link, setLink] = useState();
  const [shortenedLink, setShortenedLink] = useState([]); */
  // useFetch(url);

  /*  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);

        if (!res.ok) {
          let err = new Error("Error in Fetch request");
          err.status = res.status || "000";
          err.statusText = res.statusText || "An error has occurred";

          throw err;
        }
        const json = await res.json();
        setLink(json);
        setData(json);
        setError(null);
      } catch (error) {
        setData(null);
        setError(error);
      } finally {
        setLoading(false);
      }
      return [data];
    };
    fetchData();
  }, [url]);

  useEffect(() => {
    let inputLink = {
      input: inputValue,
      shortenedLink: data?.result.full_short_link,
    };
    setShortenedLink((prevShortenedLink) =>
      prevShortenedLink ? [...prevShortenedLink, inputLink] : inputLink
    );
  }, [inputValue]); */

  //if (loading) return <h1>Loading</h1>;

  return (
    <>
      <div>
        <div>
          <p>{inputValue}</p>
          <div>
            <a href="" target="_blank"></a>
            <button></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShortenedLinks;
