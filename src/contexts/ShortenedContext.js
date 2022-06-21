import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ShortenedContext = React.createContext();

export function useShortened() {
  return useContext(ShortenedContext);
}

export const ShortenedlinksProvider = ({ children }) => {
  const [shortenedLinks, setShortenedLinks] = useLocalStorage(
    "shortenedLinks",
    []
  );

  function addLinks({ input, shortLink }) {
    setShortenedLinks((prevShortenedLinks) => {
      if (prevShortenedLinks) {
        return [...prevShortenedLinks, [input, shortLink]];
      }
      return prevShortenedLinks;
    });

    return [input, shortLink];
  }

  return (
    <ShortenedContext.Provider
      value={{
        shortenedLinks,
        addLinks,
      }}
    >
      {children}
    </ShortenedContext.Provider>
  );
};
