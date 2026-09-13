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

      {/* Intro section skeleton */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 animate-pulse">
          <div className="h-3 w-24 bg-[#E6DFD1] rounded mx-auto" />
          <div className="h-7 w-72 bg-[#E6DFD1] rounded mx-auto" />
          <div className="h-4 w-full max-w-lg bg-[#E6DFD1] rounded mx-auto" />
          <div className="h-4 w-full max-w-md bg-[#E6DFD1] rounded mx-auto" />
        </div>
      </section>

      {/* Large cards skeleton (spiritual programmes) */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 mb-12 animate-pulse">
            <div className="h-3 w-28 bg-[#E6DFD1] rounded" />
            <div className="h-7 w-44 bg-[#E6DFD1] rounded" />
            <div className="h-4 w-80 bg-[#E6DFD1] rounded" />
          </div>

          <div className="space-y-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="rounded-card overflow-hidden bg-white animate-pulse"
                style={{ border: '1px solid rgba(0,11,88,0.06)' }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="min-h-[280px] lg:min-h-[360px] bg-[#E6DFD1]" />
                  <div className="p-8 sm:p-10 lg:p-12 space-y-5">
                    <div className="w-14 h-14 bg-[#E6DFD1] rounded-card" />
                    <div className="h-6 w-3/4 bg-[#E6DFD1] rounded" />
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-[#E6DFD1] rounded" />
                      <div className="h-4 w-full bg-[#E6DFD1] rounded" />
                      <div className="h-4 w-2/3 bg-[#E6DFD1] rounded" />
                    </div>
                    <div className="h-6 w-32 bg-[#E6DFD1] rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
