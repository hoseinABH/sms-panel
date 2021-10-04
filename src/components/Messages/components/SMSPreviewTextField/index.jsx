import { Fragment } from 'react';

// components
import AdvancedTextField from 'components/shared/AdvancedTextField';
import Typography from '@material-ui/core/Typography';
import FaTypography from 'components/shared/Typography';

/**
 * @component SMSPreviewTextField
 */
function SMSPreviewTextField({ ...rest }) {
  return (
    <AdvancedTextField
      {...rest}
      renderFooter={() => {
        return (
          <Fragment>
            <Typography variant="caption">
              متن بالا به شماره:{' '}
              <FaTypography color="error" variant="caption">
                09361748187
              </FaTypography>{' '}
              ارسال میشود
            </Typography>
          </Fragment>
        );
      }}
    />
  );
}

export default SMSPreviewTextField;
