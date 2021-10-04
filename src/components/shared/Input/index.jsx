import { makeStyles } from '@material-ui/core/styles';

import { useState, useEffect } from 'react';

import clsx from 'clsx';

// components
import TextField from '@material-ui/core/TextField';
import { toFarsiNumber } from 'utils';

const useStyles = makeStyles((theme) => ({}));

/**
 * @component Input
 */
function Input({ className, value, defaultValue, onChange = () => {}, readOnly, ...rest }) {
  const classes = useStyles();

  const [_value, setValue] = useState(defaultValue);

  const onTextFieldChange = (event) => {
    const innerValue = toFarsiNumber(event.target.value ?? '');

    setValue(innerValue);
    onChange(innerValue);
  };

  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <TextField
      InputProps={{
        readOnly,
      }}
      value={_value}
      onChange={onTextFieldChange}
      className={clsx(classes.input, className)}
      variant="outlined"
      {...rest}
    />
  );
}

export default Input;
