import React, { useEffect, useRef, useState } from 'react';
import { Actions, SnakeLadderContext, SnakeLadderDispatcher, maxGridLayers } from './snakeLadderGameContext';
import { Stage, Layer, Group, Rect, Circle, Line } from 'react-konva';

export const maxPassaSides = 6;

export default function PassaRender() {
  const [isPassaActive, setIsPassaActive] = useState(true);
  const dispatch = React.useContext(SnakeLadderDispatcher);
  const state = React.useContext(SnakeLadderContext);
  const { players, currentPlayer } = state;

  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // 1. Measure the specific div on mount and window resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };

    updateSize(); // Initial measurement
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const resetNextPlayerSettings = React.useCallback(() => {
    dispatch({
      type: Actions.NextPlayerTurn,
      payload: null
    })
    dispatch(
      {
        type: Actions.PassaAction,
        payload: null
      }
    )
    setIsPassaActive(true);
  }, []);

  const animateTillNextVal = React.useCallback((randomPassaValue, curr) => {
    if (curr >= randomPassaValue) {

      requestAnimationFrame(() => {
        const currentPlayerScore = players[currentPlayer].score;
        //console.log(currentPlayer, randomPassaValue, currentPlayerScore);
        if (state.snakesMouthScoreMap.has(currentPlayerScore)) {
          //console.log(state.snakesMouthScoreMap);
          setTimeout(() => {
            dispatch(
              {
                type: Actions.UpdateScore,
                payload: state.snakesMouthScoreMap.get(currentPlayerScore)
              }
            )
            resetNextPlayerSettings();
          }, 500);

          return;
        }

        //console.log(currentPlayer, randomPassaValue, currentPlayerScore);
        if (state.laddersMap.has(currentPlayerScore)) {
          //console.log(state.snakesMouthScoreMap);
          setTimeout(() => {
            dispatch(
              {
                type: Actions.UpdateScore,
                payload: state.laddersMap.get(currentPlayerScore)
              }
            )
            resetNextPlayerSettings()
          }, 500);
          return;
        }

        resetNextPlayerSettings();
      });

      return;
    }

    const timer = setTimeout(() => {
      requestAnimationFrame(() => {
        dispatch(
          {
            type: Actions.UpdateScore,
            payload: players[currentPlayer].score + 1
          }
        )
        clearTimeout(timer);
        animateTillNextVal(randomPassaValue, ++curr);
      })
    }, 400);
  }, [state.currentPlayer]);


  const handlePassa = React.useCallback((event: any) => {
    event.preventDefault();
    if (!isPassaActive) {
      return;
    }

    setIsPassaActive(false);
    const randomPassaValue = Math.ceil(Math.random() * maxPassaSides);
    dispatch(
      {
        type: Actions.PassaAction,
        payload: randomPassaValue
      }
    )

    if (state.players[state.currentPlayer].score + randomPassaValue <= (maxGridLayers * maxGridLayers)) {
      animateTillNextVal(randomPassaValue, 0);
    } else {
      const timer = setTimeout(() => {
        dispatch({
          type: Actions.NextPlayerTurn,
          payload: null
        })
        dispatch(
          {
            type: Actions.PassaAction,
            payload: null
          }
        )
        setIsPassaActive(true);
        clearTimeout(timer);
      }, 1000);
    }

  }, [state.currentPlayer]);

  console.log(state?.passaValue);
  if (state?.passaValue) {
    return (
      <Stage width={150} height={150}>
        <Layer>
          <Dice value={state?.passaValue ?? 1} x={10} y={10} />
        </Layer>
      </Stage>
    )
  }

  return (
    <span
      onClick={handlePassa}
    >
      <ResponsiveDiceContainer
        width={150}
        height={150}
      />
    </span>
  )
}


const Dice = ({ value, x, y, color = "#FFFFFF" }) => {
  const size = 100; // Fixed 100x100
  const dotRadius = 8;
  const p = 25;      // Padding from edges
  const m = 50;      // Middle point
  const e = 75;      // End point (size - padding)

  // Standard dice layout coordinates [x, y]
  const pips = {
    1: [[m, m]],
    2: [[p, p], [e, e]],
    3: [[p, p], [m, m], [e, e]],
    4: [[p, p], [e, p], [p, e], [e, e]],
    5: [[p, p], [e, p], [m, m], [p, e], [e, e]],
    6: [[p, p], [e, p], [p, m], [e, m], [p, e], [e, e]],
  };

  return (
    <Group x={x} y={y} shadowBlur={15} shadowOpacity={0.3} shadowOffset={{ x: 5, y: 5 }}>
      {/* 1. Main Dice Body */}
      <Rect
        width={size}
        height={size}
        fillLinearGradientStartPoint={{ x: 0, y: 0 }}
        fillLinearGradientEndPoint={{ x: size, y: size }}
        fillLinearGradientColorStops={[0, "#ffffff", 1, "#e0e0e0"]} // Subtle 3D gradient
        cornerRadius={15}
        stroke="#CCCCCC"
        strokeWidth={1}
      />

      {/* 2. Inner Bevel (Optional - adds depth) */}
      <Rect
        x={5}
        y={5}
        width={size - 10}
        height={size - 10}
        stroke="rgba(255,255,255,0.5)"
        strokeWidth={2}
        cornerRadius={12}
      />

      {/* 3. Render Dots */}
      {pips[value].map((pos, i) => (
        <Circle
          key={i}
          x={pos[0]}
          y={pos[1]}
          radius={dotRadius}
          fill="#2C3E50"
          shadowBlur={2}
          shadowOpacity={0.5}
        />
      ))}
    </Group>
  );
};

