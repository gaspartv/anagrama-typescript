import { createContext, useState } from "react";
import { database } from "../database";
import { iSearchUseForm } from "../pages/home";

interface iAnagramContextProps {
  children: React.ReactNode;
}

interface iAnagramContext {
  searchAnagram: (obj: iSearchUseForm) => void;
  result: string[];
  setResult: React.Dispatch<React.SetStateAction<string[]>>;
  normalizeString: (name: string) => string;
}

export const AnagramContext = createContext({} as iAnagramContext);

const AnagramProvider = ({ children }: iAnagramContextProps) => {
  const [result, setResult] = useState([] as string[]);

  const normalizeString = (name: string) => {
    return name.toLowerCase().split("").sort().join("").trim();
  };

  const searchAnagram = ({ name }: iSearchUseForm) => {
    const searchResult = database.filter(
      (elem) => normalizeString(elem) === normalizeString(name)
    );
    setResult(searchResult);
  };

  return (
    <AnagramContext.Provider
      value={{ searchAnagram, result, setResult, normalizeString }}
    >
      {children}
    </AnagramContext.Provider>
  );
};

export default AnagramProvider;
