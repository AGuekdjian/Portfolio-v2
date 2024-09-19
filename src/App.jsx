import Contact from "./components/contact/Contact";
import AcademicFormation from "./components/education/AcademicFormation";
import Experience from "./components/experience/Experience";
import { Header } from "./components/header/Header";
import Home from "./components/home/Home";
import { ProjectsAndAchievements } from "./components/projectsAndAchievements/ProjectsAndAchievements";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Experience />
        <ProjectsAndAchievements />
        <AcademicFormation />
        <Contact />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
