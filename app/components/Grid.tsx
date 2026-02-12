'use client';

import { useState, useCallback } from 'react';

interface GridState {
  values: number[];
}

export default function Grid() {
  const [grid, setGrid] = useState<GridState>({
    values: Array(9).fill(0),
  });

  /**
   * Applies ripple effects based on divisibility rules
   * Rule A: If divisible by 3, decrement right neighbor by 1
   * Rule B: If divisible by 5, increment bottom neighbor by 2
   */
  const applyRippleEffects = useCallback(
    (newValues: number[], changedIndex: number) => {
      const row = Math.floor(changedIndex / 3);
      const col = changedIndex % 3;
      const value = newValues[changedIndex];

      // Rule A: Divisible by 3 - decrement right neighbor
      if (value % 3 === 0 && col < 2) {
        const rightIndex = changedIndex + 1;
        // Don't modify if locked (value >= 15)
        if (newValues[rightIndex] < 15) {
          newValues[rightIndex] -= 1;
        }
      }

      // Rule B: Divisible by 5 - increment bottom neighbor
      if (value % 5 === 0 && row < 2) {
        const bottomIndex = changedIndex + 3;
        // Don't modify if locked (value >= 15)
        if (newValues[bottomIndex] < 15) {
          newValues[bottomIndex] += 2;
        }
      }

      return newValues;
    },
    []
  );

  const handleBoxClick = useCallback((index: number) => {
    setGrid((prevGrid) => {
      const newValues = [...prevGrid.values];

      // Don't increment if already locked
      if (newValues[index] >= 15) {
        return prevGrid;
      }

      // Increment the clicked box
      newValues[index] += 1;

      // Apply ripple effects
      applyRippleEffects(newValues, index);

      return { values: newValues };
    });
  }, [applyRippleEffects]);

  const getBoxStyles = (value: number) => {
    // Locked state: value >= 15
    if (value >= 15) {
      return {
        backgroundColor: '#ef4444', // red
        textColor: 'white',
        isLocked: true,
      };
    }

    // Even number
    if (value % 2 === 0) {
      return {
        backgroundColor: '#e0e0e0',
        textColor: 'black',
        isLocked: false,
      };
    }

    // Odd number
    return {
      backgroundColor: '#1a237e',
      textColor: 'white',
      isLocked: false,
    };
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-3 gap-6">
        {grid.values.map((value, index) => {
          const styles = getBoxStyles(value);

          return (
            <button
              key={index}
              onClick={() => handleBoxClick(index)}
              disabled={styles.isLocked}
              className={`
                w-24 h-24 rounded-[4px] font-bold text-2xl
                transition-all duration-200 ease-out
                ${styles.isLocked ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-105'}
                ${!styles.isLocked ? 'active:scale-95' : ''}
              `}
              style={{
                backgroundColor: styles.backgroundColor,
                color: styles.textColor,
                boxShadow: '2px 2px 0px black',
              }}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}
