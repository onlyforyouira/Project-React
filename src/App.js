
import { useState } from 'react';
import './App.css';
import { useContext } from 'react';
import { AppContext } from './AppContext';

function Component1() {
  return (
  <div className='cart-name'>
      <Component2></Component2>
  </div>
  );
}

function Component3() {
  const data = useContext(AppContext);
  return (
  <div className='cart-name'>
      <h4>Cart {data.quality}</h4>
      <Counter></Counter>
  </div>
  );
}

function Counter() {

  const { quality,setQuality } = useContext(AppContext);
  function decrement(){
    if(quality > 1) {
      setQuality(quality - 1);
    }
  }

  function increment(){
      setQuality(quality + 1);
  }

  return (
    <div className='counter-class'>
         <h6>Counter</h6>
         <button type="button" onClick={decrement}>-</button>
         <span>{quality}</span>
         <button type="button" onClick={increment}>+</button>
    </div>
  )
}

function Component2() {
  return (
  <div className='cart-name'>
      <Component3></Component3>
  </div>
  );
}

function App() {
  const [quality,setQuality]=useState(1);
  return (
    <AppContext.Provider value={{quality,setQuality}}>
    <div className="App">
      <h4>Cart {quality}</h4>
      <Component1></Component1>
    </div>
    </AppContext.Provider>
  );
}

export default App;
