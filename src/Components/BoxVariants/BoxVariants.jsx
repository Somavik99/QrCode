export const boxVariants = {
  qrBoxVariant: {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 75,
        delay: 0.4,
      },
    },
  },

  FormBoxVariant: {
    FormHidden: {
      x: "100vw",
    },
    FormVisible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 75,
        delay: 0.2,
      },
    },
  },
};
