import { toFarsiNumber } from 'utils';

// components
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

// icons
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

/**
 * @component MultiSelect
 */
function MultiSelect({ list, label, placeholder }) {
  return (
    <Autocomplete
      multiple
      options={list}
      getOptionLabel={(option) => toFarsiNumber(option.title)}
      defaultValue={[list[1]]}
      filterSelectedOptions
      popupIcon={<KeyboardArrowDownIcon />}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label={label} placeholder={placeholder} />
      )}
    />
  );
}

export default MultiSelect;
