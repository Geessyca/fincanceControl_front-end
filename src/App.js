import React, {useState} from "react";
import './global.css';
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import InputData from "./components/InputData/inputData";
import ValueProvider, { ValueContext } from "./functions/trafficControl";
import ExtractProvider from "./functions/extractControl";
import Extract from "./components/Extract/extract";
import Graphic from "./components/Graphic/graphic";

function App() {
  const [idPage, setIdPage] = useState(0);
  return (
    <>
      <Header setIdPage={setIdPage} />
      <ValueProvider>        
        <ExtractProvider>
          {idPage == 0 ? <Home /> : idPage == 1? <InputData /> :  idPage == 2? <Extract/>: <Graphic/>}     
        </ExtractProvider>
      </ValueProvider>      
    </>
  );
}

export default App;
