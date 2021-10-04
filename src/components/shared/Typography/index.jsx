import { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

// components
import MuiTypography from '@material-ui/core/Typography';

// utils
import { textToMaterialColor, toFarsiNumber } from 'utils';

const useStyles = makeStyles((theme) => ({
  root: ({ color, lineHeight, fontWeight }) => {
    const rootStyles = { lineHeight: `${lineHeight}px`, fontWeight };
    if (isColorValid(color)) return { ...rootStyles };

    const customColor = textToMaterialColor(theme.palette, color);
    return {
      color: customColor && customColor,
      ...rootStyles,
    };
  },
}));

const isColorValid = (color) => {
  return (
    color === 'textPrimary' ||
    color === 'textSecondary' ||
    color === 'default' ||
    color === 'inherit'
  );
};

/**
 * @component Typography
 */
function Typography({
  children,
  color,
  lineHeight,
  fontWeight,
  locale = 'fa',
  className,
  useComma = false,
  withRials = false,
  ...rest
}) {
  const classes = useStyles({ color, lineHeight, fontWeight });

  const buttonColor = useMemo(() => (isColorValid(color) ? color : 'inherit'), [color]);

  const rootClasses = clsx(classes.root, className);

  return (
    <MuiTypography color={buttonColor} className={rootClasses} {...rest}>
      {locale === 'fa'
        ? `${toFarsiNumber(children, useComma)} ${withRials ? 'ریال' : ''}`
        : children}
    </MuiTypography>
  );
}

export default Typography;
