import { AppStyledThemeType } from 'src/styles/styledTheme'

declare module 'styled-components' {
  interface DefaultTheme extends AppStyledThemeType {}
}
