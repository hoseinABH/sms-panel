import { useState } from 'react';

// components
import AdvancedTextField from 'components/shared/AdvancedTextField';

/**
 * @component PhoneNumberTextField
 */
function PhoneNumberTextField({ ...rest }) {
  const [_value, setValue] = useState('');
  const [numbers, setNumbers] = useState([]);

  const onTextFieldChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  const onTextFieldKeyDown = (event) => {
    if (['Enter', 'Tab', ','].includes(event.key)) {
      event.preventDefault();

      const text = _value.trim();

      const regex = /(\+98|0098|98|0)?9\d{9}/g;
      const matches = [...numbers];
      const newText = text.replace(regex, (string, match) => {
        matches.push(string);
        return '';
      });
      setNumbers([...new Set(matches)]);

      setValue(newText);
    }
  };

  const onChipDelete = (index) => {
    setNumbers((prevState) => {
      return prevState.filter((_, i) => i !== index);
    });
  };

  return (
    <AdvancedTextField
      {...rest}
      chips={numbers}
      onChange={onTextFieldChange}
      value={_value}
      onChipDelete={onChipDelete}
      onKeyDown={onTextFieldKeyDown}
      renderFooter={() => {
        return <div></div>;
      }}
    />
  );
}

export default PhoneNumberTextField;
