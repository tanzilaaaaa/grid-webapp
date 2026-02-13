# Grid Game

A fun interactive number grid game where clicking boxes triggers chain reactions. It's like a puzzle where numbers influence their neighbors!

## What's This About?

You get a 3×3 grid with 9 boxes, all starting at 0. Click any box to increase its number by 1. Simple enough, but here's the twist — when numbers hit certain values, they trigger effects on neighboring boxes, creating interesting chain reactions.

## How It Works

**The Basic Stuff:**
- Click a box → its number goes up by 1
- Even numbers show as gray boxes
- Odd numbers show as dark blue boxes
- Everything has smooth animations and shadows

**The Chain Reactions:**
- When a box hits a multiple of 3 (3, 6, 9...), the box to its right decreases by 1
- When a box hits a multiple of 5 (5, 10, 15...), the box below it increases by 2
- These ripple effects cascade through the grid, creating interesting patterns

**The Locked State:**
- Once any box reaches 15 or higher, it locks permanently
- Locked boxes turn red and can't be clicked
- Other boxes can't change a locked box's value either
- It's like that box becomes frozen and protected

## Tech Stack

- **Framework**: Next.js 16+ with React 19
- **Styling**: Tailwind CSS (no external UI libraries)
- **Language**: TypeScript
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/tanzilaaaaa/grid-webapp.git
cd grid-app

# Install dependencies
npm install

# Run development server
npm run dev
```

Open http://localhost:3000 in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
grid-app/
├── app/
│   ├── components/
│   │   └── Grid.tsx          # Main grid component
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## How the Grid Works

The grid is a 3×3 layout with index positions 0-8:
```
0 1 2
3 4 5
6 7 8
```

**Edge Cases Handled:**
- Boxes in the last column (2, 5, 8) don't have a right neighbor, so Rule A doesn't apply
- Boxes in the bottom row (6, 7, 8) don't have a bottom neighbor, so Rule B doesn't apply
- Locked boxes are protected from all ripple effects

## Styling

| State | Background | Text Color |
|-------|-----------|-----------|
| Even (0, 2, 4...) | #e0e0e0 | Black |
| Odd (1, 3, 5...) | #1a237e | White |
| Locked (≥15) | #ef4444 | White |

Each box has:
- 4px rounded corners
- 2px 2px 0px black shadow
- Smooth hover animations
- 200ms transitions

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT

## Author

Created as a fun interactive puzzle game.
