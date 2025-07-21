# codex-doudizhu

A minimal Dou Dizhu game implemented with React 18, TypeScript and Vite. See `doudizhu/` for the application source.

# 项目目标

实现一个 3 人斗地主网络游戏 WebApp。第一阶段：本地 1 名真人 vs 2 名电脑；第二阶段：支持 2 名真人 +1 电脑 或 3 名真人联机对战。UI 要简约精美，可再迭代动画与音效。

# 技术栈（必须）

- Front-end: **React 18 + TypeScript + Vite**
- Styling: **Tailwind CSS**（JIT）、**shadcn/ui** 组件库
- Animation: **Framer Motion**
- State 管理：内置 `useState`/`useReducer` 即可
- 后端联机（预埋接口）：**Node + Socket.io**，未来可替换为 Golang / Elixir

# 目录结构（必须按此生成）

src/
components/
Card.tsx ← 单张牌 UI
PlayerHand.tsx ← 底部玩家手牌（可选中）
ComputerHand.tsx ← AI 手牌背面 + 牌数
GameBoard.tsx ← 主面板、出牌区、按钮
logic/
types.ts ← 类型 & 枚举
deck.ts ← 创建、洗牌、发牌
ai.ts ← 简易 AI（随机合法出牌）
game.ts ← 状态机：出牌校验 / 回合推进
App.tsx ← 入口
main.tsx ← ReactDOM 渲染

# 代码要求

1. **全部 TypeScript，零 any**
2. **严格分离** UI (`components/*`) 与游戏规则 (`logic/*`)
3. `Card.rank` 范围 3–15（3 最小，2=15），16=小王，17=大王
4. 先实现“随机打一张”AI，但留好 TODO 注释以扩展牌型判断
5. `initGame()` ⇒ `GameState`，含 `players: PlayerState[]`、`currentTurn`、`lastPlayed`
6. `playTurn(state, selectedIndexes)`：
   - 若 `state.players[currentTurn].isHuman`，按 `selectedIndexes` 出牌；
   - 否则调用 `simpleAIPlay()`
   - 移除已出牌，更新 `lastPlayed`、`currentTurn`，返回新对象
7. UI 交互：
   - 点击手牌切换选中（牌上浮）
   - “出牌” 按钮把选中的索引传给 `playTurn`
   - “重新发牌” 按钮调用 `initGame()`
8. Tailwind 主题示例：背景 `from-green-100 to-amber-50` 渐变，牌面红色花色用 `text-red-600`
9. 每个文件顶部添加简短 JSDoc，关键逻辑再配行内注释
10. 运行：`pnpm create vite@latest doudizhu --template react-ts` → 将生成文件覆盖/追加即可

# UI 参考

- 卡牌尺寸：`w-10 h-14`（40 × 56 px），圆角 `rounded-lg`，轻微阴影
- 电脑手牌只渲染背面小矩形 + 计数
- 出牌区居中显示 `lastPlayed` 数组里的牌

# 后续迭代 TODO（留注释，不实现）

- 完整牌型/比较大小 + 抢地主逻辑
- AI 策略（贪心 / DFS 搜索）
- Socket.io server：房间创建、加入、同步 `GameState`
- 胜负结算弹窗、音效、动画
- 部署脚本（Vercel / Netlify）

# 交付格式

直接返回 **全部代码文件** 的内容（用 Markdown 代码块分隔），确保能 `npm i && npm run dev` 一键跑起。
