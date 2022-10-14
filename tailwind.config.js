/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ["'Barlow Semi Condensed'", "san-serif"],
        'cursive': ["'Uncial Antiqua'", "cursive"],
        'story': ["'Jim Nightshade'", "cursive"],
        'story-i':["'Henny Penny'", "cursive"]
      },
      fontSize: {
        'display-1': ['122px', '161px'],
        'display-2': ['97px', '128px'],
        'display-3': ['78px', '103px'],
        'display-4': ['62px', '82px'],
        'display-5': ['50px', '66px'],
        'display-6': ['40px', '53px'],
        'display-7': ['32px', '42px'],
        'heading': ['128px', '174px'],
        'heading-1': ['54px', '89%'],
        'heading-2': ['43px', '48px'],
        'heading-3': ['35px', '48px'],
        'heading-4': ['28px', '34px'],
        'heading-5': ['22px', '25px'],
        'heading-6': ['18px', '24px'],
        'base-big': ['36px', '43px'],
        'base': ['20px', '26px'],
        'caption': ['16px', '19px'],
        'base-semi-bold': ['20px', '24px']
      },
      colors: {
        'primary': '#050606',
        'secondary': '#F0F9F1',
        'accent': '#00A86B',
        'accent-2': '#87CEEB',
        'neutral-1': '#FCFCFC',
        'neutral-2': '#F4F4F4',
        'neutral-3': '#EFEFEF',
        'neutral-4': '#6F767E',
        'neutral-5': '#33383F',
        'neutral-6': '#272B30',
        'neutral-7': '#050606',
        'neutral-8': '#000000',
      },
      backgroundColor: {
        'primary': '#050606',
        'secondary': '#F0F9F1',
        'accent': '#00A86B',
        'accent-2': '#87CEEB',
        'neutral-1': '#FCFCFC',
        'neutral-2': '#F4F4F4',
        'neutral-3': '#EFEFEF',
        'neutral-4': '#6F767E',
        'neutral-5': '#33383F',
        'neutral-6': '#272B30',
        'neutral-7': '#050606',
        'neutral-8': '#000000',
      },
    },
    screens: {
      'tablet': '640px',

      'laptop': '1024px',

      'desktop': '1280px',

      "breakpoint-i": "1200px",
    }
  },
  plugins: [],
}
