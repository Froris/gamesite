import { Theme } from '@emotion/react';
import { createTheme } from '@mui/material';
import { useState, useMemo } from 'react';

type colorsMode = 'light' | 'dark';

export const appPalette = (mode: colorsMode = 'dark') => ({
  ...(mode === 'dark'
    ? {
        main: {
          white: '#fff',
          orange: '#F2994A',
          dark: '#0E1621',
          titleGradient:
            'linear-gradient(180deg, rgba(255,139,37,1) 0%, rgba(255,93,49,1) 50%)',
          iconsGradient2:
            'linear-gradient(0deg, rgba(252,197,71,1) 0%, rgba(225,53,41,1) 50%)',
          sliderBtnGradient:
            'linear-gradient(180deg, rgba(255,139,37,1) 0%,rgba(225,53,41,1) 60%)',
          errorPageBg: '#EDC5C6',
        },
        secondary: {
          blue: '#5865F2',
          orange: '#FFB47E',
          darkOrange: '#FF7E0D',
          gray: '#D1CBD0',
          breadсrumbsGray: '#616063',
          rolesGray: '#8d8d8e',
          darkGray: '#3A383C',
        },
      }
    : {}),
});

// mui theme settings
// for possible "light mode"
export const themeSettings = (mode: colorsMode = 'dark') => {
  const colors = appPalette(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            primary: {
              main: colors.main!.orange,
              dark: colors.secondary?.darkOrange,
              contrastText: colors.main!.white,
            },
            secondary: {
              main: colors.secondary!.gray,
              contrastText: colors.main!.dark,
            },
            text: {
              primary: colors.main?.white,
              secondary: colors.secondary!.gray,
              disabled: colors.secondary!.gray,
            },
            background: {
              default: colors.main!.dark,
            },
            shape: {
              borderRadius: 24,
            },
          }
        : {}),
    },
    typography: {
      htmlFontSize: 16,
      fontSize: 16,
      fontFamily: "'Montserrat', sans-serif",
      h1: {
        fontSize: 60,
        letterSpacing: '-4px',
        fontWeight: '700',
        background: colors.main!.titleGradient,
        backgroundClip: 'text',
        textFillColor: 'transparent',
      },
      h2: {
        fontSize: 40,
        fontWeight: '700',
        background: colors.main!.titleGradient,
        backgroundClip: 'text',
        textFillColor: 'transparent',
      },
      subtitle1: {
        fontWeight: 500,
        fontSize: '2.4rem',
        lineHeight: 1.3,
      },
      subtitle2: {
        fontWeight: 500,
        fontSize: '2.2rem',
      },
      body1: {
        fontWeight: 500,
        fontSize: '1.8rem',
        lineHeight: 1.3,
      },
      body2: {
        fontWeight: 500,
        fontSize: '1.6rem',
        lineHeight: 1.3,
      },
    },
    spacing: 8,
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            height: '100px',
            backgroundColor: 'transparent',
            backgroundImage: 'none',
            boxShadow: 'none',
          },
        },
      },
      MuiBox: {
        styleOverrides: {
          root: {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  };
};

// hook for switching light mode
export const useMode = () => {
  const [mode, setMode] = useState<colorsMode>('dark');

  // light mode swithcer: colorMode.toggleColorMode()
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    []
  );

  // mui theme setup depending on light mode value
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode] as [Theme, { toggleColorMode: () => void }];
};
