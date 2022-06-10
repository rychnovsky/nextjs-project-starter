import { colors, fontFamily } from '..'

const theme = {
  colors,
  fontFamily,
  general: {
    bodyBackground: colors.primary,
    textColor: colors.secondary,
  },
  container: {
    maxWidth: 1080,
  },
}

export type AppStyledThemeType = typeof theme

export { theme }
