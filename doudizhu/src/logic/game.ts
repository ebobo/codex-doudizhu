/** Game state management helpers */
import type { Card, GameState, PlayerState } from './types'
import { deal } from './deck'
import { simpleAIPlay } from './ai'

export function initGame(): GameState {
  const [h0, h1, h2] = deal()
  const players: PlayerState[] = [
    { hand: h0, isHuman: true },
    { hand: h1, isHuman: false },
    { hand: h2, isHuman: false },
  ]
  return { players, currentTurn: 0, lastPlayed: [] }
}

export function playTurn(state: GameState, selectedIndexes: number[]): GameState {
  const players = state.players.map((p) => ({ ...p, hand: [...p.hand] }))
  const player = players[state.currentTurn]
  let played: Card[] = []

  if (player.isHuman) {
    selectedIndexes
      .sort((a, b) => b - a)
      .forEach((i) => {
        const card = player.hand.splice(i, 1)[0]
        if (card) played.push(card)
      })
  } else {
    played = simpleAIPlay(player.hand)
  }

  const nextTurn = (state.currentTurn + 1) % players.length
  return { players, currentTurn: nextTurn, lastPlayed: played }
}
