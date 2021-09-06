import DashBoardPage from "./components/dashBoardPage/DashBoardPage.js";
import NavBar from "./components/navBar/NavBar.js";
import "./App.css";

import mainBackground from './assets/image/earth.jpg';


function App() {
  return (
    <div>
      <div id="mainBackground" alt="background"></div>
      <NavBar></NavBar>
      <DashBoardPage></DashBoardPage>
    </div>
  );
}

export default App;
