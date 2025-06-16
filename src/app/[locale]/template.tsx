'use client';

import { AnimatePresence, motion } from 'framer-motion';

import { usePathname } from 'next/navigation';

const variants = {
  hidden: { y: 20, opacity: 0 },
  enter: { y: 0, opacity: 1 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: 'easeInOut', duration: 0.75 }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
