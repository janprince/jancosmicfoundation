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

      {/* Mission quote skeleton */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-14 animate-pulse">
            <div className="h-3 w-28 bg-[#E6DFD1] rounded mx-auto" />
            <div className="h-7 w-44 bg-[#E6DFD1] rounded mx-auto" />
          </div>
          <div className="rounded-card bg-[#E6DFD1] h-64 animate-pulse" />
        </div>
      </section>

      {/* Vision cards skeleton */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: '#F2EDE3' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12 animate-pulse">
            <div className="h-3 w-32 bg-[#E6DFD1] rounded mx-auto" />
            <div className="h-7 w-44 bg-[#E6DFD1] rounded mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-card p-7 bg-white animate-pulse space-y-4">
                <div className="w-10 h-10 rounded-card bg-[#E6DFD1]" />
                <div className="h-5 w-32 bg-[#E6DFD1] rounded" />
                <div className="h-3 w-full bg-[#E6DFD1] rounded" />
                <div className="h-3 w-5/6 bg-[#E6DFD1] rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
