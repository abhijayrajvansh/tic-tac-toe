import React, { useState } from "react";
import Block from "./Block";

const Board: React.FC = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentPlayerTurn, setCurrentPlayerTurn] = useState(true);

  // winning criteria logic
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

  const lastState: Array<string | null> = Array.from(state);
  const win = checkWinner(lastState);

  const handleBlockClick = (boxNumber: number) => {
    if (win) return; // return here means that no button click will happen afterwards
    // alert(`${currentPlayerTurn} won the game!`);
    // shayad alert nahi use kar sakte because it acts like priority or async fun
    // aur pehle execute ho jata hai

    if (lastState[boxNumber] != null) return;
    // if(lastState[boxNumber] === 'X' || lastState[boxNumber] === 'O') return;

    // lastState[boxNumber] = currentPlayerTurn;
    if(currentPlayerTurn) {
      lastState[boxNumber] = 'X'
    }
    else {
      lastState[boxNumber] = 'O'
    }
    // setCurrentPlayerTurn(currentPlayerTurn === "X" ? "O" : "X");
    setCurrentPlayerTurn(() => !currentPlayerTurn)
    setState(lastState);
  };

  const handleClickReload = () => {
    window.location.reload();
  };

  return (
    <div className="h-screen w-full flex justify-center fixed">
      <div className="">
        <h1 className="text-white text-4xl mb-5 mt-7 text-center mr-5 ml-5 rounded-lg p-2 bg-green-500">
          Tic Tac Toe
        </h1>
        <p className="text-white text-2xl font-medium text-center mb-5">
          Current Player Turn: {currentPlayerTurn}
          {/* Congratulations, {currentPlayerTurn} won the game */}
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
            className="text-white font-bold mt-10 ml px-5 py-4 rounded-lg bg-rose-500"
          >
            Play Again!
          </button>
        </div>
        <p className="text-white text-center text-lg mt-5">
          © Abhijay Rajvansh
        </p>
      </div>
    </div>
  );
};

export default Board;
