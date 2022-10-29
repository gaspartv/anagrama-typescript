import { useState, useRef, useEffect } from "react";
import { database } from "../../database";
import { ResultStyled, StartStyled, WordsStyled } from "./styles";
import autoAnimate from "@formkit/auto-animate";

const Anagram = () => {
  const parent = useRef(null);

  const [letters, setLetters] = useState([] as string[]);
  const [words, setWords] = useState([] as string[]);
  const [results, setResults] = useState([] as string[]);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  useEffect(() => {
    // const searchResult = database.some(
    //   (elem) => normalizeString(elem) === normalizeString(words.join(""))
    // );
    // console.log(searchResult);
  }, [words]);

  const normalizeString = (name: string) => {
    return name.toLowerCase().split("").sort().join("").trim();
  };

  const randomLetter = () => {
    const data = [
      database[Math.floor(Math.random() * database.length)],
      database[Math.floor(Math.random() * database.length)],
      database[Math.floor(Math.random() * database.length)],
    ];

    const allLetters = data.join("").split("");
    const notRepeatedLetters = [] as string[];
    allLetters.map(
      (elem) =>
        !notRepeatedLetters.includes(elem) && notRepeatedLetters.push(elem)
    );
    notRepeatedLetters.sort().join("");
    setLetters(notRepeatedLetters);
  };

  const checkWord = (name: string) => {
    const check = database.some(
      (elem) => normalizeString(elem) === normalizeString(words.join(""))
    );
    check && setResults([...results, name]);
    console.log(check);
    setWords([]);
  };

  return (
    <>
      <StartStyled>
        <div ref={parent}>
          {letters.length > 0 ? (
            letters.map((elem, index) => (
              <button
                key={index}
                id={elem}
                onClick={() => setWords([...words, elem])}
              >
                {elem}
              </button>
            ))
          ) : (
            <button onClick={() => randomLetter()}>Iniciar</button>
          )}
        </div>
      </StartStyled>
      <WordsStyled ref={parent}>
        {words.length > 0 && (
          <p>
            {words.map((elem) => elem)}
            <div>
              <button onClick={() => checkWord(words.join(""))}>Enviar</button>
              <button onClick={() => setWords([])}>Limpar</button>
            </div>
          </p>
        )}
      </WordsStyled>
      <ResultStyled ref={parent}>
        {results.length > 0 &&
          results.map((elem, index) => <li key={index}>{elem}</li>)}
      </ResultStyled>
    </>
  );
};

export default Anagram;
