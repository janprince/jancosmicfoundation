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

      {/* Intro + impact section skeleton */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header skeleton */}
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-3 animate-pulse">
            <div className="h-3 w-28 bg-[#E6DFD1] rounded mx-auto" />
            <div className="h-7 w-52 bg-[#E6DFD1] rounded mx-auto" />
            <div className="h-4 w-full max-w-lg bg-[#E6DFD1] rounded mx-auto" />
            <div className="h-4 w-full max-w-md bg-[#E6DFD1] rounded mx-auto" />
          </div>

          {/* Impact cards skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="text-center rounded-card p-6 animate-pulse" style={{ backgroundColor: '#F2EDE3' }}>
                <div className="w-12 h-12 rounded-full bg-[#E6DFD1] mx-auto mb-4" />
                <div className="h-4 w-32 bg-[#E6DFD1] rounded mx-auto mb-2" />
                <div className="h-3 w-full bg-[#E6DFD1] rounded mx-auto" />
                <div className="h-3 w-3/4 bg-[#E6DFD1] rounded mx-auto mt-1" />
              </div>
            ))}
          </div>

          {/* Causes header skeleton */}
          <div className="space-y-3 mb-10 animate-pulse">
            <div className="h-3 w-24 bg-[#E6DFD1] rounded mx-auto" />
            <div className="h-7 w-44 bg-[#E6DFD1] rounded mx-auto" />
            <div className="h-4 w-80 bg-[#E6DFD1] rounded mx-auto" />
          </div>

          {/* Cause cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-card overflow-hidden animate-pulse">
                <div className="aspect-video bg-[#E6DFD1]" />
                <div className="p-6 space-y-3">
                  <div className="h-5 w-3/4 bg-[#E6DFD1] rounded" />
                  <div className="h-3 w-full bg-[#E6DFD1] rounded" />
                  <div className="h-3 w-2/3 bg-[#E6DFD1] rounded" />
                  {/* Progress bar skeleton */}
                  <div className="h-2 w-full bg-[#E6DFD1] rounded-full mt-4" />
                  <div className="flex justify-between">
                    <div className="h-3 w-20 bg-[#E6DFD1] rounded" />
                    <div className="h-3 w-16 bg-[#E6DFD1] rounded" />
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
