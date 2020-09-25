module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./public/**/*.html'],
  theme: {
    extend: {},
  },
  variants: {
    translate: ['responsive', 'hover', 'focus', 'motion-safe'],
  },
  plugins: [],
}
