/** Display a single playing card */
import { motion } from 'framer-motion'
import type { Card as CardType } from '../logic/types'

interface CardProps {
  card: CardType
  selected?: boolean
  onClick?: () => void
  faceDown?: boolean
}

export default function Card({ card, selected, onClick, faceDown }: CardProps) {
  const rankMap: Record<number, string> = {
    11: 'J',
    12: 'Q',
    13: 'K',
    14: 'A',
    15: '2',
    16: '🃏',
    17: '🃏',
  }
  const label = rankMap[card.rank] ?? card.rank.toString()
  const isRed = card.suit === '♥' || card.suit === '♦'

  return (
    <motion.div
      layout
      onClick={onClick}
      className={`w-10 h-14 rounded-lg shadow-sm bg-white flex flex-col items-center justify-center text-xs select-none cursor-pointer ${
        isRed ? 'text-red-600' : 'text-black'
      } ${selected ? '-translate-y-2' : ''} ${faceDown ? 'bg-gray-400' : ''}`}
    >
      {!faceDown && (
        <>
          <span>{label}</span>
          <span className="text-xs">{card.suit !== 'JOKER' ? card.suit : ''}</span>
        </>
      )}
    </motion.div>
  )
}
