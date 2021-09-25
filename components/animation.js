export const animationContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2,
        when: 'beforeChildren'
      }
    }
};
  
export const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3
      }
    }
};
  
export const fadeInRight = {
    hidden: {
      opacity: 0,
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      }
    }
};
  
export const fadeInLeft = {
    hidden: {
        x: 20,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
    transition: {
            delay: 0.2,
            duration: 0.3,
            ease: 'easeInOut',
        },
    },
};

export const fadeUpDelay = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

//Animation Hover for Menu List

export const textMotion = {
  hover: {
    rotate: [0, 10, -10, 10, -10, 10, -10, 0],
    transition: { duration: 0.7 }
    
  }
};

// export const cardHover = {
//   initial = {
//     backgrou
//   }
// }