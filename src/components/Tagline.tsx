function Tagline({
  tagline,
  className,
}: {
  tagline: string;
  className?: string;
}) {
  return <p className={`slideUpscroll text-center ${className}`}>{tagline}</p>;
}

export default Tagline;
