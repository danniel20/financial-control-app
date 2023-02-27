import { Header } from "./components/Header";
import { Resume } from "./components/Resume";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <Header />
      <Resume income={200} expense={50} total={150} />
      <GlobalStyles />
    </>
  );
}

export default App;
