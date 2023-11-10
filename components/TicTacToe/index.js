import TicTacToeComponent from './TicTacToe.component';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';


export default function TicTacToeContainer () {
  return (
    <>
      <h3>TicTacToe Game</h3>
      <TicTacToeComponent />
    </>
  )
}