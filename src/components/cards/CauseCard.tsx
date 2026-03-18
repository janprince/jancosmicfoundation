import Link from "next/link";
import Image from "next/image";
import { Cause } from "@/types";
import ProgressBar from "@/components/ui/ProgressBar";

export default function CauseCard({ cause }: { cause: Cause }) {
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
        </div>
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-lg font-semibold text-[#000B58] group-hover:text-primary transition-colors line-clamp-2">
            {cause.title}
          </h3>
          <p className="mt-2 text-sm text-gray-600 line-clamp-3 flex-1">
            {cause.description}
          </p>
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
            <span className="inline-flex items-center justify-center rounded-lg bg-[#2D6A4F] px-4 py-2 text-sm font-medium text-white">
              Donate
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
