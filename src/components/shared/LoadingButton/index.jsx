import { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

// components
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

// utils
import { textToMaterialColor } from 'utils';

const useStyles = makeStyles((theme) => ({
  root: ({ color, variant }) => {
    if (isColorValid(color)) return {};

    const customColor = textToMaterialColor(theme.palette, color);
    const custormColorParent = textToMaterialColor(theme.palette, color, true);

    return {
      background: variant === 'contained' ? customColor : 'transparent',
      border: variant === 'outlined' ? `1px solid ${customColor}` : 'none',
      color: variant === 'contained' ? custormColorParent?.contrastText : customColor,
      '&:hover': {
        background: variant === 'contained' && custormColorParent?.dark,
      },
    };
  },
  medium: {
    padding: '.3rem 3rem',
  },
}));

const isColorValid = (color) => {
  return (
    color === 'primary' || color === 'secondary' || color === 'default' || color === 'inherit'
  );
};

/**
 * @component LoadingButton
 */
function LoadingButton({
  loading,
  variant,
  disabled,
  children,
  color,
  className,
  size = 'medium',
  ...rest
}) {
  const classes = useStyles({ color, variant });

  const buttonColor = useMemo(() => (isColorValid(color) ? color : 'inherit'), [color]);
  const rootClasses = clsx(classes.root, size === 'medium' && classes.medium, className);

  return (
    <Button
      color={buttonColor}
      disabled={disabled || loading}
      variant={variant}
      className={rootClasses}
      {...rest}
    >
      {loading ? <CircularProgress size={24} /> : children}
    </Button>
  );
}

export default LoadingButton;
