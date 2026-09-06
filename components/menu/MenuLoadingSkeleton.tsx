export default function MenuLoadingSkeleton() {
  return (
    <div className="mt-8 space-y-10" aria-busy="true" aria-label="Loading menu">
      {Array.from({ length: 3 }).map((_, section) => (
        <div key={section}>
          <div className="h-4 w-40 animate-pulse rounded bg-border-light" />
          <div className="mt-2 h-px w-14 bg-border-light" />
          <div className="mt-4 space-y-4 rounded-[14px] border border-border-light bg-bg-card px-5 py-6 sm:px-7">
            {Array.from({ length: 4 }).map((__, row) => (
              <div key={row} className="flex justify-between gap-4 border-b border-border-light/60 pb-4 last:border-0">
                <div className="flex-1 space-y-2">
                  <div className="h-5 w-1/2 animate-pulse rounded bg-border-light" />
                  <div className="h-3 w-3/4 animate-pulse rounded bg-border-light/70" />
                </div>
                <div className="h-5 w-14 animate-pulse rounded bg-border-light" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
