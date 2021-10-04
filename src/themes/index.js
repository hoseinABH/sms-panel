import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles';

import { faIR } from '@material-ui/core/locale';

import palette from './palette';
import typography from './typography';
import shadows from './shadows';
import spacing from './spacing';
import shape from './shape';
import overrides from './overrides';

const theme = createMuiTheme(
  {
    direction: 'rtl',
    shape,
    overrides,
    spacing,
    palette,
    shadows,
    typography,
    props: {
      MuiTextField: {
        InputLabelProps: {
          shrink: true,
        },
      },
      MuiAutocomplete: {
        disablePortal: true,
      },
    },
  },
  faIR
);

export default theme;
