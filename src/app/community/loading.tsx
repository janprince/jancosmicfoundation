export default function Loading() {
  return (
    <div style={{ backgroundColor: '#FBF8F2' }}>
      {/* Hero skeleton */}
      <div className="relative h-[45vh] min-h-[320px] bg-navy animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="h-4 w-32 bg-white/15 rounded mx-auto" />
            <div className="h-8 w-72 bg-white/15 rounded mx-auto" />
            <div className="h-4 w-96 bg-white/15 rounded mx-auto" />
          </div>
        </div>
      </div>

      {/* Community channel cards skeleton */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-4 animate-pulse">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-card bg-white p-6 flex items-center gap-5 border border-[#000B58]/6">
              <div className="w-12 h-12 rounded-card bg-[#E6DFD1]" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-40 bg-[#E6DFD1] rounded" />
                <div className="h-3 w-full bg-[#E6DFD1] rounded" />
              </div>
              <div className="w-5 h-5 bg-[#E6DFD1] rounded" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
