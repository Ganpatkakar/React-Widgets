import React from 'react';
import { SnakeLadderContext } from './snakeLadderGameContext';
import { Arc, Circle, Layer, Line, Stage, Group } from 'react-konva';

export function PlayerPositionRender() {
  const state = React.useContext(SnakeLadderContext);
  
  return (
    <>
      {state.players.map((player, index) => {
        const { name, score, color } = player;
        let [cellX, cellY, rectWidth] = state.scoreWithGrid[score];
        
        // 1. DYNAMIC SCALING
        // Shrink the pawn as more players occupy the same square
        const playerCount = state.players.filter(p => p.score === score).length;
        const playerIndexInCell = state.players.filter(p => p.score === score).findIndex(p => p.name === name);
        
        const scaleFactor = playerCount > 1 ? 0.7 : 1; 
        const radius = (rectWidth / 5) * scaleFactor;
        
        // 2. CREATIVE POSITIONING (Circular Offset)
        // If multiple players, arrange them in a small circle around the center
        const centerX = cellX + rectWidth / 2;
        const centerY = cellY + rectWidth / 2;
        const offsetDist = playerCount > 1 ? rectWidth / 4 : 0;
        const angle = (playerIndexInCell * (360 / playerCount)) * (Math.PI / 180);
        
        const xAxis = centerX + offsetDist * Math.cos(angle);
        const yAxis = centerY + offsetDist * Math.sin(angle);

        return (
          <Group
            key={name} 
            draggable 
            shadowColor="black" 
            shadowBlur={8} 
            shadowOpacity={0.4} 
            shadowOffset={{ x: 2, y: 3 }}
          >
            {/* Elegant Tapered Body using a Path for "Curves" */}
            <Line
              points={[
                xAxis - radius, yAxis + radius,   // Bottom Left
                xAxis + radius, yAxis + radius,   // Bottom Right
                xAxis + radius/4, yAxis - radius, // Top Right (Neck)
                xAxis - radius/4, yAxis - radius, // Top Left (Neck)
              ]}
              fillLinearGradientStartPoint={{ x: -radius, y: 0 }}
              fillLinearGradientEndPoint={{ x: radius, y: 0 }}
              fillLinearGradientColorStops={[0, color, 1, color]} // Glossy gradient
              opacity={1}
              closed={true}
              tension={0.4} // Rounds the corners slightly
            />

            {/* The Head with a "Rim" effect */}
            <Circle
              x={xAxis}
              y={yAxis - radius * 1.2}
              radius={radius * 0.7}
              fill={color}
              stroke="white"
              strokeWidth={1.5}
            />

            {/* "Eye" or Shine for extra character */}
            <Circle
              x={xAxis - radius/4}
              y={yAxis - radius * 1.4}
              radius={radius * 0.15}
              fill="white"
              opacity={0.6}
            />
          </Group>
        );
      })}
    </>
  );
}

