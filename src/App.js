import React from "react";
import Toolbar1 from "./Toolbar1/Toolbar1";
import Toolbar2 from "./Toolbar2/Toolbar2";
import HeroBlock from "./Hero/HeroBlock";
import Category from "./Category/Category";

const App= ()=> {
  return (
    <div className="App">
      <Toolbar1/>
      <Toolbar2/>
      <HeroBlock/>
      <Category/>
    </div>
  );
}

export default App;
