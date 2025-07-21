/** Main game board containing player areas and controls */
import { useEffect, useState } from 'react'
import PlayerHand from './PlayerHand'
import ComputerHand from './ComputerHand'
import Card from './Card'
import { initGame, playTurn } from '../logic/game'
import type { GameState } from '../logic/types'

export default function GameBoard() {
  const [state, setState] = useState<GameState>(() => initGame())
  const [selected, setSelected] = useState<number[]>([])

  // Auto-play AI turns whenever it's not human's turn
  useEffect(() => {
    let current = state
    let changed = false
    while (!current.players[current.currentTurn].isHuman) {
      current = playTurn(current, [])
      changed = true
    }
    if (changed) setState(current)
  }, [state])

  const toggle = (i: number) => {
    setSelected((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    )
  }

  const handlePlay = () => {
    if (selected.length === 0) return
    setState((s) => playTurn(s, selected))
    setSelected([])
  }

  const handleReset = () => {
    setState(initGame())
    setSelected([])
  }

  const human = state.players[0]
  return (
    <div className="flex flex-col items-center gap-4 min-h-screen bg-gradient-to-b from-green-100 to-amber-50 p-4">
      <div className="flex justify-between w-full">
        <ComputerHand count={state.players[1].hand.length} />
        <ComputerHand count={state.players[2].hand.length} />
      </div>
      <div className="flex gap-2 my-4">
        {state.lastPlayed.map((card, idx) => (
          <Card key={idx} card={card} />
        ))}
      </div>
      <PlayerHand hand={human.hand} selected={selected} toggle={toggle} />
      <div className="mt-2 flex gap-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handlePlay}>出牌</button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded" onClick={handleReset}>重新发牌</button>
      </div>
    </div>
  )
}
