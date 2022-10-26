import { createContext } from "react";
import { database } from "../database";
import { iSearchUseForm } from "../pages/home";

interface iAnagramContextProps {
  children: React.ReactNode;
}

interface iAnagramContext {
  searchAnagram: (obj: iSearchUseForm) => void;
}

export const AnagramContext = createContext({} as iAnagramContext);

const AnagramProvider = ({ children }: iAnagramContextProps) => {

  const normalizeString = (name: string) => {
    return name.toLowerCase().split("").sort().join("").trim();
  };

  const searchAnagram = ({ name }: iSearchUseForm) => {
    return database.filter(
      (elem) => normalizeString(elem) === normalizeString(name)
    );
  };

  return (
    <AnagramContext.Provider value={{ searchAnagram }}>
      {children}
    </AnagramContext.Provider>
  );
};

export default AnagramProvider;
