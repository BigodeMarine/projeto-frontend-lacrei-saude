import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import { theme } from '@/styles/theme';

export function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}