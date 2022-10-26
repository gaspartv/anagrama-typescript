import AnagramProvider from "./contexts/anagram";
import RouterMain from "./Routes";
import { GlobalStyled } from "./styles/Global";

function App() {
  return (
    <>
      <GlobalStyled />
      <AnagramProvider>
        <RouterMain />
      </AnagramProvider>
    </>
  );
}

export default App;
