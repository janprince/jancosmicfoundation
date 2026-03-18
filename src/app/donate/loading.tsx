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

      {/* Intro + impact section skeleton */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header skeleton */}
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-3 animate-pulse">
            <div className="h-3 w-28 bg-gray-200 rounded mx-auto" />
            <div className="h-7 w-52 bg-gray-200 rounded mx-auto" />
            <div className="h-4 w-full max-w-lg bg-gray-200 rounded mx-auto" />
            <div className="h-4 w-full max-w-md bg-gray-200 rounded mx-auto" />
          </div>

          {/* Impact cards skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="text-center rounded-2xl p-6 animate-pulse" style={{ backgroundColor: '#F2EFE9' }}>
                <div className="w-12 h-12 rounded-full bg-gray-200 mx-auto mb-4" />
                <div className="h-4 w-32 bg-gray-200 rounded mx-auto mb-2" />
                <div className="h-3 w-full bg-gray-200 rounded mx-auto" />
                <div className="h-3 w-3/4 bg-gray-200 rounded mx-auto mt-1" />
              </div>
            ))}
          </div>

          {/* Causes header skeleton */}
          <div className="space-y-3 mb-10 animate-pulse">
            <div className="h-3 w-24 bg-gray-200 rounded mx-auto" />
            <div className="h-7 w-44 bg-gray-200 rounded mx-auto" />
            <div className="h-4 w-80 bg-gray-200 rounded mx-auto" />
          </div>

          {/* Cause cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden animate-pulse">
                <div className="aspect-video bg-gray-200" />
                <div className="p-6 space-y-3">
                  <div className="h-5 w-3/4 bg-gray-200 rounded" />
                  <div className="h-3 w-full bg-gray-200 rounded" />
                  <div className="h-3 w-2/3 bg-gray-200 rounded" />
                  {/* Progress bar skeleton */}
                  <div className="h-2 w-full bg-gray-200 rounded-full mt-4" />
                  <div className="flex justify-between">
                    <div className="h-3 w-20 bg-gray-200 rounded" />
                    <div className="h-3 w-16 bg-gray-200 rounded" />
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
