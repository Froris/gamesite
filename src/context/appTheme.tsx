// HOC for mui theme
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { createContext } from 'react';
import { useMode } from '../theme';

// context for the color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const AppThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
