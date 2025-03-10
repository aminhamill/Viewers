module.exports = {
  // Note: in Tailwind 3.0, JIT will purge unused styles by default
  // but in development, it is often useful to disable this to see
  // and try out all the styles that are available.
  // ...(process.env.NODE_ENV === 'development' && {
  //   safelist: [{ pattern: /.*/ }],
  // }),
  content: ['./src/**/*.{jsx,js,ts,tsx,css,mdx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      inter: ['Yekan','Inter', 'sans-serif'],
    },
    colors: {
      overlay: 'rgba(0, 0, 0, 0.8)',
      transparent: 'transparent',
      black: '#424242', // Gray 800 (was #000)
      white: '#FAFAFA', // Gray 50 (was #fff)
      initial: 'initial',
      inherit: 'inherit',

      aqua: {
        pale: '#BDBDBD', // Gray 400 (was #7bb2ce)
      },

      primary: {
        light: '#EEEEEE',  // Gray 200 (was #5acce6)
        main: '#9E9E9E',   // Gray 500 (was #0944b3)
        dark: '#616161',   // Gray 700 (was #090c29)
        active: '#BDBDBD', // Gray 400 (was #348cfd)
      },
      inputfield: {
        main: '#757575',   // Gray 600 (was #3a3f99)
        disabled: '#616161', // Gray 700 (was #2b166b)
        focus: '#E0E0E0',  // Gray 300 (was #5acce6)
        placeholder: '#9E9E9E', // Gray 500 (was #39383f)
      },

      secondary: {
        light: '#EEEEEE',  // Gray 200 (was #3a3f99)
        main: '#757575',   // Gray 600 (was #2b166b)
        dark: '#616161',   // Gray 700 (was #041c4a)
        active: '#424242', // Gray 800 (was #1f1f27)
      },

      indigo: {
        dark: '#212121',   // Gray 900 (was #0b1a42)
      },

      common: {
        bright: '#F5F5F5', // Gray 100 (was #e1e1e1)
        light: '#BDBDBD',  // Gray 400 (was #a19fad)
        main: '#FAFAFA',   // Gray 50 (was #fff)
        dark: '#757575',   // Gray 600 (was #726f7e)
        active: '#616161', // Gray 700 (was #2c3074)
      },
      bkg: {
        low: '#212121',    // Gray 900 (was #050615)
        med: '#424242',    // Gray 800 (was #090C29)
        full: '#616161',   // Gray 700 (was #041C4A)
      },
      info: {
        primary: '#FAFAFA', // Gray 50 (was #FFFFFF)
        secondary: '#BDBDBD', // Gray 400 (was #7BB2CE)
      },
      actions: {
        primary: '#9E9E9E',   // Gray 500 (was #348CFD)
        highlight: '#E0E0E0', // Gray 300 (was #5ACCE6)
        hover: 'rgba(158, 158, 158, 0.2)', // Gray 500 opacity (was rgba(52, 140, 253, 0.2))
      },
      customgreen: {
        100: '#E0E0E0',    // Gray 300 (was #05D97C)
        200: '#BDBDBD',    // Gray 400 (was #0FD97C)
      },

      customblue: {
        10: '#212121',     // Gray 900 (was #0A163F)
        20: '#424242',     // Gray 800 (was #0B1F54)
        30: '#616161',     // Gray 700 (was #09286e)
        40: '#757575',     // Gray 600 (was #0E307F)
        50: '#9E9E9E',     // Gray 500 (was #0F3A94)
        80: '#BDBDBD',     // Gray 400 (was #1454D4)
        100: '#F5F5F5',    // Gray 100 (was #c4fdff)
        200: '#EEEEEE',    // Gray 200 (was #38daff)
        300: '#757575',    // Gray 600 (was #1D204D)
        400: '#E0E0E0',    // Gray 300 (was #90A0C1)
      },

      customgray: {
        100: '#616161',    // Gray 700 (was #262943)
      },

      gray: {
        50: '#FAFAFA',     // (replacing #f7fafc)
        100: '#F5F5F5',    // (replacing #edf2f7)
        200: '#EEEEEE',    // (replacing #e2e8f0)
        300: '#E0E0E0',    // (replacing #cbd5e0)
        400: '#BDBDBD',    // (replacing #a0aec0)
        500: '#9E9E9E',    // (replacing #718096)
        600: '#757575',    // (replacing #4a5568)
        700: '#616161',    // (replacing #2d3748)
        800: '#424242',    // (replacing #1a202c)
        900: '#212121',    // (new addition)
      },
      red: {
        100: '#F5F5F5',    // Gray 100 (was #fff5f5)
        200: '#EEEEEE',    // Gray 200 (was #fed7d7)
        300: '#E0E0E0',    // Gray 300 (was #feb2b2)
        400: '#BDBDBD',    // Gray 400 (was #fc8181)
        500: '#9E9E9E',    // Gray 500 (was #f56565)
        600: '#757575',    // Gray 600 (was #e53e3e)
        700: '#616161',    // Gray 700 (was #c53030)
        800: '#424242',    // Gray 800 (was #9b2c2c)
        900: '#212121',    // Gray 900 (was #742a2a)
      },
      orange: {
        100: '#F5F5F5',    // Gray 100 (was #fffaf0)
        200: '#EEEEEE',    // Gray 200 (was #feebc8)
        300: '#E0E0E0',    // Gray 300 (was #fbd38d)
        400: '#BDBDBD',    // Gray 400 (was #f6ad55)
        500: '#9E9E9E',    // Gray 500 (was #ed8936)
        600: '#757575',    // Gray 600 (was #dd6b20)
        700: '#616161',    // Gray 700 (was #c05621)
        800: '#424242',    // Gray 800 (was #9c4221)
        900: '#212121',    // Gray 900 (was #7b341e)
      },
      yellow: {
        100: '#F5F5F5',    // Gray 100 (was #fffff0)
        200: '#EEEEEE',    // Gray 200 (was #fefcbf)
        300: '#E0E0E0',    // Gray 300 (was #faf089)
        400: '#BDBDBD',    // Gray 400 (was #f6e05e)
        500: '#9E9E9E',    // Gray 500 (was #ecc94b)
        600: '#757575',    // Gray 600 (was #d69e2e)
        700: '#616161',    // Gray 700 (was #b7791f)
        800: '#424242',    // Gray 800 (was #975a16)
        900: '#212121',    // Gray 900 (was #744210)
      },
      green: {
        100: '#F5F5F5',    // Gray 100 (was #f0fff4)
        200: '#EEEEEE',    // Gray 200 (was #c6f6d5)
        300: '#E0E0E0',    // Gray 300 (was #9ae6b4)
        400: '#BDBDBD',    // Gray 400 (was #68d391)
        500: '#9E9E9E',    // Gray 500 (was #48bb78)
        600: '#757575',    // Gray 600 (was #38a169)
        700: '#616161',    // Gray 700 (was #2f855a)
        800: '#424242',    // Gray 800 (was #276749)
        900: '#212121',    // Gray 900 (was #22543d)
      },
      teal: {
        100: '#F5F5F5',    // Gray 100 (was #e6fffa)
        200: '#EEEEEE',    // Gray 200 (was #b2f5ea)
        300: '#E0E0E0',    // Gray 300 (was #81e6d9)
        400: '#BDBDBD',    // Gray 400 (was #4fd1c5)
        500: '#9E9E9E',    // Gray 500 (was #38b2ac)
        600: '#757575',    // Gray 600 (was #319795)
        700: '#616161',    // Gray 700 (was #2c7a7b)
        800: '#424242',    // Gray 800 (was #285e61)
        900: '#212121',    // Gray 900 (was #234e52)
      },
      blue: {
        100: '#F5F5F5',    // Gray 100 (was #ebf8ff)
        200: '#EEEEEE',    // Gray 200 (was #bee3f8)
        300: '#E0E0E0',    // Gray 300 (was #90cdf4)
        400: '#BDBDBD',    // Gray 400 (was #63b3ed)
        500: '#9E9E9E',    // Gray 500 (was #4299e1)
        600: '#757575',    // Gray 600 (was #3182ce)
        700: '#616161',    // Gray 700 (was #2b6cb0)
        800: '#424242',    // Gray 800 (was #2c5282)
        900: '#212121',    // Gray 900 (was #2a4365)
      },
      indigo: {
        100: '#F5F5F5',    // Gray 100 (was #ebf4ff)
        200: '#EEEEEE',    // Gray 200 (was #c3dafe)
        300: '#E0E0E0',    // Gray 300 (was #a3bffa)
        400: '#BDBDBD',    // Gray 400 (was #7f9cf5)
        500: '#9E9E9E',    // Gray 500 (was #667eea)
        600: '#757575',    // Gray 600 (was #5a67d8)
        700: '#616161',    // Gray 700 (was #4c51bf)
        800: '#424242',    // Gray 800 (was #434190)
        900: '#212121',    // Gray 900 (was #3c366b)
        dark: '#212121',   // Gray 900 (was #0b1a42)
      },
      purple: {
        100: '#F5F5F5',    // Gray 100 (was #faf5ff)
        200: '#EEEEEE',    // Gray 200 (was #e9d8fd)
        300: '#E0E0E0',    // Gray 300 (was #d6bcfa)
        400: '#BDBDBD',    // Gray 400 (was #b794f4)
        500: '#9E9E9E',    // Gray 500 (was #9f7aea)
        600: '#757575',    // Gray 600 (was #805ad5)
        700: '#616161',    // Gray 700 (was #6b46c1)
        800: '#424242',    // Gray 800 (was #553c9a)
        900: '#212121',    // Gray 900 (was #44337a)
      },
      pink: {
        100: '#F5F5F5',    // Gray 100 (was #fff5f7)
        200: '#EEEEEE',    // Gray 200 (was #fed7e2)
        300: '#E0E0E0',    // Gray 300 (was #fbb6ce)
        400: '#BDBDBD',    // Gray 400 (was #f687b3)
        500: '#9E9E9E',    // Gray 500 (was #ed64a6)
        600: '#757575',    // Gray 600 (was #d53f8c)
        700: '#616161',    // Gray 700 (was #b83280)
        800: '#424242',    // Gray 800 (was #97266d)
        900: '#212121',    // Gray 900 (was #702459)
      },
    },
    backgroundColor: theme => theme('colors'),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
    }),
    boxShadow: {
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
    },
    container: {},
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
    },
    fill: {
      current: 'currentColor',
    },
    fontSize: {
      xxs: '0.6875rem', // 11px
      xs: '0.75rem', // 12px
      sm: '0.8125rem', // 13px
      base: '0.875rem', // 14px
      lg: '1rem', // 16px
      xl: '1.125rem', // 18px
      '2xl': '1.25rem', // 20px
      '3xl': '1.375rem', // 22px
      '4xl': '1.5rem', // 24px
      '5xl': '1.875rem', // 30px
    },
    flex: {
      1: '1 1 0%',
      0.3: '0.3 0.3 0%',
      0.5: '0.5 0.5 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
      static: '0 0 auto',
    },
    flexGrow: {
      0: '0',
      DEFAULT: '1',
    },
    flexShrink: {
      0: '0',
      DEFAULT: '1',
    },
    fontWeight: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '300',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),
    inset: theme => ({
      ...theme('spacing'),
      0: '0',
      auto: 'auto',
      full: '100%',
      viewport: '0.5rem',
      '1/2': '50%',
      'viewport-scrollbar': '1.3rem',
    }),
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    maxHeight: theme => ({
      full: '100%',
      screen: '100vh',
      ...theme('spacing'),
    }),
    maxWidth: (theme, { breakpoints }) => ({
      none: 'none',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      full: '100%',
      ...breakpoints(theme('screens')),
      ...theme('spacing'),
    }),
    minHeight: theme => ({
      ...theme('spacing'),
      0: '0',
      full: '100%',
      screen: '100vh',
    }),
    minWidth: theme => ({
      ...theme('spacing'),
      0: '0',
      xs: '2rem',
      sm: '4rem',
      md: '6rem',
      lg: '8rem',
      xl: '10rem',
      full: '100%',
    }),
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    opacity: {
      0: '0',
      5: '.5',
      10: '.10',
      15: '.15',
      20: '.20',
      25: '.25',
      30: '.30',
      35: '.35',
      40: '.40',
      45: '.45',
      50: '.50',
      55: '.55',
      60: '.60',
      65: '.65',
      70: '.70',
      75: '.75',
      80: '.80',
      85: '.85',
      90: '.90',
      95: '.95',
      100: '1',
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
    },
    padding: theme => theme('spacing'),
    placeholderColor: theme => theme('colors'),
    stroke: theme => ({
      ...theme('colors'),
      current: 'currentColor',
    }),
    strokeWidth: {
      0: '0',
      1: '1',
      2: '2',
    },
    textColor: theme => theme('colors'),
    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      '1/24': '4.166666667%',
      '2/24': '8.333333333%',
      '3/24': '12.5%',
      '4/24': '16.66666667%',
      '5/24': '20.83333333%',
      '6/24': '25%',
      '7/24': '29.16666667%',
      '8/24': '33.33333333%',
      '9/24': '37.5%',
      '10/24': '41.66666667%',
      '11/24': '45.83333333%',
      '12/24': '50%',
      '13/24': '54.16666667%',
      '14/24': '58.33333333%',
      '15/24': '62.5%',
      '16/24': '66.66666667%',
      '17/24': '70.83333333%',
      '18/24': '75%',
      '19/24': '79.16666667%',
      '20/24': '83.33333333%',
      '21/24': '87.5%',
      '22/24': '91.66666667%',
      '23/24': '95.83333333%',
      full: '100%',
      screen: '100vw',
      'max-content': 'max-content',
    }),
    zIndex: {
      auto: 'auto',
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
    },
    gap: theme => theme('spacing'),
    gridTemplateColumns: {
      none: 'none',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
      7: 'repeat(7, minmax(0, 1fr))',
      8: 'repeat(8, minmax(0, 1fr))',
      9: 'repeat(9, minmax(0, 1fr))',
      10: 'repeat(10, minmax(0, 1fr))',
      11: 'repeat(11, minmax(0, 1fr))',
      12: 'repeat(12, minmax(0, 1fr))',
    },
    gridColumn: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-7': 'span 7 / span 7',
      'span-8': 'span 8 / span 8',
      'span-9': 'span 9 / span 9',
      'span-10': 'span 10 / span 10',
      'span-11': 'span 11 / span 11',
      'span-12': 'span 12 / span 12',
    },
    gridColumnStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
    },
    gridColumnEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
    },
    gridTemplateRows: {
      none: 'none',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
    },
    gridRow: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
    },
    gridRowStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
    },
    gridRowEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
    },
    transformOrigin: {
      center: 'center',
      top: 'top',
      'top-right': 'top right',
      right: 'right',
      'bottom-right': 'bottom right',
      bottom: 'bottom',
      'bottom-left': 'bottom left',
      left: 'left',
      'top-left': 'top left',
    },
    scale: {
      0: '0',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
    },
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      0: '0',
      45: '45deg',
      90: '90deg',
      180: '180deg',
    },
    translate: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
      '-full': '-100%',
      '-1/2': '-50%',
      '1/2': '50%',
      full: '100%',
    }),
    skew: {
      '-12': '-12deg',
      '-6': '-6deg',
      '-3': '-3deg',
      0: '0',
      3: '3deg',
      6: '6deg',
      12: '12deg',
    },
    transitionProperty: {
      none: 'none',
      all: 'all',
      height: 'height',
      DEFAULT:
        'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      colors: 'background-color, border-color, color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform',
    },
    transitionTimingFunction: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    transitionDuration: {
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
    },
  },
  variants: {
    accessibility: ['responsive', 'focus'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-focus', 'group-hover'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus', 'active', 'group-focus', 'group-hover'],
    borderRadius: ['responsive', 'focus', 'first', 'last'],
    borderStyle: ['responsive', 'focus'],
    borderWidth: ['responsive', 'focus', 'first', 'last'],
    boxShadow: ['responsive', 'hover', 'focus'],
    boxSizing: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    clear: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'hover', 'focus', 'active'],
    order: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    padding: ['responsive', 'first'],
    placeholderColor: ['responsive', 'focus'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    stroke: ['responsive'],
    strokeWidth: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive'],
    gap: ['responsive'],
    gridAutoFlow: ['responsive'],
    gridTemplateColumns: ['responsive'],
    gridColumn: ['responsive'],
    gridColumnStart: ['responsive'],
    gridColumnEnd: ['responsive'],
    gridTemplateRows: ['responsive'],
    gridRow: ['responsive'],
    gridRowStart: ['responsive'],
    gridRowEnd: ['responsive'],
    transform: ['responsive'],
    transformOrigin: ['responsive'],
    scale: ['responsive', 'hover', 'focus'],
    rotate: ['responsive', 'hover', 'focus'],
    translate: ['responsive', 'hover', 'focus'],
    skew: ['responsive', 'hover', 'focus'],
    transitionProperty: ['responsive'],
    transitionTimingFunction: ['responsive'],
    transitionDuration: ['responsive'],
  },
  // Removed the extra extend block you added since it’s redundant here
  corePlugins: {},
  plugins: [],
};
