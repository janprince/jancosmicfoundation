export default function Loading() {
  return (
    <div style={{ backgroundColor: '#FBF8F2' }}>
      {/* Hero skeleton */}
      <div className="relative h-[45vh] min-h-[320px] bg-navy animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="h-4 w-32 bg-white/15 rounded mx-auto" />
            <div className="h-8 w-64 max-w-full bg-white/15 rounded mx-auto" />
            <div className="h-4 w-full max-w-sm bg-white/15 rounded mx-auto" />
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header + filter tabs skeleton */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div className="space-y-3">
              <div className="h-3 w-24 bg-[#E6DFD1] rounded animate-pulse" />
              <div className="h-7 w-48 bg-[#E6DFD1] rounded animate-pulse" />
            </div>
            <div className="flex gap-2 animate-pulse">
              <div className="h-10 w-28 bg-[#E6DFD1] rounded-card" />
              <div className="h-10 w-28 bg-[#E6DFD1] rounded-card" />
              <div className="h-10 w-20 bg-[#E6DFD1] rounded-card" />
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-card overflow-hidden animate-pulse">
                <div className="aspect-video bg-[#E6DFD1]" />
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-20 bg-[#E6DFD1] rounded" />
                    <div className="h-3 w-24 bg-[#E6DFD1] rounded" />
                  </div>
                  <div className="h-5 w-3/4 bg-[#E6DFD1] rounded" />
                  <div className="h-3 w-full bg-[#E6DFD1] rounded" />
                  <div className="h-3 w-2/3 bg-[#E6DFD1] rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
