import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Resume } from "./components/Resume";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <Header />
      <Resume income={"0.0"} expense={"0.0"} total={"0.0"} />
      <Form />
      <GlobalStyles />
    </>
  );
}

export default App;
