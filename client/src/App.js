import './App.css';
import {Routes, Route} from 'react-router-dom';
import LandingPage from "./components/landing";
import Home from "./components/home";
import Creation from './components/Creation';
import Detail from './components/Detail';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={ <LandingPage />}/> 
      <Route path="/home" element= {<Home />}/> 
      <Route path="/pokemons" element= {<Creation />}/> 
      <Route path="/pokemons/detail" element={<Detail/>}/>

    </Routes>
    </div>
  );
}

export default App;


