import React from 'react';
import { LevelNode } from '../../types';

interface MapPathProps {
  nodes: LevelNode[];
}

const MapPath: React.FC<MapPathProps> = ({ nodes }) => {
  if (nodes.length === 0) return null;

  // Sort nodes by ID to ensure correct order of path
  const sortedNodes = [...nodes].sort((a, b) => a.id - b.id);

  let d = `M ${sortedNodes[0].position.x} ${sortedNodes[0].position.y}`;
  
  for (let i = 0; i < sortedNodes.length - 1; i++) {
    const p1 = sortedNodes[i].position;
    const p2 = sortedNodes[i+1].position;
    
    // Calculate a control point for a smooth S-curve
    const midX = (p1.x + p2.x) / 2;
    
    // Cubic bezier curve: C control1 control2 end
    d += ` C ${midX} ${p1.y}, ${midX} ${p2.y}, ${p2.x} ${p2.y}`;
  }

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
         {/* Shadow for better visibility/contrast against gradient */}
         <path
            d={d}
            fill="none"
            stroke="rgba(0,0,0,0.1)"
            strokeWidth="1.5"
            strokeDasharray="5 5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
         />
         {/* Main Path Line */}
         <path
            d={d}
            fill="none"
            stroke="white"
            strokeWidth="1.2"
            strokeDasharray="5 5"
            strokeLinecap="round"
            className="drop-shadow-sm opacity-90"
            vectorEffect="non-scaling-stroke"
         />
    </svg>
  );
};

export default MapPath;