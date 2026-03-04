import Link from "next/link";
import { Cause } from "@/types";
import ProgressBar from "@/components/ui/ProgressBar";
import Button from "@/components/ui/Button";

export default function CauseCard({ cause }: { cause: Cause }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
      <Link href={`/donate/${cause.slug}`} className="block">
        <div className="relative h-48 md:h-56 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-[#2D6A4F] to-[#D4A843] group-hover:scale-105 transition-transform duration-500" />
        </div>
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <Link href={`/donate/${cause.slug}`}>
          <h3 className="text-lg font-semibold text-[#000B58] group-hover:text-[#2D6A4F] transition-colors line-clamp-2">
            {cause.title}
          </h3>
        </Link>
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
          <Button href={`/donate/${cause.slug}`} variant="primary" size="sm">
            Donate
          </Button>
        </div>
      </div>
    </div>
  );
}
