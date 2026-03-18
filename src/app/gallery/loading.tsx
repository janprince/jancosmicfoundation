export default function Loading() {
  return (
    <main style={{ backgroundColor: '#FDFBF7' }}>
      {/* Hero skeleton */}
      <div className="relative h-[45vh] min-h-[320px] bg-gray-200 animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="h-4 w-32 bg-gray-300 rounded mx-auto" />
            <div className="h-8 w-72 bg-gray-300 rounded mx-auto" />
            <div className="h-4 w-96 bg-gray-300 rounded mx-auto" />
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header skeleton */}
          <div className="text-center space-y-3 mb-10 animate-pulse">
            <div className="h-3 w-24 bg-gray-200 rounded mx-auto" />
            <div className="h-7 w-40 bg-gray-200 rounded mx-auto" />
            <div className="h-4 w-80 bg-gray-200 rounded mx-auto" />
          </div>

          {/* Filter tabs skeleton */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 animate-pulse">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-10 w-24 bg-gray-200 rounded-full" />
            ))}
          </div>

          {/* Item count skeleton */}
          <div className="h-4 w-28 bg-gray-200 rounded mx-auto mb-8 animate-pulse" />

          {/* Masonry grid skeleton */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="break-inside-avoid mb-5 animate-pulse">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div
                    className="w-full bg-gray-200"
                    style={{ paddingBottom: i % 2 === 0 ? '75%' : '60%' }}
                  />
                  <div className="p-4 space-y-2">
                    <div className="h-4 w-3/4 bg-gray-200 rounded" />
                    <div className="h-3 w-full bg-gray-200 rounded" />
                    <div className="h-3 w-24 bg-gray-200 rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
