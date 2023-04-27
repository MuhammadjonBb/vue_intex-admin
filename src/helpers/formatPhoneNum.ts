export function getPrefix(str: string) {
  const regex = /\(([^)]+)\)/g;
  const brackets = str.match(regex);
  if (brackets && brackets[0].length === 4) {
    return "+998";
  } else if (brackets && brackets[0].length === 5) {
    return "+7";
  }
}

export function removeCharacters(str: string) {
  return str.replace(/[-() ]/g, '');
}
