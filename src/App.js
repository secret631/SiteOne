import React from "react";
import Toolbar1 from "./Toolbar1/Toolbar1";
import Toolbar2 from "./Toolbar2/Toolbar2";
import HeroBlock from "./Hero/HeroBlock";
import ProductList from "./ProductList/ProductList";

const App= ()=> {
  return (
    <div >
      <Toolbar1/>
      <Toolbar2/>
      <HeroBlock/>
      <main style={{ marginTop: '76px' }}>
                <ProductList/>

            </main>

    </div>
  );
}

export default App;
