import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Result } from "../../components/Result";
import { AnagramContext } from "../../contexts/anagram";
import { Div } from "./styles";

export interface iSearchUseForm {
  name: string;
}

export const Home = () => {
  const { searchAnagram, result } = useContext(AnagramContext);
  const { register, handleSubmit } = useForm<iSearchUseForm>();
  return (
    <Div>
      <form onSubmit={handleSubmit(searchAnagram)}>
        <h1>Anagrama</h1>
        <input type="text" placeholder="Digite algo..." {...register("name")} />
        <button type="submit">Buscar</button>
      </form>
      {result.length > 0 && <Result />}
    </Div>
  );
};
