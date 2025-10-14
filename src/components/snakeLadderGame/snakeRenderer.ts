// --- Helper Functions for Drawing ---

/**
 * Draws the head shape, eyes, and the split tongue, using an elliptical shape 
 * for a more realistic, tapered snout.
 */
function drawMouthAndEyes(ctx, head, neck, BASE_WIDTH, HEAD_SIZE_MULTIPLIER, BASE_SHADOW_COLOR, HIGHLIGHT_COLOR) {
    
    // --- Head Dimensions ---
    const headAngle = Math.atan2(head.y - neck.y, head.x - neck.x);
    const headRadius = (BASE_WIDTH / 2) * HEAD_SIZE_MULTIPLIER;
    
    // Snout Dimensions for the Ellipse
    const headWidth = headRadius * 1.5;  // Length along the body axis (longer)
    const headHeight = headRadius * 1.0; // Width across the head (slightly narrower than before)

    // --- Dynamic Features ---
    const EYE_RADIUS = BASE_WIDTH / 8;
    const tongueColor = 'rgb(200, 50, 50)';
    const TONGUE_LENGTH = BASE_WIDTH / 5;
    const TONGUE_FORK_WIDTH = BASE_WIDTH / 5;
    const TONGUE_FORK_LENGTH_ADD = 5;

    // --- 1. Draw Head Base (Tapered Ellipse) ---
    
    ctx.save();
    ctx.translate(head.x, head.y);
    ctx.rotate(headAngle); // Align the ellipse with the snake's direction

    // Draw the main, elongated head shape
    ctx.fillStyle = BASE_SHADOW_COLOR;
    ctx.beginPath();
    // ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)
    // We move the center back slightly (headWidth * 0.1) so the front edge starts near 'head'
    ctx.ellipse(headWidth * 0.1, 0, headWidth, headHeight, 0, 0, Math.PI * 2);
    ctx.fill();

    // --- 2. Head Highlight ---
    // Apply highlight near the top/back of the head
    const headHighlightRadius = headHeight * 0.7;
    ctx.fillStyle = HIGHLIGHT_COLOR;
    ctx.beginPath();
    ctx.arc(-headWidth * 0.2, -headHeight * 0.1, headHighlightRadius, 0, Math.PI * 2);
    ctx.fill();

    // --- 3. Eyes ---
    // Eye positions are relative to the rotated head
    const eyeBaseOffset = headHeight * 0.5; // Place eyes halfway up the side
    const eyeForwardOffset = headWidth * 0.2; // Place eyes slightly forward on the snout
    ctx.fillStyle = 'black';
    
    // Right Eye
    ctx.beginPath();
    ctx.arc(eyeForwardOffset, eyeBaseOffset, EYE_RADIUS, 0, Math.PI * 2);
    ctx.fill();
    
    // Left Eye
    ctx.beginPath();
    ctx.arc(eyeForwardOffset, -eyeBaseOffset, EYE_RADIUS, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.restore(); // Restore context to remove rotation/translation

    // --- 4. Split Tongue ---

    // Calculate tongue base relative to the new snout shape
    const tongueBaseX = head.x + Math.cos(headAngle) * headWidth * 0.8; 
    const tongueBaseY = head.y + Math.sin(headAngle) * headWidth * 0.8;
    
    ctx.save();
    ctx.translate(tongueBaseX, tongueBaseY);
    ctx.rotate(headAngle);
    ctx.fillStyle = tongueColor;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(TONGUE_LENGTH, -TONGUE_FORK_WIDTH / 2);
    ctx.lineTo(TONGUE_LENGTH + TONGUE_FORK_LENGTH_ADD, -TONGUE_FORK_WIDTH);
    ctx.lineTo(TONGUE_LENGTH + TONGUE_FORK_LENGTH_ADD, TONGUE_FORK_WIDTH);
    ctx.lineTo(TONGUE_LENGTH, TONGUE_FORK_WIDTH / 2);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}

/**
 * Draws the main body contour (Pass 1) and applies the highlight shading (Pass 2).
 */
function drawBodyPath(ctx, centralPathPoints, halfBodyPoints, otherHalfBodyPoints, widths, BASE_SHADOW_COLOR, HIGHLIGHT_COLOR) {
    const totalLength = centralPathPoints.length;
    const tailTipIndex = totalLength - 1;
    const LIGHT_OFFSET_FACTOR = 0.6; 

    // PASS 1: Draw the solid base shape (SHADOW) with SMOOTH EDGES
    ctx.beginPath();
    
    // Top Contour
    ctx.moveTo(halfBodyPoints[0].x, halfBodyPoints[0].y);
    for (let i = 1; i < totalLength - 2; i++) {
        const p2 = halfBodyPoints[i + 1];
        const midX = (halfBodyPoints[i].x + p2.x) / 2;
        const midY = (halfBodyPoints[i].y + p2.y) / 2;
        ctx.quadraticCurveTo(halfBodyPoints[i].x, halfBodyPoints[i].y, midX, midY);
    }
    
    // Smooth transition to the tail tip (will be finalized by drawTailTip)
    ctx.quadraticCurveTo(halfBodyPoints[tailTipIndex-1].x, halfBodyPoints[tailTipIndex-1].y, halfBodyPoints[tailTipIndex].x, halfBodyPoints[tailTipIndex].y);
    
    // Tail Tip closure (Placeholder, finalized by drawTailTip)
    ctx.quadraticCurveTo(centralPathPoints[tailTipIndex-1].x, centralPathPoints[tailTipIndex-1].y, otherHalfBodyPoints[tailTipIndex].x, otherHalfBodyPoints[tailTipIndex].y);
    
    // Bottom Contour
    for (let i = totalLength - 2; i > 1; i--) {
        const p2 = otherHalfBodyPoints[i - 1];
        const midX = (otherHalfBodyPoints[i].x + p2.x) / 2;
        const midY = (otherHalfBodyPoints[i].y + p2.y) / 2;
        ctx.quadraticCurveTo(otherHalfBodyPoints[i].x, otherHalfBodyPoints[i].y, midX, midY);
    }
    ctx.quadraticCurveTo(otherHalfBodyPoints[1].x, otherHalfBodyPoints[1].y, otherHalfBodyPoints[0].x, otherHalfBodyPoints[0].y);
    
    ctx.closePath();
    ctx.fillStyle = BASE_SHADOW_COLOR; 
    ctx.fill();

    // PASS 2: Apply Highlight Layer for 3D Shading
    ctx.lineCap = 'round';
    ctx.globalAlpha = 0.8;
    
    for (let i = 0; i < totalLength - 1; i++) {
        const p_start = centralPathPoints[i];
        const p_end = centralPathPoints[i + 1];
        const angle = Math.atan2(p_end.y - p_start.y, p_end.x - p_start.x);
        
        const offsetAngle = angle + Math.PI / 2;
        const lightOffset = widths[i] / 2 * LIGHT_OFFSET_FACTOR;

        const p_start_light = {
            x: p_start.x + Math.cos(offsetAngle) * lightOffset,
            y: p_start.y + Math.sin(offsetAngle) * lightOffset
        };
        const p_end_light = {
            x: p_end.x + Math.cos(offsetAngle) * lightOffset,
            y: p_end.y + Math.sin(offsetAngle) * lightOffset
        };
        
        ctx.strokeStyle = HIGHLIGHT_COLOR;
        ctx.lineWidth = widths[i] * 0.4;

        ctx.beginPath();
        ctx.moveTo(p_start_light.x, p_start_light.y);
        ctx.lineTo(p_end_light.x, p_end_light.y);
        ctx.stroke();
    }
    ctx.globalAlpha = 1.0; 
}

/**
 * Redraws the very end of the tail to ensure a sharp, pointed tip.
 */
function drawTailTip(ctx, centralPathPoints, halfBodyPoints, otherHalfBodyPoints, BASE_SHADOW_COLOR) {
    const totalLength = centralPathPoints.length;
    const tailTipIndex = totalLength - 1;

    // Redraw a small, sharp triangle at the very end using the shadow color for definition
    ctx.fillStyle = BASE_SHADOW_COLOR;
    ctx.beginPath();
    
    const topTailEnd = halfBodyPoints[tailTipIndex];
    const bottomTailEnd = otherHalfBodyPoints[tailTipIndex];
    const tailControlPoint = centralPathPoints[tailTipIndex - 1]; 
    
    // Draw the small, perfectly sharp V-shape at the end
    ctx.moveTo(topTailEnd.x, topTailEnd.y);
    ctx.quadraticCurveTo(
        tailControlPoint.x, tailControlPoint.y, 
        bottomTailEnd.x, bottomTailEnd.y         
    );
    ctx.fill();
}

// ==============================================================================
// MAIN DRAWING FUNCTION (Refactored)
// ==============================================================================

// ... (The helper functions drawMouthAndEyes, drawBodyPath, and drawTailTip remain the same, 
//      but they rely on the updated constants and data generated below.)

// ==============================================================================
// MAIN DRAWING FUNCTION (Refined)
// ==============================================================================

/**
 * Renders a realistic snake with a body spanning 3/4 length and a minimal tail width 
 * of 1/4 the base width, ensuring maximum smoothness.
 */
export function drawSnake(ctx, controlPoints, color = '#4CAF50', BASE_WIDTH) {
    if (controlPoints.length < 2) return;

    // Goal 2: Minimum tail width is 1/4 of the base width.
    const MIN_TAIL_WIDTH = BASE_WIDTH / 40;
    // Goal 1: Taper starts at 3/4 mark (already implemented)
    const TAPER_PROPORTION = 0.25; 
    
    const HEAD_SIZE_MULTIPLIER = 1.6;
    const NUM_SEGMENTS_PER_CURVE = 1;

    // --- Color Processing ---
    const baseR = parseInt(color.substring(1, 3), 16), baseG = parseInt(color.substring(3, 5), 16), baseB = parseInt(color.substring(5, 7), 16);
    const BASE_SHADOW_COLOR = `rgb(${Math.max(0, baseR - 30)}, ${Math.max(0, baseG - 30)}, ${Math.max(0, baseB - 30)})`;
    const HIGHLIGHT_COLOR = `rgb(${Math.min(255, baseR + 50)}, ${Math.min(255, baseG + 50)}, ${Math.min(255, baseB + 50)})`;
    const EYE_RADIUS = 3;

    // --- PREPARATION: Generate Path Points and Widths ---
    
    // 1. Generate Smooth Central Path (Quadratic Bézier interpolation)
    const centralPathPoints = [];
    centralPathPoints.push(controlPoints[0]);
    for (let i = 0; i < controlPoints.length - 1; i++) {
        const p1 = controlPoints[i], p3 = controlPoints[i + 1];
        let cx = (p1.x + p3.x) / 2, cy = (p1.y + p3.y) / 2;
        const p4 = controlPoints[i + 2];
        if (p4) { cx = (cx + p3.x) / 2; cy = (cy + p3.y) / 2; }
        const controlPoint = { x: cx, y: cy };
        for (let j = 1; j <= NUM_SEGMENTS_PER_CURVE; j++) {
            const t = j / NUM_SEGMENTS_PER_CURVE;
            const x = (1 - t) ** 2 * p1.x + 2 * (1 - t) * t * controlPoint.x + t ** 2 * p3.x;
            const y = (1 - t) ** 2 * p1.y + 2 * (1 - t) * t * controlPoint.y + t ** 2 * p3.y;
            if (j === NUM_SEGMENTS_PER_CURVE || i === controlPoints.length - 2) {
                centralPathPoints.push({ x: x, y: y });
            }
        }
    }
    
    // 2. Calculate Offset Points (Contour) and Widths (Tapering)
    const halfBodyPoints = [];
    const otherHalfBodyPoints = [];
    const widths = [];
    const totalLength = centralPathPoints.length;
    const taperStartIndex = Math.floor(totalLength * (1 - TAPER_PROPORTION)); 

    for (let i = 0; i < totalLength; i++) {
        const currentPoint = centralPathPoints[i];
        let angleIn = (i > 0) ? Math.atan2(currentPoint.y - centralPathPoints[i-1].y, currentPoint.x - centralPathPoints[i-1].x) : Math.atan2(centralPathPoints[1].y - currentPoint.y, centralPathPoints[1].x - currentPoint.x);
        let angleOut = (i < totalLength - 1) ? Math.atan2(centralPathPoints[i+1].y - currentPoint.y, centralPathPoints[i+1].x - currentPoint.x) : angleIn;
        const angle = (angleIn + angleOut) / 2; 

        let currentWidth = BASE_WIDTH;
        if (i >= taperStartIndex) {
            const taperProgress = (i - taperStartIndex) / (totalLength - 1 - taperStartIndex);
            
            // Goal 3: Ensure a smooth taper from BASE_WIDTH to MIN_TAIL_WIDTH
            currentWidth = BASE_WIDTH - (BASE_WIDTH - MIN_TAIL_WIDTH) * taperProgress;
            currentWidth = Math.max(MIN_TAIL_WIDTH, currentWidth); 
        }
        widths.push(currentWidth);

        const halfWidth = currentWidth / 2;
        const offsetAngle = angle + Math.PI / 2;
        const offsetX = Math.cos(offsetAngle) * halfWidth;
        const offsetY = Math.sin(offsetAngle) * halfWidth;

        halfBodyPoints.push({ x: currentPoint.x + offsetX, y: currentPoint.y + offsetY });
        otherHalfBodyPoints.push({ x: currentPoint.x - offsetX, y: currentPoint.y - offsetY });
    }
    
    // --- DRAWING: Calling Segmented Functions ---

    // BODY (Contour and Shading)
    drawBodyPath(ctx, centralPathPoints, halfBodyPoints, otherHalfBodyPoints, widths, BASE_SHADOW_COLOR, HIGHLIGHT_COLOR);

    // TAIL (Sharp Tip Refinement)
    drawTailTip(ctx, centralPathPoints, halfBodyPoints, otherHalfBodyPoints, BASE_SHADOW_COLOR);

    // MOUTH (Head, Eyes, and Split Tongue)
    const head = controlPoints[0];
    const neck = controlPoints[1];
    drawMouthAndEyes(ctx, head, neck, BASE_WIDTH, HEAD_SIZE_MULTIPLIER, BASE_SHADOW_COLOR, HIGHLIGHT_COLOR);
}

// ==============================================================================
// PATH GENERATION FUNCTION (To be run before drawSnake)
// ==============================================================================

/**
 * Generates an array of control points for a snake path by defining a sequence of segments, 
 * each with independent length and amplitude characteristics.
 */
export function generateSegmentedSnakePath(startX, startY, endX, endY, segments) {
    const finalControlPoints = [];
    const p0 = { x: startX, y: startY };
    const pEnd = { x: endX, y: endY };
    
    const totalDeltaX = pEnd.x - p0.x;
    const totalDeltaY = pEnd.y - p0.y;
    const angle = Math.atan2(totalDeltaY, totalDeltaX);
    const perpendicularAngle = angle + Math.PI / 2;

    const totalRatio = segments.reduce((sum, seg) => sum + seg.lengthRatio, 0);
    if (Math.abs(totalRatio - 1.0) > 0.001) {
        console.error("Segment lengthRatios must sum up to 1.0.");
        return [p0, pEnd];
    }

    let currentX = startX;
    let currentY = startY;
    
    finalControlPoints.push(p0);

    for (let s = 0; s < segments.length; s++) {
        const segment = segments[s];
        
        const targetX = startX + totalDeltaX * (segments.slice(0, s + 1).reduce((sum, seg) => sum + seg.lengthRatio, 0));
        const targetY = startY + totalDeltaY * (segments.slice(0, s + 1).reduce((sum, seg) => sum + seg.lengthRatio, 0));
        
        const segDeltaX = targetX - currentX;
        const segDeltaY = targetY - currentY;
        const segDistance = Math.sqrt(segDeltaX * segDeltaX + segDeltaY * segDeltaY);

        const baseOffset = segDistance * 0.4 * segment.amplitude; 
        const offsetDirection = (s % 2 === 0) ? 1 : -1; 

        for (let i = 1; i <= segment.points; i++) {
            const t = i / segment.points;
            
            const pointX = currentX + segDeltaX * t;
            const pointY = currentY + segDeltaY * t;

            const waveFactor = Math.sin(t * Math.PI); 

            const offset = baseOffset * offsetDirection * waveFactor;
            
            const offsetX = Math.cos(perpendicularAngle) * offset;
            const offsetY = Math.sin(perpendicularAngle) * offset;
            
            finalControlPoints.push({
                x: pointX + offsetX,
                y: pointY + offsetY
            });
        }
        
        currentX = targetX;
        currentY = targetY;
    }
    
    finalControlPoints[finalControlPoints.length - 1] = pEnd;
    
    return finalControlPoints;
}

// ==============================================================================
// EXAMPLE USAGE
// ==============================================================================

// document.addEventListener('DOMContentLoaded', () => {
//     const canvas = document.getElementById('snakeCanvas');
//     const ctx = canvas.getContext('2d');

//     // --- 1. Define Coordinates ---
//     const startX = 100;
//     const startY = 300;
//     const endX = 750;
//     const endY = 400;

//     // --- 2. Calculate Total Length (Hypotenuse) ---
//     const lengthX = endX - startX;
//     const lengthY = endY - startY;
//     const straightLineDistance = Math.sqrt(lengthX * lengthX + lengthY * lengthY);

//     // --- 3. Determine Dynamic BASE_WIDTH ---
//     // Scale factor: Use a coefficient to relate distance to body thickness.
//     // E.g., for every 100 units of distance, make the base width 5 units.
//     const lengthCoefficient = 0.03; 
//     let dynamicBaseWidth = straightLineDistance * lengthCoefficient;

//     // --- Define the snake's complexity and shape ---
//     const segmentsDefinition = [
//         { amplitude: 0.8, lengthRatio: 0.20, points: 20 },  // Tight coil near head
//         { amplitude: 0.8, lengthRatio: 0.15, points: 20 },  // Medium S-bend
//         { amplitude: 0.8, lengthRatio: 0.35, points: 30 },   // Long, gentle tail
//         { amplitude: 0.8, lengthRatio: 0.15, points: 30 },
//         { amplitude: 0.5, lengthRatio: 0.15, points: 20 }   // Long, gentle tail
//     ];
    
//     // Generate the path coordinates
//     const customSnakePath = generateSegmentedSnakePath(
//         startX, startY, 
//         endX, endY, 
//         segmentsDefinition
//     );
    
//     // Draw the final snake
//     drawSnake(ctx, customSnakePath, '#558B2F', dynamicBaseWidth); 
// });
