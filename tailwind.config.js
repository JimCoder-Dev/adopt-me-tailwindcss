module.exports = {
  content: ["./src/*.{html,js}"],
  mode: "jit",
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
}
