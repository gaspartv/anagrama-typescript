import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AnagramContext } from "../../contexts/anagram";

export interface iSearchUseForm {
    name: string
}

export const Home = () => {
    const { searchAnagram } = useContext(AnagramContext);
  const { register, handleSubmit } = useForm<iSearchUseForm>();

  return (
    <form onSubmit={handleSubmit(searchAnagram)}>
      <h1>Anagrama</h1>
      <input type="text" placeholder="Digite algo..." {...register("name")} />
      <button type="submit">Buscar</button>
    </form>
  );
};
