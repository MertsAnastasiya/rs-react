export function createClassList(names: string[]): string {
  let classListString: string = '';
  names.forEach((item) => (classListString += `${item} `));
  classListString = classListString.substring(0, classListString.length - 1);

  return classListString;
}
