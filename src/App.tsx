import React, { useState } from "react";
import getItems from "./utils/getItems";
import ItemsGrid from "./components/ItemsGrid";
import ItemsContext from "./context/ItemsContext";
import { ReactComponent as Triforce } from "./assets/triforce.svg";

function App() {
  const [itemSelected, setItemSelected] = useState(0);
  const contextState = {
    setItemSelected,
    itemSelected,
  };
  return (
    // <div className="min-h-screen flex bg-zelda-darkGreen">
    //   <div className = "xl:flex grid-column">
    //   <h1 className="flex items-center font-bold text-5xl tracking-tight text-gray-900">
    //     Zelda BOTW
    //     <Triforce className="ml-4 w-20 h-20 text-zelda-yellow fill-current" />
    //   </h1>
    //   </div>
    // </div>
<div className="min-h-screen pt-32">
<div className="container mx-auto flex flex-col xl:flex-row">
  <div className="bg-zelda-darkGreen w-full xl:w-1/2">
  <ItemsContext.Provider value={contextState}>
  <ItemsGrid items={getItems()} />
    </ItemsContext.Provider>
  </div>
  <div className="bg-zelda-lightGray w-full xl:w-1/2">
  </div>
</div>
</div>
  );
}

export default App;
