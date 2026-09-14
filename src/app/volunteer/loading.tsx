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

      {/* Benefits skeleton */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12 animate-pulse">
            <div className="h-3 w-28 bg-[#E6DFD1] rounded mx-auto" />
            <div className="h-7 w-44 bg-[#E6DFD1] rounded mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-card p-6 bg-[#F2EDE3] animate-pulse space-y-4">
                <div className="w-12 h-12 rounded-card bg-[#E6DFD1]" />
                <div className="h-5 w-32 bg-[#E6DFD1] rounded" />
                <div className="h-3 w-full bg-[#E6DFD1] rounded" />
                <div className="h-3 w-5/6 bg-[#E6DFD1] rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities skeleton */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#F2EDE3' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10 animate-pulse">
            <div className="h-3 w-24 bg-[#E6DFD1] rounded mx-auto" />
            <div className="h-7 w-52 bg-[#E6DFD1] rounded mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-white rounded-card p-6 animate-pulse space-y-3">
                <div className="h-5 w-3/4 bg-[#E6DFD1] rounded" />
                <div className="h-3 w-full bg-[#E6DFD1] rounded" />
                <div className="h-3 w-5/6 bg-[#E6DFD1] rounded" />
                <div className="h-3 w-32 bg-[#E6DFD1] rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
