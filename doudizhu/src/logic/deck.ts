/** Utility functions to create and deal a deck */
import type { Card, Suit } from './types'

const suits: Suit[] = ['♠', '♥', '♦', '♣']

export function createDeck(): Card[] {
  const deck: Card[] = []
  for (const suit of suits) {
    for (let rank = 3; rank <= 15; rank++) {
      deck.push({ suit, rank })
    }
  }
  deck.push({ suit: 'JOKER', rank: 16 })
  deck.push({ suit: 'JOKER', rank: 17 })
  return deck
}

export function shuffle(cards: Card[]): Card[] {
  const deck = [...cards]
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[deck[i], deck[j]] = [deck[j], deck[i]]
  }
  return deck
}

export function deal(): [Card[], Card[], Card[]] {
  const deck = shuffle(createDeck())
  return [deck.slice(0, 17), deck.slice(17, 34), deck.slice(34, 51)]
}
