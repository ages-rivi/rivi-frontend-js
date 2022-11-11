import TagStackView from '../../views/TagStack';

interface TagStackProps {
  tags: string[];
}

function getColor(index: number): string {
  switch (index % 3) {
    case 0:
      return 'blue';
    case 1:
      return 'green';
    case 2:
      return 'pink';
    default:
      return 'blue';
  }
}

export default function TagStack({ tags }: TagStackProps) {
  return <TagStackView tags={tags} colors={getColor} />;
}
