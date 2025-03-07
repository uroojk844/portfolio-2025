function Badge({ text }: { text: string }) {
  return (
    <code className="text-slate-400 bg-slate-800 border border-slate-700 capitalize py-0.5 px-2 text-[10px] rounded">
      {text}
    </code>
  );
}

export default Badge;
