import Block from "./components/Block";
import { useState } from "react";

const App = () => {
  const [state, setState] = useState(Array(9).fill(null));
  
  console.log(state);

  return (
    <div className="h-screen w-full pt-40 relative">
      {/* p-1/2 translate-x-1/2 */}
      <div className="flex row">
        <Block value={state[0]}  />
        <Block value={state[1]}  />
        <Block value={state[2]}  />
      </div>
      
      <div className=" flex row">
        <Block value={state[3]}  />
        <Block value={state[4]}  />
        <Block value={state[5]}  />
      </div>
      
      <div className=" flex row">
        <Block value={state[6]}  />
        <Block value={state[7]}  />
        <Block value={state[8]}  />
      </div>
    
      </div>
  );
};

export default App;
