import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FolderProps {
  size?: number;
  color?: string;
  className?: string;
  items?: string[];
  title?: string;
}

const Folder: React.FC<FolderProps> = ({
  size = 1,
  color = '#5227FF',
  className = '',
  title = 'Skills',
  items = []
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Base dimensions (at size=1)
  const width = 120;
  const height = 90;
  
  // Tab dimensions
  const tabHeight = 15;
  const tabWidth = 50;

  return (
    <div 
      className={`relative cursor-pointer transition-transform hover:scale-105 ${className}`}
      style={{ 
        width: width * size, 
        height: height * size,
      }}
      onClick={() => setIsOpen(!isOpen)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Back Plate of the Folder */}
      <div 
        className="absolute inset-0 rounded-lg transition-colors duration-300"
        style={{ 
          backgroundColor: color,
          opacity: 0.4,
          top: -tabHeight * size,
          height: (height + tabHeight) * size,
          clipPath: `polygon(0 ${tabHeight * size}px, 0 100%, 100% 100%, 100% ${tabHeight * size}px, ${tabWidth * size + 20}px ${tabHeight * size}px, ${tabWidth * size}px 0, 0 0)`
        }}
      />
      
      {/* The Files (Skills) */}
      <div className="absolute left-0 w-full flex flex-col items-center justify-end"
           style={{ 
             bottom: 10 * size, 
             height: height * 4.5 * size, 
             zIndex: 10,
             pointerEvents: 'none'
           }}
      >
        <AnimatePresence>
          {items.map((item, index) => {
            // CUSTOM LAYOUT LOGIC FOR 5 ITEMS
            // Standardized card sizes and optimized positions
            
            let targetX = 0;
            let targetY = 0;
            let targetRotate = 0;
            
            if (isOpen) {
              if (index === 0) { // Row 1 Left
                targetX = -width * 0.4 * size;
                targetY = -height * 0.9 * size;
                targetRotate = -6;
              } else if (index === 1) { // Row 1 Right
                targetX = width * 0.4 * size;
                targetY = -height * 0.9 * size;
                targetRotate = 6;
              } else if (index === 2) { // Row 2 Left
                targetX = -width * 0.85 * size;
                targetY = -height * 1.5 * size;
                targetRotate = -12;
              } else if (index === 3) { // Row 2 Center
                targetX = 0;
                targetY = -height * 1.65 * size;
                targetRotate = 0;
              } else { // Row 2 Right
                targetX = width * 0.85 * size;
                targetY = -height * 1.5 * size;
                targetRotate = 12;
              }
            } else {
                // Closed state: stacked inside
                targetY = -((index + 1) * 5 * size);
                targetRotate = (index % 2 === 0 ? 2 : -2);
                targetX = 0;
            }
            
            // Unified Card Height and Scale
            const cardHeight = 50 * size;
            const finalScale = isOpen ? 1 : 0.95 - (index * 0.02);

            return (
              <motion.div
                key={index}
                initial={false}
                animate={{ 
                  y: targetY,
                  x: targetX,
                  scale: finalScale,
                  rotate: targetRotate,
                }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
                className="absolute bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md rounded-lg flex items-center px-4"
                style={{ 
                    width: width * 1.1 * size, // Slightly wider to fit text
                    height: cardHeight,
                    bottom: 0,
                    zIndex: index < 2 ? 20 : 10, // Row 1 (0,1) in front of Row 2 (2,3,4)
                    transformOrigin: '50% 120%', 
                }}
              >
                <div className="w-2 h-2 rounded-full mr-3 shrink-0" style={{ backgroundColor: color }}></div>
                <span className="font-semibold text-slate-700 dark:text-slate-200 truncate" style={{ fontSize: 11 * size }}>
                  {item}
                </span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Front Plate of the Folder */}
      <div 
        className="absolute bottom-0 left-0 w-full rounded-lg shadow-xl z-30 flex items-center justify-center transition-colors duration-300"
        style={{ 
          backgroundColor: color,
          height: height * 0.85 * size,
          transform: 'perspective(1000px) rotateX(10deg)',
          transformOrigin: 'bottom',
        }}
      >
        <div className="text-white font-bold opacity-90 tracking-widest uppercase" style={{ fontSize: 12 * size }}>
            {title}
        </div>
        
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-lg pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Folder;
