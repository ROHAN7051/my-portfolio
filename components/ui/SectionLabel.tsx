type SectionLabelProps = {
  label: string;
};

export function SectionLabel({ label }: SectionLabelProps) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <span className="font-mono text-sm text-green">#</span>
      <span className="font-mono text-sm text-text-secondary">{label}</span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
