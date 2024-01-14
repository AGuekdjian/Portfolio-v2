import { Experience } from "./components/experience/Experience";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Experience />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
