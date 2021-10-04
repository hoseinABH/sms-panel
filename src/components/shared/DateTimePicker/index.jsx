// components
import { DateTimePicker as MuiDateTimePicker } from '@material-ui/pickers';

/**
 * @component DateTimePicker
 */
function DateTimePicker({ DialogProps, ...rest }) {
  return (
    <MuiDateTimePicker
      DialogProps={{ ...DialogProps, container: document.getElementById('portal') }}
      {...rest}
    />
  );
}

export default DateTimePicker;
