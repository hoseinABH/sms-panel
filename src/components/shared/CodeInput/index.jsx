import React, { useState, useEffect, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';

// components
import TextField from '@material-ui/core/TextField';

// helpers
import useConstructor from 'helpers/useConstructor';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: ({ noWrap }) => (noWrap ? 'nowrap' : 'wrap'),
  },
  textField: {
    width: 32,
    margin: theme.spacing(0, 0.5),
    '&:last-child': {
      marginRight: 0,
    },
    '&:first-child': {
      marginLeft: 0,
    },
  },
  input: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
}));

const BACKSPACE_KEY = 8;
const LEFT_ARROW_KEY = 37;
const UP_ARROW_KEY = 38;
const RIGHT_ARROW_KEY = 39;
const DOWN_ARROW_KEY = 40;
const E_KEY = 69;

/**
 * @component CodeInput
 */
function CodeInput({
  value = '',
  forceUppercase,
  type = 'number',
  onChange,
  autoFocus,
  disabled,
  fields = 6,
  isPassword,
  noWrap,
}) {
  const classes = useStyles({ noWrap });

  const [_value, setValue] = useState(value);
  const [_input, setInput] = useState([]);

  let textInput = useMemo(() => [], []);
  const uuid = useMemo(() => uuidv4(), []);

  useConstructor(() => {
    const input = [];
    for (let i = 0; i < Number(fields); i += 1) {
      if (i < 32) {
        const value = _value[i] || '';
        input.push(value);
      }
    }

    setInput(input);
  });

  useEffect(() => {
    if (value) setValue(value);
  }, [value]);

  const onTextFieldChange = (event) => {
    let value = String(event.target.value);

    if (forceUppercase) {
      value = value.toUpperCase();
    }

    if (type === 'number') {
      value = value.replace(/[^\d]/g, '');
    }

    let fullValue = value;

    if (value !== '') {
      const input = _input.slice();

      if (value.length > 1) {
        value.split('').map((chart, i) => {
          if (Number(event.target.dataset.id) + i < fields) {
            input[Number(event.target.dataset.id) + i] = chart;
          }
          return false;
        });
      } else {
        input[Number(event.target.dataset.id)] = value;
      }

      input.map((s, i) => {
        if (textInput[i]) {
          textInput[i].value = s;
        }
        return false;
      });

      const newTarget =
        textInput[
          event.target.dataset.id < input.length
            ? Number(event.target.dataset.id) + 1
            : event.target.dataset.id
        ];

      if (newTarget) {
        newTarget.focus();
        newTarget.select();
      }

      fullValue = input.join('');
      setInput(input);
      setValue(input.join(''));

      onChange && fullValue && onChange(fullValue);
    }
  };

  const onTextFieldKeyDown = (event) => {
    const target = Number(event.target.dataset.id),
      nextTarget = textInput[target + 1],
      prevTarget = textInput[target - 1];

    let input, value;

    switch (event.keyCode) {
      case BACKSPACE_KEY:
        event.preventDefault();
        textInput[target].value = '';
        input = _input.slice();
        input[target] = '';
        value = input.join('');

        setValue(value);
        setInput(input);
        if (textInput[target].value === '') {
          if (prevTarget) {
            prevTarget.focus();
            prevTarget.select();
          }
        }
        onChange && onChange(value);

        break;

      case LEFT_ARROW_KEY:
        event.preventDefault();
        if (prevTarget) {
          prevTarget.focus();
          prevTarget.select();
        }
        break;

      case RIGHT_ARROW_KEY:
        event.preventDefault();
        if (nextTarget) {
          nextTarget.focus();
          nextTarget.select();
        }
        break;

      case UP_ARROW_KEY:
        event.preventDefault();
        break;

      case DOWN_ARROW_KEY:
        event.preventDefault();
        break;

      case E_KEY:
        if (event.target.type === 'number') {
          event.preventDefault();
          break;
        }
        break;

      default:
        break;
    }
  };

  return (
    <div dir="ltr" className={classes.root}>
      {_input.map((value, i) => {
        return (
          <TextField
            inputRef={(ref) => {
              textInput[i] = ref;
            }}
            autoFocus={autoFocus && i === 0}
            value={value}
            min={0}
            max={9}
            maxLength={_input.length === i + 1 ? 1 : _input.length}
            disabled={disabled}
            key={`input_${i}`}
            onChange={onTextFieldChange}
            type={isPassword ? 'password' : 'unset'}
            onKeyDown={onTextFieldKeyDown}
            inputMode="decimal"
            className={classes.textField}
            inputProps={{ className: classes.input, id: `${uuid}-${i}`, 'data-id': i }}
          />
        );
      })}
    </div>
  );
}

export default CodeInput;
