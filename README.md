# Interactive Grid Application

A production-ready Next.js web application featuring an interactive 3×3 grid with dynamic ripple effects and state management.

## Features

- **3×3 Interactive Grid**: 9 clickable boxes with dynamic value updates
- **Ripple Effects**: 
  - Rule A: When a box value is divisible by 3, decrement the right neighbor by 1
  - Rule B: When a box value is divisible by 5, increment the bottom neighbor by 2
- **Locked State**: Boxes with values ≥ 15 become locked (red background, disabled)
- **Dynamic Styling**:
  - Even numbers: Gray background (#e0e0e0) with black text
  - Odd numbers: Dark blue background (#1a237e) with white text
  - Locked state: Red background with white text
- **Visual Polish**:
  - 4px rounded corners
  - 2px 2px 0px black shadow
  - Hover animations (scale effect)
  - Smooth transitions

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
git clone <repository-url>
cd grid-app

# Install dependencies
npm install

# Run development server
npm run dev
```

The application will be available at `http://localhost:3000`

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
│   │   └── Grid.tsx          # Main grid component with all logic
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## Component Details

### Grid Component (`app/components/Grid.tsx`)

The main component that manages:

1. **State Management**: Uses React hooks to manage a 9-element array representing grid values
2. **Click Handler**: Increments clicked box value by 1 (if not locked)
3. **Ripple Effects**: Applies rules after each increment
4. **Styling Logic**: Determines box appearance based on value and locked state

#### Ripple Effect Logic

```typescript
// Rule A: Divisible by 3
if (value % 3 === 0 && col < 2) {
  // Decrement right neighbor (if not locked)
  newValues[rightIndex] -= 1;
}

// Rule B: Divisible by 5
if (value % 5 === 0 && row < 2) {
  // Increment bottom neighbor by 2 (if not locked)
  newValues[bottomIndex] += 2;
}
```

#### Locked State Rules

- Boxes with values ≥ 15 are locked
- Locked boxes cannot be clicked
- Locked boxes cannot be modified by ripple effects
- Locked boxes display red background with white text

## Styling Details

### Box Styling

| State | Background | Text Color | Cursor |
|-------|-----------|-----------|--------|
| Even (0, 2, 4...) | #e0e0e0 | Black | pointer |
| Odd (1, 3, 5...) | #1a237e | White | pointer |
| Locked (≥15) | #ef4444 | White | not-allowed |

### Visual Effects

- **Shadow**: `2px 2px 0px black`
- **Border Radius**: `4px`
- **Hover**: Scale up to 1.05 (non-locked boxes)
- **Active**: Scale down to 0.95 (non-locked boxes)
- **Transition**: 200ms ease-out

## Edge Case Handling

- **Right Edge**: Rule A doesn't apply to boxes in the last column
- **Bottom Edge**: Rule B doesn't apply to boxes in the bottom row
- **Locked Boxes**: Cannot be modified by any ripple effects
- **State Safety**: All state updates use immutable patterns

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel will automatically detect Next.js and configure build settings
4. Deploy with one click

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

## Performance Optimizations

- **Memoization**: `useCallback` hooks prevent unnecessary re-renders
- **Immutable Updates**: State updates create new arrays to trigger proper re-renders
- **Efficient Styling**: Inline styles only for dynamic values, Tailwind for static classes

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Code Quality

- TypeScript for type safety
- ESLint configuration included
- Clean, readable code with comments
- Production-ready error handling

## Future Enhancements (Optional)

- Reset button to clear grid
- Undo/Redo functionality
- Game statistics (clicks, locked boxes)
- Difficulty levels
- Sound effects
- Dark mode toggle

## License

MIT

## Author

Created as a technical assessment project demonstrating React, Next.js, and Tailwind CSS expertise.
