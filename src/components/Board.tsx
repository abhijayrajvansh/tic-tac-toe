import React, { useState } from "react";
import Block from "./Block";

const Board: React.FC = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentPlayerTurn, setCurrentPlayerTurn] = useState("X");
  const [prevTurn, setPrevTurn] = useState<string>("O");
  const [billboard, setBillboard] = useState("Click to play, first turn: X");
  const [gameState, setGameStatus] = useState("going");


  // winning criteria logic
  const checkWinner = (state: (string | null)[]) => {
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

  if (win && gameState === "going") {
    setBillboard(`${prevTurn} won the game!`);
    setGameStatus("gameover"); // taaki harbaar na chalne lage aur game crash ho jaye
  }

  const handleBlockClick = (boxNumber: number) => {
    if (win) {
      return;
    } // return here means that no button click will happen afterwards
    // alert(`${currentPlayerTurn} won the game!`);
    // shayad alert nahi use kar sakte because it acts like priority or async fun aur pehle execute ho jata hai
    
    if (lastState[boxNumber] != null) return; // to avoid overwrite the value of the block

    setCurrentPlayerTurn(currentPlayerTurn === "X" ? "O" : "X");
    lastState[boxNumber] = currentPlayerTurn;
    setState(lastState);
    setPrevTurn(currentPlayerTurn); // recording previous value

    // billboard manipulation
    setBillboard(`Current Turn: ${prevTurn}`)

  };

  const handleClickReload = () => {
    window.location.reload();
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="flex">
        <div className="">
          <h1 className="text-white font-bold text-4xl mb-5 mt-9 text-center rounded-lg p-2 bg-blue-800">
            Tic Tac Toe
          </h1>
          <p className="text-white text-xl font-medium text-center mb-5">
            {billboard}
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
              className="text-white font-bold mt-10 ml px-4 py-3 rounded-lg bg-rose-500 hover:bg-rose-800"
            >
              Play Again!
            </button>
          </div>
        </div>
        </div>
        <section className="mt-10 flex text-white">
        <a href='https://linkedin.com/in/abhijayrajvansh' target="_blank" rel="noopener noreferrer">
          <p className="text-white font-medium">© Abhijay Rajvansh</p>
        </a>
        <p>, All Right Reserved.</p>
      </section>
    </div>
  );
};

export default Board;
