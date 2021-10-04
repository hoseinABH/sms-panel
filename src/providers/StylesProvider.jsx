import { StylesProvider as Provider, jssPreset } from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';

// configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

/**
 * @provider StylesProvider
 * @summary support for both rtl and ltr
 */
function StylesProvider({ children }) {
  return <Provider jss={jss}>{children}</Provider>;
}

export { StylesProvider };
