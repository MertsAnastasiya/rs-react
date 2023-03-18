export function createClassList(names: string[]): string {
  let classList: string = '';
  names.forEach((item) => (classList += `${item} `));

  return classList;
}
