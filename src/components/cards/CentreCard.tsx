import Link from "next/link";
import Image from "next/image";
import { Centre } from "@/types";
import Button from "@/components/ui/Button";

export default function CentreCard({ centre }: { centre: Centre }) {
  return (
    <Link href={`/centres/${centre.slug}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <Image
            src="/images/group-of-students.jpg"
            alt={centre.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute bottom-4 left-4 z-10 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
            <span className="text-xs font-medium text-[#000B58]">
              {centre.country}
            </span>
          </div>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-lg font-semibold text-[#000B58] group-hover:text-[#2D6A4F] transition-colors">
            {centre.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{centre.location}</p>
          <p className="mt-3 text-sm text-gray-600 line-clamp-2 flex-1">
            {centre.description}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#D4A843]/20 flex items-center justify-center text-xs font-semibold text-[#D4A843]">
                {centre.leader.name.charAt(0)}
              </div>
              <div>
                <p className="text-xs font-medium text-[#000B58]">
                  {centre.leader.name}
                </p>
                <p className="text-xs text-gray-400">{centre.leader.title}</p>
              </div>
            </div>
            <span className="text-xs text-[#2D6A4F] font-medium">
              {centre.memberCount} members
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
