//1. REPLACE WITH YOUR TOKENS LOCATION (NPM, MONOREPO, etc..)
import colors from "../tokens/colors";
import typography from "../tokens/typography";
import { lightShadows } from '../tokens/shadows';
import shape from '../tokens/shape';

//2. REPLACE CURRENT MUI THEME FOR THIS
export const baseOptions = {
  direction: 'ltr',
  components: {
    MuiAvatar: {
      styleOverrides: {
        fallback: {
          height: '75%',
          width: '75%',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransforms: 'none',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          height: '100%',
          width: '100%',
        },
        body: {
          height: '100%',
        },
        '#root': {
          height: '100%',
        },
        '#nprogress .bar': {
          zIndex: '2000 !important',
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: 'h6',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          overflow: 'hidden',
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          marginRight: '16px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
  typography: {
    button: {
      fontWeight: 600,
    },
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    h1: typography.h1,
    h2: typography.h2,
    h3: typography.h3,
    h4: typography.h4,
    h5: typography.h5,
    h6: typography.h6,
    overline: overline,
    subtitle1: subtitle1,
    subtitle2: subtitle2,
    body1: body1,
    body2: body2,
    button: button,
    caption: caption
  },
};

export const themesOptions = {
  ['LIGHT']: {
    components: {
      MuiInputBase: {
        styleOverrides: {
          input: {
            '&::placeholder': {
              opacity: 0.86,
              color: '#42526e',
            },
          },
        },
      },
    },
    palette: {
      action: {
        active: '#6b778c',
      },
      background: {
        default: '#f4f5f7',
        paper: '#ffffff',
      },
      mode: 'light',
      primary: {
        contrastText: colors.white,
        main: colors.blueDefault,
      },
      secondary: {
        contrastText: colors.white,
        main: colors.purpleDefault,
      },
      info: {
        contrastText: colors.white,
        main: colors.blueDefault,
      },
      error: {
        contrastText: colors.white,
        main: colors.redDefault,
      },
      success: {
        contrastText: colors.white,
        main: colors.greenDefault,
      },
      warning: {
        contrastText: colors.grayDark,
        main: colors.orangeDefault,
      },
      text: {
        primary: '#172b4d',
        secondary: '#6b778c',
      },
    },
    shadows: lightShadows,
    shape: {
      borderRadius: shape.borderRadius,
    },
  }
};

export default themesOptions;
