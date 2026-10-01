import { useState } from 'react' 
import Navbar from './components/Navbar';
import type { CardType } from './assets/type/CardType';



const technologiseFetch = async (): Promise<CardType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};


function App() {


  return (
   <>
   <h2 className='text-red-500'> my web site start</h2>
   <Navbar/>
   </>
  )
}

export default App
