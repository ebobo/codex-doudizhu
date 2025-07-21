/** Very simple AI that plays a random card */
import type { Card } from './types'

export function simpleAIPlay(hand: Card[]): Card[] {
  const index = Math.floor(Math.random() * hand.length)
  return [hand.splice(index, 1)[0]]
  // TODO: replace with full card-type evaluation
}
