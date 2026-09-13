interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

/** Gold eyebrow, Newsreader title, quiet subtitle — the homepage voice on every page. */
export default function SectionHeader({ label, title, subtitle, align = 'center', light = false, className = '' }: SectionHeaderProps) {
  const classes = ['section-header', align === 'center' && 'is-centered', light && 'is-light', className].filter(Boolean).join(' ');
  return <div className={classes}>
    {label && label.toLowerCase() !== title.toLowerCase() && <p className="eyebrow">{label}</p>}
    <h2 className="section-header-title">{title}</h2>
    {subtitle && <p className="section-header-sub">{subtitle}</p>}
  </div>;
}
