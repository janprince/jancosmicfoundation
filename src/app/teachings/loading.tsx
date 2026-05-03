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

      {/* Intro skeleton */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center space-y-4 animate-pulse">
          <div className="h-3 w-32 bg-gray-200 rounded mx-auto" />
          <div className="h-7 w-64 bg-gray-200 rounded mx-auto" />
          <div className="h-4 w-full max-w-2xl bg-gray-200 rounded mx-auto" />
          <div className="h-4 w-full max-w-xl bg-gray-200 rounded mx-auto" />
        </div>
      </section>

      {/* Video player skeleton */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-pulse">
          <div className="aspect-video bg-gray-200 rounded-2xl" />
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="aspect-video bg-gray-200 rounded-lg" />
                <div className="h-3 w-full bg-gray-200 rounded" />
                <div className="h-3 w-3/4 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
