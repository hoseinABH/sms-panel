import { Fragment, useState } from 'react';

// components
import AdvancedTextField from 'components/shared/AdvancedTextField';
import Typography from '@material-ui/core/Typography';
import FaTypography from 'components/shared/Typography';

// utils
import { checkPersian } from 'utils';
import { SMSDetail } from 'constants/sms';

/**
 * @component SMSTextField
 */
function SMSTextField({ options = SMSDetail, ...rest }) {
  const [_value, setValue] = useState('');
  const [page, setPage] = useState(0);
  const [remainingCharacters, setRemainingCharacters] = useState(
    options.languageOptions[options.defaultLanguage].pageBreakpoints[0]
  );
  const [language, setLanguage] = useState(options.defaultLanguage);

  const getRemainingCharacters = (page, language) => {
    const breakpoints = options.languageOptions[language].pageBreakpoints;
    const slicedBreakpoints = breakpoints.slice(0, page + 1);

    return page < breakpoints.length - 1
      ? slicedBreakpoints.reduce((acc, curr) => acc + curr)
      : slicedBreakpoints.reduce((acc, curr) => acc + curr) +
          breakpoints[breakpoints.length - 1] * (page - (breakpoints.length - 1));
  };

  const getPage = (text, language) => {
    let cycle = 0;
    while (text / getRemainingCharacters(cycle, language) >= 1) {
      cycle += 1;
    }
    return cycle;
  };

  const onTextFieldChange = (event) => {
    const inputValue = event.target.value;

    const textLength = inputValue.length;

    setLanguage(() => {
      const newValue = checkPersian(inputValue) ? 'fa' : 'en';

      const currentPage = getPage(textLength, newValue);
      setPage(currentPage);
      setRemainingCharacters(getRemainingCharacters(currentPage, newValue) - textLength);

      setValue(inputValue);

      return newValue;
    });
  };

  return (
    <AdvancedTextField
      {...rest}
      onChange={onTextFieldChange}
      value={_value}
      renderFooter={() => {
        return (
          <Fragment>
            <Typography variant="caption">
              متن پیام:{' '}
              <FaTypography color="error" variant="caption">
                {page + 1} صفحه ای
              </FaTypography>
            </Typography>

            <Typography variant="caption">
              <FaTypography color="error" variant="caption">
                {remainingCharacters}
              </FaTypography>{' '}
              کاراکتر مانده تا صفحه بعد
            </Typography>
            <Typography variant="caption">
              نوع پیام:{' '}
              <Typography color="error" variant="caption">
                {options.languageOptions[language].label}
              </Typography>
            </Typography>
          </Fragment>
        );
      }}
    />
  );
}

export default SMSTextField;
