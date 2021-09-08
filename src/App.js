import NavBar from "./components/navBar/NavBar.js";
import "./App.css";
import { AboutPage } from "./components/aboutPage/AboutPage.js";
import { ProjectPage } from "./components/projectPage/ProjectPage.js";

function App() {
  return (
    <div id="App">
      <NavBar/>
      <AboutPage/>
      <ProjectPage/>
    </div>
  );
}

export default App;
