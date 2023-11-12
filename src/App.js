import React , {useState} from "react";
import Toolbar1 from "./Toolbar1/Toolbar1";
import Toolbar2 from "./Toolbar2/Toolbar2";
import HeroBlock from "./Hero/HeroBlock";
import ProductList from "./ProductList/ProductList";
import BackDrop from "./BackDrop/BackDrop";
import SideDrawer from "./SlideDrawer/SideDrawer";

const App = (props) => {
  const [isOpen, setisOpen] = useState(false)

  const OpenHandler = () => {
    setisOpen(true)
  }

  const CloseHandler = () => {
    setisOpen(false)
  }
  const BackDropHandler = () => {
    if (isOpen == true) {
      return (<BackDrop CloseHandler={CloseHandler} />)

    }
  }



  return (
    <div >
      <SideDrawer ISOPEN={isOpen} />
      <Toolbar2 OpenHandler={OpenHandler} />
      {BackDropHandler()}


      <Toolbar1 />
      <Toolbar2 />
      <HeroBlock />
      <main style={{ marginTop: '76px' }}>
        <ProductList />

      </main>

    </div>
  );
}

export default App;
