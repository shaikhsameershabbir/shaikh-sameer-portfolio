type TechBadgeProps = {
  label: string;
  className?: string;
};

export default function TechBadge({ label, className = "" }: TechBadgeProps) {
  return (
    <span
      className={`inline-block border border-accent/25 bg-black/40 px-2.5 py-1 font-mono text-xs text-muted transition-colors duration-300 hover:border-accent hover:text-accent ${className}`}
    >
      {label}
    </span>
  );
}
