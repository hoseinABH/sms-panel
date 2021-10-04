import { v4 as uuidv4 } from 'uuid';

import { addCommas, phoneNumberDetail } from 'persian-tools2';

import { SMSDetail } from 'constants/sms';

export function checkPersian(str) {
  const p = /[\u0600-\u06FF\s]+/;

  return p.test(str.replace(' ', ''));
}

export function addUniqueKey(array) {
  return array.map((item) => {
    return { __id: uuidv4(), ...item };
  });
}

/**
 * convert a flat list of nodes into tree array
 * @param array list of nodes as flat array
 * @param parentChildData data to locate node parents
 */
export function listToTree(array, parentChildData) {
  let root = [];
  array.forEach((el) => {
    // Use our mapping to locate the parent element in our data array
    const parent = parentChildData(el, array);

    if (!parent) {
      root.push(el);
      return;
    }
    // Add our current el to its parent's `children` array
    parent.children = [...(parent.children || []), el];
  });

  return root;
}

export function normalizeArray(array) {
  return array.filter(Boolean);
}

export function textToMaterialColor(palette, text, returnParent = false) {
  if (!text) return palette.text.primary;

  const hasDot = text.indexOf('.') !== -1;
  if (hasDot) {
    const color = text.split('.');
    return returnParent ? palette[color[0]] : palette[color[0]][color[1]];
  } else return !returnParent ? palette[text].main : palette[text];
}

/**
 * Format bytes as human-readable text.
 *
 * @param bytes Number of bytes.
 * @param si True to use metric (SI) units, aka powers of 1000. False to use
 *           binary (IEC), aka powers of 1024.
 * @param dp Number of decimal places to display.
 *
 * @return Formatted string.
 */
export function humanFileSize(bytes, si = false, dp = 1) {
  const thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }

  const units = si
    ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  let u = -1;
  const r = 10 ** dp;

  do {
    bytes /= thresh;
    ++u;
  } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);

  return bytes.toFixed(dp) + ' ' + units[u];
}

export function toFarsiNumber(n, useComma = false) {
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const text = useComma ? addCommas(n) : n;
  const result = text?.toString().replace(/\d/g, (x) => farsiDigits[x]);
  return result;
}

export function collectPhoneNumbers(text, onlyValid) {
  const regex = /(\+98|0098|98|0)?9\d{9}/g;
  const matches = [];
  text.replace(regex, (string, match) => {
    matches.push(string);
    return '';
  });

  const numbers = [...new Set(matches)];

  return !onlyValid
    ? numbers
    : numbers.reduce((acc, curr) => {
        if (phoneNumberDetail(curr)?.operator) acc.push(curr);
        return acc;
      }, []);
}

export function groupPhoneNumbersByCarrier(phoneNumbers) {
  return phoneNumbers.reduce((acc, curr) => {
    const operator = phoneNumberDetail(curr)?.operator || 'نادرست';
    acc[operator] = [...(acc[operator] || []), curr];
    return acc;
  }, {});
}

export function getSMSDetail(text) {
  const contentLanguage = checkPersian(text) ? 'fa' : 'en';

  const getRemainingCharacters = (page, language) => {
    const breakpoints = SMSDetail.languageOptions[language].pageBreakpoints;
    const slicedBreakpoints = breakpoints.slice(0, page + 1);

    return page < breakpoints.length - 1
      ? slicedBreakpoints.reduce((acc, curr) => acc + curr)
      : slicedBreakpoints.reduce((acc, curr) => acc + curr) +
          breakpoints[breakpoints.length - 1] * (page - (breakpoints.length - 1));
  };

  const getPage = (text, language) => {
    let cycle = 0;
    while (text.length / getRemainingCharacters(cycle, language) >= 1) {
      cycle += 1;
    }
    return cycle;
  };

  // calculate price here

  const page = getPage(text, contentLanguage);
  return {
    page: page + 1,
    remainingCharacters: getRemainingCharacters(page, contentLanguage) - text.length,
  };
}
