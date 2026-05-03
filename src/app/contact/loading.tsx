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

      {/* Form + info skeleton */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 animate-pulse">
            {/* Form */}
            <div className="lg:col-span-3 space-y-4">
              <div className="h-7 w-44 bg-gray-200 rounded" />
              <div className="bg-white rounded-2xl p-8 space-y-5 border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <div className="h-3 w-20 bg-gray-200 rounded" />
                    <div className="h-12 w-full bg-gray-200 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 w-20 bg-gray-200 rounded" />
                    <div className="h-12 w-full bg-gray-200 rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-16 bg-gray-200 rounded" />
                  <div className="h-12 w-full bg-gray-200 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-20 bg-gray-200 rounded" />
                  <div className="h-32 w-full bg-gray-200 rounded-xl" />
                </div>
                <div className="h-12 w-44 bg-gray-200 rounded-xl" />
              </div>
            </div>
            {/* Info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="h-7 w-44 bg-gray-200 rounded" />
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-xl p-4 bg-[#F2EFE9] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-24 bg-gray-200 rounded" />
                    <div className="h-4 w-3/4 bg-gray-200 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
