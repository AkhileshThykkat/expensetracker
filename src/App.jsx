import React, { Fragment } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

import AddItem from "./components/AddItem";




export default function App(){
  return(<Fragment>
    <header>
      <Header />
    </header>
    <main>
      <MainContent />
      
    </main>

    <footer>
      <AddItem/>
    </footer>
  
  </Fragment>)
}