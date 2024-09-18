import Contact from "./components/contact/Contact";
import { Experience } from "./components/experience/Experience";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { ProjectsAndAchievements } from "./components/projectsAndAchievements/ProjectsAndAchievements";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Experience />
        <ProjectsAndAchievements />
        <Contact />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
