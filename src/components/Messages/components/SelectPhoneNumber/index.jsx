import { toFarsiNumber } from 'utils';

// components
import Autocomplete from '@material-ui/lab/Autocomplete';
import Input from 'components/shared/Input';

/**
 * @component SelectPhoneNumber
 */
function SelectPhoneNumber() {
  return (
    <Autocomplete
      disableClearable
      options={[{ title: '10009567780' }, { title: '002458000' }, { title: '100006528' }]}
      defaultValue={{ title: '10009567780' }}
      getOptionLabel={(option) => toFarsiNumber(option.title)}
      renderInput={(params) => (
        <Input
          placeholder="--انتخاب شماره--"
          label="از شماره"
          InputLabelProps={{
            shrink: true,
          }}
          {...params}
          fullWidth
        />
      )}
    />
  );
}

export default SelectPhoneNumber;
