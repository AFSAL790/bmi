import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; 


function App() {

  const [w, setW] = useState("");
  const [h, setH] = useState("");
  const [bmi, setBmi] = useState(0);
  const [isw, setIsW] = useState(true);
  const [ish, setIsH] = useState(true);

  const validate = (e) => {
   const { name, value } = e.target;
   console.log(name, value);
   const isValid = value.match(/^[0-9]+$/);


   if (isValid) {
     if (name === 'w') {
       setIsW(true);
       setW(value);
     } else if (name === 'h') {
       setIsH(true); 
       setH(value);
     } 
   } else {
     if (name === 'w') {
       setIsW(false);
     } else if (name === 'h') {
       setIsH(false);
     }
   }
  };


 const handleReset= () => {
   setW("");
   setH("");
   setBmi("");       
   setIsW(true);
   setIsH(true);       
       
 }
 const handleCalculate = ()=>{
   setBmi((w/(h/100)**2).toFixed(2))
 }


  

  return (
    <>
    <div style={{ height: '100vh'}} className="bg-w-100 d-flex justify-content-center align-items-center" id='full'>
     <div style={{ width: '500px' }} className="p-5 bg-light rounded">
      <h1><span style={{color:'grey',fontSize:'70px'}}>BMI</span> Calculator</h1>
      <p>Calculate your body mass index</p>
      <div style={{ height: '150px',backgroundColor:'grey' }} className="rounded d-flex justify-content-center align-items-center flex-column">
            <h1 style={{fontSize:'60px'}}> {bmi} </h1>
            <p>Body Mass Index</p>
      </div>
      <div className="mb-3 pt-5">
        <TextField id="outlined-basic" label="Weight(in kilograms)" variant="outlined" 
         className="w-100"
         name="w" 
         onChange={validate}
         value={w}
         />
         {!isw && <span className="text-danger">*invalid input</span>}
              
      </div>
       <div className="mb-3">
       <TextField id="outlined-basic" label="Height(in centimeters)" variant="outlined"
        className="w-100"
        name="h" 
       
        onChange={validate}
        value={h}
       />
       {!ish && <span className="text-danger">*invalid input</span>}

             
              
       </div>
       <div className="mb-3 d-flex justify-content-between">
              <Button variant="contained" onClick={handleCalculate} style={{backgroundColor:'grey',color:'black'}}>Calculate</Button>
              <Button variant="contained" onClick={handleReset} style={{backgroundColor:'black',color:'grey'}}>Reset</Button>
        </div>
          
     </div>
    </div>
     
    </>
  )
}

export default App
