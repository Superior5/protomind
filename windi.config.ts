module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}'
  ],
  shortcuts: {
    mnBg: 'bg-cover bg-center bg-no-repeat',
    inputF: 'bg-transparent placeholder-base-1 border-b border-base-1/30 outline-none p-10px font-mons',
    h2T: 'sm:text-5xl text-28px font-bold',
    'btn-1': 'bg-base-7 px-10px rounded-[6px] text-base-1 font-bold uppercase cursor-pointer',
    'bg-1': 'bg-rarly-4 rounded-[10px] p-15px'
  },
  theme: {
    extend: {
      fontFamily: {
        tech: ['Share Tech Mono', 'monospace'],
        russo: ['Russo One', 'sans-serif'],
        pres: ['"Press Start 2P"', 'cursive'],
        mons: ['Montserrat', 'cursive'],
      },
    },
    container: {
      center: true,
      padding: '15px'
    },
    backgroundImage: {
    },
    screens: {
      xs: '100%',
      sm: '576px',
      md: '768px',
      lg: '1020px',
      xl: '1360px'
    },
    colors: {
      transparent: 'transparent',
      // colors
      base: {
        0: '#282828',
        1: '#ffffff',
        2: '#000000',
        3: '#53f6c6',
        4: '#EEF2F5',
        5: '#878787',
        6: '#d90000',
        7: '#7130A3',
        8: '#F5F5F5'
      },

      rarly: {
        0: '#9DADB9',
        1: '#10CD45',
        2: '#11101d',
        3: '#1d1b31',
        4: '#F5F5F5',
        5: '#CABFE733'
      }
    },
    borderRadius: {
    },
    boxShadow: {
    },
    spacing: {
    },
    backgroundImage: {
      // 0: 'url(@/assets/imgs/main-bg.jpg)',
      // 1: 'linear-gradient(45deg, rgba(0, 0, 0, 60%) 100%, transparent), url(@/assets/imgs/header-bg.jpg)',
    }
  },
  plugins: []
}