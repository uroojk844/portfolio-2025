function Description({
  description,
  className = "line-clamp-2",
}: {
  description: string;
  className?: string;
}) {
  return (
    <small className={`text-slate-400 mb-2.5 ${className}`}>
      {description}
    </small>
  );
}

export default Description;
