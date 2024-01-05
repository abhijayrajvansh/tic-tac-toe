import Block from "./components/Block";
import { useState } from "react";

const App = () => {
  const [state, setState] = useState(Array(9).fill(null));
  console.log(state);

  return (
    <div className="h-screen w-full p-20">

      <div className="flex row">
        <Block value="X" />
        <Block value="X" />
        <Block value="X" />
      </div>
      
      <div className=" flex row">
        <Block value="X" />
        <Block value="X" />
        <Block value="X" />
      </div>
      
      <div className=" flex row">
        <Block value="X" />
        <Block value="X" />
        <Block value="X" />
      </div>
    
      </div>
  );
};

export default App;
