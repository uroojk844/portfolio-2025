function Heading({
  heading,
  className,
}: {
  heading: string;
  className?: string;
}) {
  return (
    <div
      className={`slideUpscroll text-4xl font-bold tracking-wide text-center mb-4 ${className}`}
    >
      {heading}
    </div>
  );
}

export default Heading;
