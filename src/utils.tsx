export function createClassList(names: string[]): string {
  let classListString = '';
  names.forEach((item) => (classListString += `${item} `));
  classListString = classListString.substring(0, classListString.length - 1);

  return classListString;
}

export function isNumber(price: string): boolean {
  return /^\d*$/.test(price) ? true : false;
}

export function isEmpty(value: string): boolean {
  return value !== '' ? true : false;
}
