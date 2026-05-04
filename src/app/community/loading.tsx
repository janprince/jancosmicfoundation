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

      {/* Community channel cards skeleton */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-4 animate-pulse">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-2xl bg-white p-6 flex items-center gap-5 border border-[#000B58]/6">
              <div className="w-12 h-12 rounded-xl bg-gray-200" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-40 bg-gray-200 rounded" />
                <div className="h-3 w-full bg-gray-200 rounded" />
              </div>
              <div className="w-5 h-5 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
