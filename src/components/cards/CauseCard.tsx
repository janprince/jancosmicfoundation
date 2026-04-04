import Link from "next/link";
import Image from "next/image";
import { Cause } from "@/types";
import ProgressBar from "@/components/ui/ProgressBar";

export default function CauseCard({ cause }: { cause: Cause }) {
  const isSpecific = cause.type === 'specific';

  return (
    <Link href={`/donate/${cause.slug}`} className="group block cursor-pointer">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={cause.image}
            alt={cause.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Ongoing badge */}
          {!isSpecific && (
            <div className="absolute top-3 left-3 z-10">
              <span className="flex items-center gap-1.5 rounded-full bg-[#D4A843]/90 backdrop-blur-sm px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                Ongoing
              </span>
            </div>
          )}
        </div>
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-lg font-semibold text-[#000B58] group-hover:text-primary transition-colors line-clamp-2">
            {cause.title}
          </h3>
          <p className="mt-2 text-sm text-gray-600 line-clamp-3 flex-1">
            {cause.description}
          </p>

          {isSpecific ? (
            /* Specific cause — progress bar */
            <>
              <div className="mt-4">
                <ProgressBar
                  current={cause.raisedAmount}
                  goal={cause.goalAmount}
                  currency={cause.currency}
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {cause.donorsCount} donor{cause.donorsCount !== 1 ? "s" : ""}
                </span>
                <span className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white">
                  Donate
                </span>
              </div>
            </>
          ) : (
            /* Ongoing cause — impact-focused */
            <>
              {cause.impactStatement && (
                <div className="mt-4 rounded-lg bg-[#F2EFE9] px-4 py-3">
                  <p className="text-xs leading-relaxed text-[#000B58]/70">
                    <span className="mr-1.5 inline-block text-[#D4A843]" aria-hidden="true">&#10047;</span>
                    {cause.impactStatement}
                  </p>
                </div>
              )}
              <div className="mt-4 flex items-center justify-between">
                {cause.donorsCount > 0 ? (
                  <span className="text-xs text-gray-500">
                    {cause.donorsCount} supporter{cause.donorsCount !== 1 ? "s" : ""}
                  </span>
                ) : (
                  <span className="text-xs text-gray-500">
                    Be the first to support
                  </span>
                )}
                <span className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white">
                  Support This Work
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
