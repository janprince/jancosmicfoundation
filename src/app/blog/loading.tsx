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
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header + category filters skeleton */}
          <div className="flex flex-col gap-8 mb-12">
            <div className="space-y-3">
              <div className="h-3 w-32 bg-gray-200 rounded animate-pulse" />
              <div className="h-7 w-52 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-80 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="flex flex-wrap gap-2 animate-pulse">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-9 w-24 bg-gray-200 rounded-full" />
              ))}
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden animate-pulse">
                <div className="aspect-video bg-gray-200" />
                <div className="p-6 space-y-3">
                  <div className="h-3 w-20 bg-gray-200 rounded" />
                  <div className="h-5 w-3/4 bg-gray-200 rounded" />
                  <div className="h-3 w-full bg-gray-200 rounded" />
                  <div className="h-3 w-5/6 bg-gray-200 rounded" />
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full" />
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
