// @TODO Needs imporvement

import { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

/**
 * @function Redirect
 * @summary on did mount will redirect to given location
 * @param {string} to
 */
function Redirect({ to }) {
  const router = useHistory();
  useEffect(() => {
    router.push(to);
  });
  return <></>;
}

export default Redirect;
