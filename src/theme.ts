import { Theme } from '@emotion/react';
import { createTheme } from '@mui/material';
import { useState, useMemo } from 'react';

type colorsMode = 'light' | 'dark';

export const appPalette = (mode: colorsMode) => ({
  ...(mode === 'dark'
    ? {
        primary: {
          100: '#f4d5d9',
          200: '#e9abb3',
          300: '#dd808d',
          400: '#d25667',
          500: '#c72c41',
          600: '#9f2334',
          700: '#771a27',
          800: '#50121a',
          900: '#28090d',
        },
        secondary: {
          100: '#fff',
          200: '#a3a3a3',
          300: '#757575',
          400: '#474747',
          500: '#191919',
          600: '#141414',
        },
        primaryAccent: {
          100: '#fcdad9',
          200: '#f8b5b3',
          300: '#f58f8c',
          400: '#f16a66',
          500: '#ee4540',
          600: '#be3733',
          700: '#8f2926',
          800: '#5f1c1a',
          900: '#300e0d',
        },
        grey: {
          100: '#e0e0e0',
          200: '#c2c2c2',
          300: '#a3a3a3',
          400: '#858585',
          500: '#666666',
          600: '#525252',
          700: '#3d3d3d',
          800: '#292929',
          900: '#141414',
        },
      }
    : {
        primary: {
          100: '#28090d',
          200: '#50121a',
          300: '#771a27',
          400: '#9f2334',
          500: '#c72c41',
          600: '#d25667',
          700: '#dd808d',
          800: '#e9abb3',
          900: '#f4d5d9',
        },
        secondary: {
          100: '#141414',
          200: '#191919',
          300: '#474747',
          400: '#757575',
          500: '#fff',
          600: '#a3a3a3',
        },
        primaryAccent: {
          100: '#300e0d',
          200: '#5f1c1a',
          300: '#8f2926',
          400: '#be3733',
          500: '#ee4540',
          600: '#f16a66',
          700: '#f58f8c',
          800: '#f8b5b3',
          900: '#fcdad9',
        },
        grey: {
          100: '#141414',
          200: '#292929',
          300: '#3d3d3d',
          400: '#525252',
          500: '#666666',
          600: '#858585',
          700: '#a3a3a3',
          800: '#c2c2c2',
          900: '#e0e0e0',
        },
      }),

  warning: {
    100: '#fee5ce',
    200: '#fdcb9d',
    300: '#fcb16b',
    400: '#fb973a',
    500: '#fa7d09',
    600: '#c86407',
    700: '#964b05',
    800: '#643204',
    900: '#321902',
  },
  success: {
    100: '#f2fee9',
    200: '#e5fdd3',
    300: '#d8fbbe',
    400: '#cbfaa8',
    500: '#bef992',
    600: '#98c775',
    700: '#729558',
    800: '#4c643a',
    900: '#26321d',
  },
});

// mui theme settings
export const themeSettings = (mode: colorsMode) => {
  const colors = appPalette(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            primary: {
              main: colors.primary[500],
              light: colors.primary[400],
              dark: colors.primary[700],
              contrastText: colors.secondary[600],
            },
            secondary: {
              main: colors.secondary[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.secondary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[500],
              light: colors.primary[600],
              dark: colors.primary[300],
              contrastText: colors.grey[900],
            },
            secondary: {
              main: colors.secondary[600],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.secondary[500],
            },
          }),
    },
    typography: {
      fontSize: 12,
      h1: {
        fontSize: 40,
      },
      h2: {
        fontSize: 32,
      },
      h3: {
        fontSize: 24,
      },
      h4: {
        fontSize: 20,
      },
      h5: {
        fontSize: 16,
      },
      h6: {
        fontSize: 14,
      },
    },
    spacing: 8,
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
