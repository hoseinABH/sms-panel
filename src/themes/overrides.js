import palette from './palette';
import { lighten, fade } from '@material-ui/core/styles';

import shape from './shape';

const overrides = {
  MuiCssBaseline: {
    '@global': {
      a: {
        textDecoration: 'none',
        color: palette.text.primary,
      },
      code: {
        color: palette.secondary.main,
      },
      '::-webkit-scrollbar': {
        width: '8px',
        height: '8px',
      },
      '::-webkit-scrollbar-track': {
        background: palette.background.paper,
      },
      '::-webkit-scrollbar-thumb': {
        background: fade(palette.primary.main, 0.1),
        borderRadius: shape.borderRadius,
      },
      '::-webkit-scrollbar-thumb:hover': {
        background: fade(palette.primary.main, 0.5),
      },
      '::-webkit-scrollbar-corner': {
        background: lighten(palette.background.paper, 0.2),
      },
    },
  },
  MuiTextField: {
    root: {
      '& .MuiOutlinedInput-root': {
        '& fieldset': {},
      },
    },
  },
};

export default overrides;
