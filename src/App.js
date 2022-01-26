import React from 'react';
import { useState } from 'react';
import './App.css';
import { GlobalProvider } from './context/GlobalState';

// var expData = ["savings","expense"]
// var expValue = [10,120]
function App() {
  const [saveingvalue, setSaveingvalue] = useState(0);
  const [expensevalue, setExpensevalue] = useState(0);
  
  const saveinfo = (e) => {
   
   setSaveingvalue(e.target.value);
  }

  const expninfo = (e) =>{
    setExpensevalue(e.target.value);
  }

  const handleSubmit=(e)=>{
    // e.preventDefault();
    expninfo();
    saveinfo();
  }



  return (
    <GlobalProvider>
    <div className="App">
  
     <center><h1>Savings:{saveingvalue}</h1></center>
     <center><h1>Expense:{expensevalue}</h1></center>

      {/* onChange={this.saveinfo} onChange={this.expninfo}   setCount((c) => c + 1) */}
      <div className='foo'>
        <input type="text" defaultValue={saveingvalue} name='saveingvalue' onChange={(e) => setSaveingvalue(e.target.value)}/>
        <input type="text" defaultValue={expensevalue} name='expensevalue' onChange={(e) => setExpensevalue(e.target.value)}/>
        <button  onClick={() => handleSubmit()}>submitt</button>
       
        
      </div>
    </div>
    </GlobalProvider>
    );
}

export default App;
