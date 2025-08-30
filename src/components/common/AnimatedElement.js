"use client";
import { motion } from "framer-motion";
import { useScrollAnimation, scrollAnimations } from "@/hooks/useScrollAnimation";

const AnimatedElement = ({
  children,
  animation = "fadeInUp",
  threshold = 0.1,
  triggerOnce = false,
  delay = 0,
  duration = 0.6,
  className = "",
  as = "div",
  ...props
}) => {
  const { ref, isInView, scrollDirection } = useScrollAnimation(threshold, triggerOnce);
  
  // Get animation variant based on scroll direction
  const getAnimationVariant = () => {
    if (scrollAnimations[animation]) {
      return scrollAnimations[animation];
    }
    
    // Auto-select animation based on scroll direction
    let autoAnimation = animation;
    if (scrollDirection === 'up' && animation === 'fadeInUp') {
      autoAnimation = 'fadeInDown';
    } else if (scrollDirection === 'down' && animation === 'fadeInDown') {
      autoAnimation = 'fadeInUp';
    }
    
    // Custom animation if not found in predefined ones
    return {
      hidden: { 
        opacity: 0, 
        y: scrollDirection === 'up' ? -30 : 30,
        scale: 0.98
      },
      visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: {
          duration,
          delay,
          ease: "easeOut"
        }
      }
    };
  };

  const Component = motion[as];
  const variant = getAnimationVariant();

  return (
    <Component
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variant}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

export default AnimatedElement;
