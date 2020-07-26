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
<div className="min-h-screen pt-32 bg-zelda-darkGreen">
<div className="container mx-auto flex flex-col xl:flex-row">
  <div className="w-full xl:w-1/2">
  <ItemsContext.Provider value={contextState}>
  <ItemsGrid items={getItems()} />
    </ItemsContext.Provider>
  </div>
  <div className="w-full xl:w-1/2 text-md text-white bg-black">
    Text!
  </div>
</div>
</div>
  );
}

export default App;
