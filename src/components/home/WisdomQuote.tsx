import Image from 'next/image';

export default function WisdomQuote() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
        {/* Decorative mark */}
        <div className="mx-auto mb-8 h-px w-12 bg-[#D4A843]/50" />

        <blockquote>
          <p className="text-xl font-light leading-relaxed text-[#000B58] sm:text-2xl lg:text-3xl">
            &ldquo;The purpose of human life is to evolve — to grow beyond the
            limitations of the mind and awaken to the infinite consciousness
            that you truly are.&rdquo;
          </p>
          <footer className="mt-8 flex flex-col items-center gap-4">
            <div className="h-14 w-14 overflow-hidden rounded-full">
              <Image
                src="/images/drjan-thinking.jpg"
                alt="Dr. Baffour Jan"
                width={56}
                height={56}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <cite className="block text-sm font-medium not-italic text-[#000B58]">
                Dr. Baffour Jan
              </cite>
              <span className="text-xs text-[#1a1a1a]/45">
                Founder, Jan Cosmic Foundation
              </span>
            </div>
          </footer>
        </blockquote>

        <div className="mx-auto mt-8 h-px w-12 bg-[#D4A843]/50" />
      </div>
    </section>
  );
}
