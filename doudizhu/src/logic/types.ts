/** Game related TypeScript types and enums */

export type Suit = '♠' | '♥' | '♦' | '♣' | 'JOKER'

export interface Card {
  /** rank 3..15 -> 3..A, 16=small joker, 17=big joker */
  rank: number
  suit: Suit
}

export interface PlayerState {
  hand: Card[]
  isHuman: boolean
}

export interface GameState {
  players: PlayerState[]
  currentTurn: number
  lastPlayed: Card[]
}
