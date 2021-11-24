import './App.css';

import {Routes, Route} from 'react-router-dom';
import LandingPage from "./components/landing";
import Home from "./components/home";
import Creation from './components/Creation';
import Detail from './components/Detail';
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={ <LandingPage />}/> 
        <Route path="/*" element={ <NavBar />} >
          <Route path="home" element= {<Home/>}/> 
          {/* <Route path="pokemons/:name" element= {<Detail/>}/>  */}
          <Route path="pokemons/:id" element={<Detail/>}/>
          <Route path="creation" element= {<Creation />}/> 
      </Route>
    </Routes>
        {/* <Routes>
      <Route path="/" element={ <LandingPage />}/> 
          <Route path="/home" element= {<Home/>}/> 
          <Route path="/pokemons/:id" element={<Detail/>}/>
          <Route path="/pokemons" element= {<Creation />}/> 
    </Routes> */}
    </div>
  );
}

export default App;


