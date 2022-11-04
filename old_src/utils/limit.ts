// function that limit a string and replace last characters with '...'
export default function limit(string: string, max_lenght: number) {
  if (string.length >= max_lenght) {
    return `${string.substring(0, max_lenght)}...`;
  }

  return string;
}
