/** Interactive hand for the human player */
import Card from './Card'
import type { Card as CardType } from '../logic/types'

interface PlayerHandProps {
  hand: CardType[]
  selected: number[]
  toggle: (index: number) => void
}

export default function PlayerHand({ hand, selected, toggle }: PlayerHandProps) {
  return (
    <div className="flex gap-2">
      {hand.map((card, i) => (
        <Card
          key={i}
          card={card}
          selected={selected.includes(i)}
          onClick={() => toggle(i)}
        />
      ))}
    </div>
  )
}
