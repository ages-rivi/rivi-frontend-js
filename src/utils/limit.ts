export default function limit(string: string, max_lenght: number) {
  if (string.length >= max_lenght) {
    return `${string.substring(0, max_lenght)}...`;
  }

  return string;
}

export const stringToOption = (string: string) => {
  return {
    label: string,
    value: string,
    variant: 'outline',
  };
};
