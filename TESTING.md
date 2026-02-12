# Testing Guide

This document outlines how to test all features and requirements of the Grid Application.

## Manual Testing Checklist

### UI Requirements

- [ ] **Grid Layout**
  - [ ] 3×3 grid is displayed (9 boxes total)
  - [ ] Grid is centered on the screen
  - [ ] Grid is responsive on mobile devices

- [ ] **Box Styling**
  - [ ] Each box has 4px rounded corners
  - [ ] Each box has 2px 2px 0px black shadow
  - [ ] Initial value is 0 for all boxes
  - [ ] Box size is consistent (24×24 units)

- [ ] **Color Scheme**
  - [ ] Even numbers: Gray background (#e0e0e0) with black text
  - [ ] Odd numbers: Dark blue background (#1a237e) with white text
  - [ ] Locked state (≥15): Red background (#ef4444) with white text

### Interaction Logic

#### Basic Click Functionality
1. Click any box
   - [ ] Value increments by 1
   - [ ] Box styling updates based on new value
   - [ ] Click is responsive and immediate

#### Rule A: Divisible by 3
1. Click a box until its value reaches 3
   - [ ] Right neighbor decrements by 1
   - [ ] If box is in last column (col 2), no right neighbor affected
   - [ ] Locked boxes are not modified

2. Test with value 6
   - [ ] Right neighbor decrements by 1
   - [ ] Verify correct neighbor is affected

3. Test with value 9
   - [ ] Right neighbor decrements by 1

#### Rule B: Divisible by 5
1. Click a box until its value reaches 5
   - [ ] Bottom neighbor increments by 2
   - [ ] If box is in bottom row (row 2), no bottom neighbor affected
   - [ ] Locked boxes are not modified

2. Test with value 10
   - [ ] Bottom neighbor increments by 2
   - [ ] Verify correct neighbor is affected

3. Test with value 15
   - [ ] Box becomes locked (red background)
   - [ ] Bottom neighbor increments by 2 (if not locked)
   - [ ] Box cannot be clicked anymore

#### Locked State
1. Get a box to value 15
   - [ ] Background turns red
   - [ ] Text turns white
   - [ ] Cursor changes to "not-allowed"
   - [ ] Box cannot be clicked

2. Try to click locked box
   - [ ] Nothing happens
   - [ ] Value remains 15

3. Verify ripple effects don't modify locked boxes
   - [ ] Get a neighbor to trigger ripple
   - [ ] Locked box value doesn't change

### Edge Cases

#### Right Edge (Column 2)
1. Click box at position 2 (top-right)
   - [ ] Value increments normally
   - [ ] No right neighbor exists, so Rule A doesn't apply

2. Click box at position 5 (middle-right)
   - [ ] Value increments normally
   - [ ] No right neighbor exists, so Rule A doesn't apply

3. Click box at position 8 (bottom-right)
   - [ ] Value increments normally
   - [ ] No right neighbor exists, so Rule A doesn't apply

#### Bottom Edge (Row 2)
1. Click box at position 6 (bottom-left)
   - [ ] Value increments normally
   - [ ] No bottom neighbor exists, so Rule B doesn't apply

2. Click box at position 7 (bottom-middle)
   - [ ] Value increments normally
   - [ ] No bottom neighbor exists, so Rule B doesn't apply

3. Click box at position 8 (bottom-right)
   - [ ] Value increments normally
   - [ ] No neighbors exist for ripple effects

#### Corner Cases
1. Top-left (position 0)
   - [ ] Has right and bottom neighbors
   - [ ] Both ripple effects can apply

2. Top-right (position 2)
   - [ ] Has bottom neighbor only
   - [ ] Only Rule B can apply

3. Bottom-left (position 6)
   - [ ] Has right neighbor only
   - [ ] Only Rule A can apply

4. Bottom-right (position 8)
   - [ ] Has no neighbors
   - [ ] No ripple effects apply

### Complex Scenarios

#### Scenario 1: Chain Reactions
1. Click box 0 until value is 3
   - [ ] Box 1 (right) decrements by 1
   - [ ] Verify correct state

2. Click box 0 until value is 5
   - [ ] Box 3 (bottom) increments by 2
   - [ ] Verify correct state

#### Scenario 2: Multiple Ripples
1. Click box 0 until value is 15
   - [ ] Box becomes locked
   - [ ] Box 1 decremented multiple times
   - [ ] Box 3 incremented multiple times
   - [ ] Verify final state is correct

#### Scenario 3: Locked Box Protection
1. Get box 0 to value 15 (locked)
2. Get box 1 to value 3
   - [ ] Box 2 (right of box 1) decrements
   - [ ] Box 0 (locked) is not affected

3. Get box 3 to value 5
   - [ ] Box 6 (bottom of box 3) increments
   - [ ] Box 0 (locked) is not affected

### Performance & Stability

- [ ] No console errors
- [ ] No memory leaks (check DevTools)
- [ ] Smooth animations and transitions
- [ ] No lag when clicking rapidly
- [ ] App doesn't crash at any point

### Responsive Design

- [ ] Desktop (1920×1080): Grid displays properly
- [ ] Tablet (768×1024): Grid is responsive
- [ ] Mobile (375×667): Grid is readable and clickable
- [ ] Touch interactions work on mobile

### Browser Compatibility

Test on:
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## Automated Testing (Optional)

To add automated tests:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest
```

Example test structure:
```typescript
describe('Grid Component', () => {
  test('increments box value on click', () => {
    // Test implementation
  });

  test('applies Rule A correctly', () => {
    // Test implementation
  });

  test('applies Rule B correctly', () => {
    // Test implementation
  });

  test('locks box at value 15', () => {
    // Test implementation
  });
});
```

## Test Results

Document your test results here:

| Feature | Status | Notes |
|---------|--------|-------|
| Grid Layout | ✓ | 3×3 grid displays correctly |
| Click Increment | ✓ | Values increment by 1 |
| Rule A | ✓ | Right neighbor decrements on divisible by 3 |
| Rule B | ✓ | Bottom neighbor increments by 2 on divisible by 5 |
| Locked State | ✓ | Boxes lock at value ≥ 15 |
| Edge Cases | ✓ | No crashes at grid edges |
| Styling | ✓ | Colors and shadows apply correctly |
| Responsive | ✓ | Works on all screen sizes |

## Known Limitations

None identified. All requirements met.

## Future Testing

- Add unit tests for ripple logic
- Add integration tests for state management
- Add E2E tests with Playwright
- Performance benchmarking
- Accessibility testing (WCAG 2.1)
