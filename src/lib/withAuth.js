// lib
import { getAuthCookie } from './Storage';

// components
import Redirect from 'components/Redirect';

/**
 * @function withAuth
 * @summary auth hoc, use this with every page you want to protect. will redirect to auth page if user does not exists
 * @param {ComponentType<T>} Component
 */
function withAuth(Component) {
  return function WrappedWithAuth(props) {
    const auth = getAuthCookie();

    return !!auth?.accessToken ? <Component {...props} /> : <Redirect to="/login" />;
  };
}

export default withAuth;
