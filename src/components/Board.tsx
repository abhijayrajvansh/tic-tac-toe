import { useState } from "react";
import Block from "./Block";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentPlayerTurn, setCurrentPlayerTurn] = useState("X");
  const [winner, setWinner] = useState(false);

  const handleBlockClick = (boxNumber: number) => {
    if (winner) {
      alert("damn");
    } // if winner is already found then game over

    const currState: Array<string | null> = Array.from(state);
    // if(currState[boxNumber] === 'X' || currState[boxNumber] === 'O') return;
    if (currState[boxNumber] != null) return;
    currState[boxNumber] = currentPlayerTurn;
    setCurrentPlayerTurn(currentPlayerTurn === "X" ? "O" : "X");
    setState(currState);
  };

  const handleClickReload = () => {
    window.location.reload();
  };

  return (
    <div className="h-screen w-full relative flex justify-center">
      <div className="">
        <h1 className="text-white text-6xl mb-10 mt-8 text-center mr-5 ml-5 rounded-lg p-2 bg-green-500">
          Tic Tac Toe
        </h1>
        <p className="text-white font-medium">
          Current Player Turn: {currentPlayerTurn}
        </p>
        <div className="flex row">
          <Block onClick={() => handleBlockClick(0)} value={state[0]} />
          <Block onClick={() => handleBlockClick(1)} value={state[1]} />
          <Block onClick={() => handleBlockClick(2)} value={state[2]} />
        </div>

        <div className=" flex row">
          <Block onClick={() => handleBlockClick(3)} value={state[3]} />
          <Block onClick={() => handleBlockClick(4)} value={state[4]} />
          <Block onClick={() => handleBlockClick(5)} value={state[5]} />
        </div>

        <div className=" flex row">
          <Block onClick={() => handleBlockClick(6)} value={state[6]} />
          <Block onClick={() => handleBlockClick(7)} value={state[7]} />
          <Block onClick={() => handleBlockClick(8)} value={state[8]} />
        </div>

        <div className="flex justify-center">
          <button onClick={handleClickReload} 
            className="text-white font-bold mt-7 ml px-5 py-4 rounded-lg bg-rose-500">
            Play Again!
          </button>
        </div>
        <p className="text-white text-center mt-5">© Abhijay Rajvansh</p>
      </div>
    </div>
  );
};

export default Board;
