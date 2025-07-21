Project instructions:
Implement a three-player Dou Dizhu web app using React 18, TypeScript, Vite, Tailwind CSS with shadcn/ui, and Framer Motion. The repository should follow this structure:

src/
  components/
    Card.tsx
    PlayerHand.tsx
    ComputerHand.tsx
    GameBoard.tsx
  logic/
    types.ts
    deck.ts
    ai.ts
    game.ts
  App.tsx
  main.tsx

Key rules:
- All code must be TypeScript without any `any` types.
- Separate UI and game logic strictly.
- Card ranks: 3–15 normal, 16 small joker, 17 big joker.
- AI initially plays a random legal card; add TODO comments for future improvements.
- Provide `initGame()` and `playTurn()` APIs as described in the spec.
- UI interaction: select cards, play turn, redeal.
- Use Tailwind gradient background from green-100 to amber-50; red suits in `text-red-600`.
- Leave TODO comments for future phases (advanced AI, networking, etc.).
