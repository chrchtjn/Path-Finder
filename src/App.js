import React from "react"
import "./App.css"
import Navbar from './Navbar.js';
import Menubar from './Menubar.js'
import Grid from './Grid.js'
// import Cell from './Cell.js'
import { useState } from "react"



function App() {

  const [flag,setFlag]=useState(false);

  const [resetFlag, setResetFlag] = useState(false);
  const [clearPathFlag, setClearPathFlag] = useState(false);

  const [virgin, setVirgin] = useState(true);
  

  const arr = [   
                  <Navbar/>,
                  <Menubar st   = {[1,1]} 
                           sf   = {setFlag} 
                           srf  = {setResetFlag} 
                           scpf = {setClearPathFlag}
                           sv = {setVirgin}
                  />,
                  <Grid sf = {setFlag} flag={flag} 
                        srf={setResetFlag} rf={resetFlag}
                        scpf={setClearPathFlag} cpf={clearPathFlag}
                        v = {virgin}
                  />
              ];

  
  return (
    <> {arr} </>
  );
}


export default App;
