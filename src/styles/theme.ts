import { colors } from './colors';

export const theme = {
  colors: {
    ...colors,

    background: {
      default: colors.gray[10],
      subtle: colors.gray[20],
      disabled: colors.gray[30],

      success: colors.emerald[10],
      successHover: colors.emerald[20],
      successPressed: colors.emerald[30],

      accent: colors.emerald[60],
      accentHover: colors.emerald[70],
      accentPressed: colors.emerald[80],

      errorSubtle: colors.red[20],
      errorSubtleHover: colors.red[30],
      errorSubtlePressed: colors.red[40],

      error: colors.red[60],
      errorHover: colors.red[70],
      errorPressed: colors.red[80],

      warning: colors.orange[10],
      info: colors.blue[10],
    },

    text: {
      invert: colors.gray[10],
      heading: colors.gray[80],
      body: colors.gray[70],

      accent: colors.emerald[60],
      hover: colors.emerald[70],
      pressed: colors.emerald[80],

      disabledSubtle: colors.gray[40],
      disabled: colors.gray[60],

      error: colors.red[60],
      warning: colors.orange[90],
      success: colors.green[70],
      info: colors.blue[60],
    },

    border: {
      focusOffset: colors.gray[10],

      subtle: colors.gray[70],
      default: colors.gray[80],
      disabled: colors.gray[30],

      hover: colors.emerald[50],
      pressed: colors.emerald[80],
      accent: colors.emerald[60],

      success: colors.green[70],
      divider: colors.emerald[20],

      focusInfo: colors.blue[60],
      warning: colors.orange[90],

      error: colors.red[60],
      errorHover: colors.red[70],
      errorPressed: colors.red[80],
    },

    icon: {
      invert: colors.gray[10],
      default: colors.gray[80],

      accent: colors.emerald[60],
      hover: colors.emerald[70],
      pressed: colors.emerald[80],

      disabledSubtle: colors.gray[40],
      disabled: colors.gray[60],

      success: colors.green[70],
      error: colors.red[60],
      info: colors.blue[60],
      warning: colors.orange[90],
    },
  },
} as const;