/** Display back of AI hand with card count */
interface Props {
  count: number
}

export default function ComputerHand({ count }: Props) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex gap-1">
        {Array.from({ length: Math.min(count, 3) }).map((_, i) => (
          <div key={i} className="w-10 h-14 bg-gray-400 rounded-lg" />
        ))}
      </div>
      <span className="text-sm">x{count}</span>
    </div>
  )
}
