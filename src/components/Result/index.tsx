import { AnagramContext } from "../../contexts/anagram";
import { useContext } from "react";
import { ResultStyled } from "./styles";

export const Result = () => {
  const { result, setResult } = useContext(AnagramContext);
  return (
    result && (
      <ResultStyled>
        <button onClick={() => setResult([])}>X</button>
        <div>
          {result.map((elem) => (
            <p key={elem}>{elem}</p>
          ))}
        </div>
      </ResultStyled>
    )
  );
};
