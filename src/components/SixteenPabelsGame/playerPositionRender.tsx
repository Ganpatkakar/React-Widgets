import React from 'react';
import { Circle, Line, Group } from 'react-konva';

export function PlayerPositionRender({xAxis, yAxis, radius, player}) {
  const {color} = player;
  return (
    <Group
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
}