import { useState } from "react";
import Block from "./Block";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentPlayerTurn, setCurrentPlayerTurn] = useState("X");

  const checkWinner = (state: any[]) => {
    const winningCriteria = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCriteria.length; i++) {
      const [a, b, c] = winningCriteria[i];
      if (state[a] != null && state[a] === state[b] && state[b] === state[c]) {
        return true;
      }
    }
    return false;
  };

  const handleBlockClick = (boxNumber: number) => {
    const lastState: Array<string | null> = Array.from(state);
    const win = checkWinner(lastState);

    if (win) return;
    // alert(`${currentPlayerTurn} won the game!`);
    // shayad alert nahi use kar sakte because it acts like priority or async fun 
    // aur pehle execute ho jata hai
    
    if (lastState[boxNumber] != null) return;
    // if(lastState[boxNumber] === 'X' || lastState[boxNumber] === 'O') return;

    lastState[boxNumber] = currentPlayerTurn;
    setCurrentPlayerTurn(currentPlayerTurn === "X" ? "O" : "X");
    setState(lastState);
  };

  const handleClickReload = () => {
    window.location.reload();
  };

  return (
    <div className="h-screen w-full relative flex justify-center">
      <div className="">
        <h1 className="text-white text-6xl mb-5 mt-5 text-center mr-5 ml-5 rounded-lg p-2 bg-green-500">
          Tic Tac Toe
        </h1>
        <p className="text-white text-2xl font-medium text-center mb-5">
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
          <button
            onClick={handleClickReload}
            className="text-white font-bold mt-7 ml px-5 py-4 rounded-lg bg-rose-500"
          >
            Play Again!
          </button>
        </div>
        <p className="text-white text-center mt-5">© Abhijay Rajvansh</p>
      </div>
    </div>
  );
};

export default Board;
