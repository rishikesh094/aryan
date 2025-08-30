"use client";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export const useScrollAnimation = (threshold = 0.1, triggerOnce = false) => {
  const ref = useRef(null);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isInView = useInView(ref, { 
    threshold, 
    once: triggerOnce,
    margin: "-50px 0px -50px 0px" // Start animation 50px before element comes into view
  });

  return { ref, isInView, scrollDirection };
};

// Animation variants for different effects
export const scrollAnimations = {
  // Fade in from bottom
  fadeInUp: {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  },

  // Fade in from top (for scroll up)
  fadeInDown: {
    hidden: { 
      opacity: 0, 
      y: -60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  },

  // Fade in from left
  fadeInLeft: {
    hidden: { 
      opacity: 0, 
      x: -60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  },

  // Fade in from right
  fadeInRight: {
    hidden: { 
      opacity: 0, 
      x: 60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  },

  // Scale in
  scaleIn: {
    hidden: { 
      opacity: 0, 
      scale: 0.5
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  },

  // Bounce in
  bounceIn: {
    hidden: { 
      opacity: 0, 
      scale: 0.3,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  },

  // Rotate in
  rotateIn: {
    hidden: { 
      opacity: 0, 
      rotate: -180,
      scale: 0.5
    },
    visible: { 
      opacity: 1, 
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  },

  // Parallax effect
  parallax: {
    hidden: { 
      opacity: 0, 
      y: 100
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }
};
