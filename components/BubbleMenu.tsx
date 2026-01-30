import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface BubbleMenuItem {
  label: string;
  href: string;
  ariaLabel: string;
  rotation?: number;
  hoverStyles?: {
    bgColor: string;
    textColor: string;
  };
}

interface BubbleMenuProps {
  items: BubbleMenuItem[];
  logo?: React.ReactNode;
  menuAriaLabel?: string;
  menuBg?: string;
  menuContentColor?: string;
  useFixedPosition?: boolean;
  animationEase?: string;
  animationDuration?: number;
  staggerDelay?: number;
}

const BubbleMenu: React.FC<BubbleMenuProps> = ({
  items,
  logo,
  menuAriaLabel = 'Toggle navigation',
  menuBg = '#ffffff',
  menuContentColor = '#111111',
  useFixedPosition = false,
  animationDuration = 0.5,
  staggerDelay = 0.12,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Animation variants
  const containerVariants = {
    open: {
      transition: { staggerChildren: staggerDelay, delayChildren: 0.1 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: animationDuration,
        ease: [0.175, 0.885, 0.32, 1.275], // approximated back.out(1.5)
      },
    },
    closed: {
      opacity: 0,
      scale: 0.5,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className={`relative ${useFixedPosition ? 'fixed bottom-8 right-8 z-50' : 'relative z-50'}`}>
       <div className="flex flex-col items-end gap-3">
        {/* Toggle Button */}
        <button
            onClick={toggleMenu}
            aria-label={menuAriaLabel}
            className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-95 z-50 relative"
            style={{ backgroundColor: menuBg, color: menuContentColor }}
        >
            <AnimatePresence mode="wait">
            {isOpen ? (
                <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                </motion.div>
            ) : (
                <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                className="flex items-center justify-center w-full h-full"
                >
                 {logo || (
                    <span className="font-bold text-sm">RB</span>
                 )}
                </motion.div>
            )}
            </AnimatePresence>
        </button>

        {/* Menu Items */}
        <AnimatePresence>
            {isOpen && (
            <motion.div
                className="flex flex-col items-end gap-3 absolute top-14 right-0 w-max"
                variants={containerVariants}
                initial="closed"
                animate="open"
                exit="closed"
                style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
            >
                {items.map((item, index) => (
                <MenuItem 
                    key={index} 
                    item={item} 
                    variants={itemVariants}
                    menuBg={menuBg}
                    menuContentColor={menuContentColor}
                />
                ))}
            </motion.div>
            )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const MenuItem = ({ item, variants, menuBg, menuContentColor }: { item: BubbleMenuItem, variants: any, menuBg: string, menuContentColor: string }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <motion.a
            href={item.href}
            aria-label={item.ariaLabel}
            variants={variants}
            className="px-4 py-2 rounded-full shadow-md text-sm font-semibold whitespace-nowrap flex items-center justify-center border border-black/5 dark:border-white/10"
            style={{
                backgroundColor: isHovered && item.hoverStyles ? item.hoverStyles.bgColor : menuBg,
                color: isHovered && item.hoverStyles ? item.hoverStyles.textColor : menuContentColor,
                rotate: isHovered ? 0 : item.rotation || 0,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ 
                scale: 1.1, 
                transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
        >
            {item.label}
        </motion.a>
    );
}

export default BubbleMenu;
