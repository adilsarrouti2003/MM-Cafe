import { motion } from 'motion/react';
import { Coffee } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] bg-[#FAF9F6] flex flex-col items-center justify-center text-[#1C1C1C]"
    >
      <div className="relative flex flex-col items-center gap-6">
        
        {/* Animated Custom Coffee Bean Container */}
        <motion.div 
          animate={{ 
            scale: [1, 1.12, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative w-20 h-20 rounded-full border-2 border-dashed border-[#B89020] flex items-center justify-center shadow-[0_0_30px_rgba(184,144,32,0.15)] bg-white animate-spin-slow"
        >
          <Coffee className="w-10 h-10 text-[#B89020]" strokeWidth={1.5} />
        </motion.div>

        {/* Brand Text */}
        <div className="text-center space-y-2">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-serif text-3xl sm:text-4xl tracking-widest text-[#1C1C1C] font-semibold"
          >
            M&M LUXURY
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xs sm:text-sm tracking-[0.25em] text-[#B89020] uppercase font-mono font-medium"
          >
            Benslimane
          </motion.p>
        </div>

        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#B89020]/2 rounded-full blur-3xl -z-10" />
      </div>
    </motion.div>
  );
}
