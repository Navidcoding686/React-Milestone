import './App.css'
import Nav from './components/nav'
import Banner from './components/banner'
import { Suspense } from 'react';
import Data from './components/data';
import type { Stack } from './components/type';
import Footer from './components/Footer';

const getData = async ():Promise<Stack[]> => {
      const res = await fetch("/data.json");
      const data = await res.json();
      return data;
}


function App() {

  return (
    <>
    <Nav />
    <Banner />
    <Suspense fallback={<div>Loading...</div>}>
    <Data data = {getData()} />
    </Suspense>
    <Footer/>
    </>
  )
}

export default App

