import NavBar from "./components/navBar/NavBar.js";
import "./App.css";
import { AboutPage } from "./components/aboutPage/AboutPage.js";
import { ProjectPage } from "./components/projectPage/ProjectPage.js";
import { SkillsPage } from "./components/skillsPage/SkillsPage.js";
import { ContactPage } from "./components/contactPage/ContactPage.js";

function App() {
  return (
    <div id="App">
      <NavBar/>
      <AboutPage/>
      <ProjectPage/>
      <SkillsPage className="SkillsPage"/>
      <ContactPage className="ContactPage"/>
    </div>
  );
}

export default App;
