import './App.css'
import styles from "./style";
import {
  HomeMain, Navbar, Elements, Team, Roadmap, Storyline,Preloader,Career
} from "./components";
import { Route, Routes } from 'react-router-dom';





const App = () => {

  return (
    <>
    {/*  */}
      <div >
        <div >
          <div className={`${styles.boxWidth}`}>
            {/* <Navbar></Navbar> */}
            <Routes>
              <Route path='/' element={<HomeMain />} />
              <Route path='/elementals' element={<Elements />} />
              <Route path='/storyline' element={<Storyline />} />
              <Route path='/roadmap' element={<Roadmap />} />
              <Route path='/team' element={<Team />} />
              <Route path='/career' element={<Career />} />
            </Routes>
          </div>
        </div>
      </div>
    </>

  );
};

export default App;
