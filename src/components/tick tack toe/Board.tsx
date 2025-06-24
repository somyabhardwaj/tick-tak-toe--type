import Blocks from "./blocks"
import { useState } from "react"

function Home() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [value, setValue] = useState("X");
  const [winningLine, setWinningLine] = useState<number[] | null>(null);

  const checkWinnerLigic = (state:any[]) => {
    const winnOptions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < winnOptions.length; i++) {
      let [a, b, c] = winnOptions[i];
      if ((state[a] !== null && state[b] !== null && state[c] !== null) && (state[a] === state[b] && state[a] === state[c])) {
        setWinningLine([a,b,c])
        alert(`${value} won the game`)
      }
    }
  }
  const handleOnClick = (idx: number) => {
    const boardCopy = Array.from(board);
    if (boardCopy[idx] !== null) return;
    boardCopy[idx] = value;
    setBoard(boardCopy)
    checkWinnerLigic(boardCopy);
    setValue((prev) => (prev === "X" ? "O" : "X"))

  }
  return (
    <div className="board">
      <div className="row">
        {board?.map((item, idx) => (
          <Blocks onClick={() => { handleOnClick(idx) }} value={item} />
        ))}
      </div>

    </div>

  )
}

export default Home