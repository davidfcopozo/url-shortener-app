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

  function addLinks(shortenedLink) {
    setShortenedLinks(shortenedLink);
  }

  return (
    <ShortenedContext.Provider
      value={{
        addLinks,
        shortenedLinks,
        setShortenedLinks,
      }}
    >
      {children}
    </ShortenedContext.Provider>
  );
};
