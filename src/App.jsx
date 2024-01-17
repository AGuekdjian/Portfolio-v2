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
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
