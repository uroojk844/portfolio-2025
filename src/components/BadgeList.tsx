import Badge from "./Badge";

function BadgeList({ list }: { list: Array<string> }) {
  return (
    <div className="flex flex-wrap gap-2">
      {list.map((skill) => (
        <Badge key={skill} text={skill} />
      ))}
    </div>
  );
}

export default BadgeList;
