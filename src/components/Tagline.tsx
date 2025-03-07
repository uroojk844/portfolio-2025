function Tagline({
  tagline,
  className,
}: {
  tagline: string;
  className?: string;
}) {
  return <p className={`text-center ${className}`}>{tagline}</p>;
}

export default Tagline;
