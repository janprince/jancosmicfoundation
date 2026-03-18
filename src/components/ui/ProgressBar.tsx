interface ProgressBarProps {
  current: number;
  goal: number;
  currency?: string;
  showLabel?: boolean;
  className?: string;
}

function formatAmount(value: number): string {
  return value.toLocaleString('en-GH', { minimumFractionDigits: 0 });
}

export default function ProgressBar({
  current,
  goal,
  currency = 'GHS',
  showLabel = true,
  className = '',
}: ProgressBarProps) {
  const raw = goal > 0 ? (current / goal) * 100 : 0;
  const percentage = Math.min(Math.max(raw, 0), 100);
  const displayPercent = Math.round(percentage);

  return (
    <div className={['w-full', className].join(' ')}>
      {/* Track */}
      <div
        className="relative h-3 w-full overflow-hidden rounded-full bg-primary/15"
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={0}
        aria-valuemax={goal}
        aria-label={`${displayPercent}% funded`}
      >
        {/* Filled bar */}
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${percentage}%`,
            background:
              'linear-gradient(90deg, var(--color-primary) 0%, #52b788 60%, #D4A843 100%)',
          }}
        />

        {/* Shimmer overlay */}
        {percentage > 5 && (
          <div
            className="absolute inset-0 rounded-full"
            style={{
              width: `${percentage}%`,
              background:
                'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)',
            }}
          />
        )}
      </div>

      {/* Labels */}
      {showLabel && (
        <div className="mt-2 flex items-center justify-between gap-2">
          <p className="text-sm text-[#1a1a1a]/70">
            <span className="font-semibold text-primary">
              {currency} {formatAmount(current)}
            </span>{' '}
            raised of{' '}
            <span className="font-medium">
              {currency} {formatAmount(goal)}
            </span>
          </p>
          <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
            {displayPercent}%
          </span>
        </div>
      )}
    </div>
  );
}
