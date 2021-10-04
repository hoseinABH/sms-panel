import createPalette from '@material-ui/core/styles/createPalette';
import { red, purple, orange } from '@material-ui/core/colors';
import { darken } from '@material-ui/core/styles/colorManipulator';

const palette = createPalette({
  type: 'light',
  primary: {
    main: '#192d3e',
    contrastText: '#ffff',
  },
  secondary: {
    main: '#03a9f5',
    contrastText: '#FFFFFF',
  },
  info: {
    main: '#309AF0',
    contrastText: '#fff',
  },
  divider: '#E6E9F4',
  text: {
    primary: '#233044',
    secondary: '#9198A2',
    disabled: '#D7DBEC',
  },
  grey: {
    main: '#638ca0',
    contrastText: '#FFFFFF',
  },
  purple: {
    main: purple[300],
    contrastText: '#FFFFFF',
    dark: darken(purple[300], 0.5),
  },
  orange: {
    main: orange[400],
    contrastText: '#FFFFFF',
    dark: darken(orange[400], 0.5),
  },
  error: {
    main: red[500],
    contrastText: '#fff',
  },
  warning: {
    main: '#FFC700',
    contrastText: '#fff',
  },
  success: {
    main: '#00A23C',
    contrastText: '#fff',
  },
  background: {
    default: '#F7F9FC',
    paper: '#FFFFFF',
    auth: `linear-gradient(to left, #1a2d3e 0%, ${darken('#1a2d3e', 0.5)} 100%)`,
    register: '#1CBBB4',
    forgetPass: '#9F005D',
    confirmCode: '#0999CE',
    accountInfo: '#CE5B24',
    statisticsCardInfo: '#638ca0',
  },

  sideBar: {
    background: '#233044',
    color: '#FFF',
    actions: {
      selected: '#1B2635',
    },
  },

  appBar: {
    background: '#FFF',
    color: '#233044',
  },
});

export default palette;
