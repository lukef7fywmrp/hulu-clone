module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        header: "url('http://tny.im/pfZ')",
        "cover-1": "url(http://tny.im/pg3)",
        "cover-2": "url(http://tny.im/pg4)",
        "cover-3": "url(http://tny.im/pg5)",
        "cover-4": "url(http://tny.im/pg6)",
        "live-sports": "url(http://tny.im/pgd)",
        "live-sports-small": "url(http://tny.im/pgf)",
        "network-logo": "url(http://tny.im/pge)",
        "linear-gradient":
          "linear-gradient(318.68deg,#0F495C 0%, #0D3640 49.72%, #08141F 100%)",
        "linear-gradient-2":
          "linear-gradient(156.82deg,rgba(0,0,0,0.6) 4.58%, rgba(0,0,0,0) 69.61%), linear-gradient(24.5deg, rgba(0,0,0,0.2) 4.71%, rgba(0,0,0,0) 71.49%)",
        "linear-gradient-3":
          "linear-gradient(180deg,rgba(0,0,0,0.76) 15.54%, rgba(0,0,0,0.192) 60.23%, rgba(0,0,0,8e-5) 100%)",
      }),
    },
    fontFamily: {
      Rubik: ["Rubik, sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
