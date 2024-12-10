// export const priceToFloat = (value: string | number) => {
//   let floatValue = parseFloat(value.replace('$', ''));
//   return `$${floatValue.toFixed(2)}`;
// };

export const priceToFloat = (value: string | number) => {
  // Convert the value to a string if it's a number
  let strValue = typeof value === 'number' ? value.toString() : value;

  // Remove any "$" symbol if present
  strValue = strValue.replace('$', '');

  // Parse the string as a float
  const floatValue = parseFloat(strValue);

  // Format the result to two decimal places and add "$" prefix
  return `$${floatValue.toFixed(2)}`;
};
