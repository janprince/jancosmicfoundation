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

      {/* Mission quote skeleton */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-14 animate-pulse">
            <div className="h-3 w-28 bg-gray-200 rounded mx-auto" />
            <div className="h-7 w-44 bg-gray-200 rounded mx-auto" />
          </div>
          <div className="rounded-3xl bg-gray-200 h-64 animate-pulse" />
        </div>
      </section>

      {/* Vision cards skeleton */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: '#F2EFE9' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12 animate-pulse">
            <div className="h-3 w-32 bg-gray-200 rounded mx-auto" />
            <div className="h-7 w-44 bg-gray-200 rounded mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-2xl p-7 bg-white animate-pulse space-y-4">
                <div className="w-10 h-10 rounded-lg bg-gray-200" />
                <div className="h-5 w-32 bg-gray-200 rounded" />
                <div className="h-3 w-full bg-gray-200 rounded" />
                <div className="h-3 w-5/6 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
