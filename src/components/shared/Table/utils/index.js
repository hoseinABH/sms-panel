// utils
import { addUniqueKey, listToTree } from 'utils';

/**
 * @function generateTableData
 * @param data table row data
 * @param parentChildData when called gets row's parent
 * @summary gets flat list of table data and convert it to tree with unique ids
 */
function generateTableData(data, parentChildData) {
  const uniqueData = addUniqueKey(data);
  if (parentChildData) {
    const tree = listToTree(uniqueData, parentChildData);
    return tree;
  } else {
    return uniqueData;
  }
}

function reorderList(list, startIndex, endIndex) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

export { generateTableData, reorderList };
