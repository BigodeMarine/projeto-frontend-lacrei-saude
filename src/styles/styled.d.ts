import 'styled-components';

import { theme } from './theme';

declare module 'styled-components' {
  interface DefaultTheme {
    colors: typeof theme.colors;
  }
}