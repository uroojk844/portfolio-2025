function Heading({ heading }: { heading: string }) {
  return (
    <div className="text-4xl font-bold tracking-wide text-center mb-2">
      {heading}
    </div>
  );
}

export default Heading;