export const ResponsiveDiceContainer = ({ width, height, values = { top: 1, left: 3, right: 2 } }) => {
  // 1. Calculate responsive size (35% of the smallest container dimension)
  const size = Math.min(width, height) * 0.35;

  // 2. Determine center coordinates
  const centerX = width / 2;
  const centerY = height / 2 + (size * 0.2); // Slight offset down to account for 3D height

  return (
    <Stage width={width} height={height}>
      <Layer>
        <BeautifulDice
          x={centerX}
          y={centerY}
          size={size}
          topVal={values.top}
          leftVal={values.left}
          rightVal={values.right}
        />
      </Layer>
    </Stage>
  );
};

const BeautifulDice = ({ x, y, topVal = 1, leftVal = 3, rightVal = 2, size = 120 }) => {
  const w = size * 0.866;
  const h = size * 0.5;
  
  const pipsMap = {
    1: [[0, 0]],
    2: [[-0.45, -0.45], [0.45, 0.45]],
    3: [[-0.45, 0.45], [0, 0], [0.45, -0.45]], // Perspective-aligned diagonal
    4: [[-0.45, -0.45], [0.45, -0.45], [-0.45, 0.45], [0.45, 0.45]],
    5: [[-0.45, -0.45], [0.45, -0.45], [0, 0], [-0.45, 0.45], [0.45, 0.45]],
    6: [[-0.45, -0.45], [0.45, -0.45], [-0.45, 0], [0.45, 0], [-0.45, 0.45], [0.45, 0.45]],
  };

  const drawPips = (val, ox, oy, sx, sy, face) => {
    return (pipsMap[val] || []).map(([px, py], i) => {
      let finalX = ox + px * sx;
      let finalY = oy + py * sy;

      if (face === 'left') finalY += px * h * 0.8;
      if (face === 'right') finalY -= px * h * 0.8;

      return (
        <Group key={`${face}-${i}`}>
          {/* Inset Shadow for Pip Hole */}
          <Circle
            x={finalX} y={finalY + 1}
            radius={size * 0.075}
            fill="rgba(0,0,0,0.2)"
          />
          {/* The Pip Dot */}
          <Circle
            x={finalX} y={finalY}
            radius={size * 0.07}
            fillRadialGradientStartRadius={0}
            fillRadialGradientEndRadius={size * 0.07}
            fillRadialGradientColorStops={[0, "#34495e", 1, "#1a252f"]}
          />
        </Group>
      );
    });
  };

  return (
    <Group x={x} y={y}>
      {/* 1. LAYERED AMBIENT SHADOW (Soft Grounding) */}
      <Circle radius={size * 1.3} fillRadialGradientColorStops={[0, 'rgba(0,0,0,0.2)', 1, 'rgba(0,0,0,0)']} scaleY={0.4} y={h * 1.2} />

      {/* 2. TOP FACE (Subtle Warm White) */}
      <Line
        points={[0, 0, w, -h, 0, -2 * h, -w, -h]}
        fillLinearGradientStartPoint={{ x: -w, y: -2 * h }}
        fillLinearGradientEndPoint={{ x: w, y: 0 }}
        fillLinearGradientColorStops={[0, "#ffffff", 0.5, "#fdfdfd", 1, "#f1f1f1"]}
        stroke="#dcdcdc"
        strokeWidth={1}
        closed tension={0.08}
      />
      <Group y={-h}>
        {(pipsMap[topVal] || []).map(([px, py], i) => (
          <Circle key={`top-${i}`} x={(px - py) * w * 0.5} y={(px + py) * h * 0.5} radius={size * 0.07} fill="#2c3e50" />
        ))}
      </Group>

      {/* 3. LEFT FACE (Reflective Side) */}
      <Line
        points={[0, 0, -w, -h, -w, h, 0, 2 * h]}
        fillLinearGradientStartPoint={{ x: -w, y: -h }}
        fillLinearGradientEndPoint={{ x: 0, y: 2 * h }}
        fillLinearGradientColorStops={[0, "#f9f9f9", 0.4, "#e0e0e0", 1, "#d1d1d1"]}
        stroke="#cfcfcf"
        closed tension={0.08}
      />
      {drawPips(leftVal, -w / 2, h / 2, w * 0.5, size * 0.7, 'left')}

      {/* 4. RIGHT FACE (Deep Occlusion Side) */}
      <Line
        points={[0, 0, w, -h, w, h, 0, 2 * h]}
        fillLinearGradientStartPoint={{ x: 0, y: 0 }}
        fillLinearGradientEndPoint={{ x: w, y: h }}
        fillLinearGradientColorStops={[0, "#e5e5e5", 0.6, "#cccccc", 1, "#b3b3b3"]}
        stroke="#b0b0b0"
        closed tension={0.08}
      />
      {drawPips(rightVal, w / 2, h / 2, w * 0.5, size * 0.7, 'right')}

      {/* 5. SPECULAR HIGHLIGHTS (The "Sharp" Edges) */}
      <Line points={[-w, -h, 0, 0, w, -h]} stroke="white" strokeWidth={2} opacity={0.6} tension={0.08} />
      <Line points={[0, 0, 0, 2 * h]} stroke="white" strokeWidth={1.5} opacity={0.4} />
      
      {/* 6. CORNER LIGHT GLINT */}
      <Circle x={0} y={0} radius={size * 0.03} fill="white" opacity={0.5} shadowBlur={10} shadowColor="white" />
    </Group>
  );
};
