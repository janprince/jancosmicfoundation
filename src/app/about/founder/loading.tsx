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

      {/* Bio + portrait skeleton */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center animate-pulse">
            <div className="h-[480px] rounded-card bg-[#E6DFD1]" />
            <div className="space-y-4">
              <div className="h-3 w-24 bg-[#E6DFD1] rounded" />
              <div className="h-7 w-3/4 bg-[#E6DFD1] rounded" />
              <div className="h-4 w-full bg-[#E6DFD1] rounded" />
              <div className="h-4 w-full bg-[#E6DFD1] rounded" />
              <div className="h-4 w-5/6 bg-[#E6DFD1] rounded" />
              <div className="grid grid-cols-3 gap-4 pt-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="text-center space-y-2">
                    <div className="h-7 w-12 bg-[#E6DFD1] rounded mx-auto" />
                    <div className="h-3 w-20 bg-[#E6DFD1] rounded mx-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline skeleton */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-pulse space-y-10">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="pl-16 space-y-3">
              <div className="h-5 w-16 bg-[#E6DFD1] rounded-full" />
              <div className="h-5 w-2/3 bg-[#E6DFD1] rounded" />
              <div className="h-3 w-full bg-[#E6DFD1] rounded" />
              <div className="h-3 w-5/6 bg-[#E6DFD1] rounded" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
