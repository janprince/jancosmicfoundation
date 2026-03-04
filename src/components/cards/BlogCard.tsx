import Link from "next/link";
import { BlogPost } from "@/types";
import Badge from "@/components/ui/Badge";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className="relative h-48 md:h-52 overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-[#D4A843]/30 to-[#2D6A4F] group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute top-4 left-4 z-10">
            <Badge variant="secondary">{post.category}</Badge>
          </div>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
            <span>{new Date(post.date).toLocaleDateString("en", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>{post.readTime}</span>
          </div>
          <h3 className="text-lg font-semibold text-[#000B58] group-hover:text-[#2D6A4F] transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-gray-600 line-clamp-3 flex-1">
            {post.excerpt}
          </p>
          <div className="mt-4 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#2D6A4F]/20 flex items-center justify-center text-xs font-semibold text-[#2D6A4F]">
              {post.author.name.charAt(0)}
            </div>
            <span className="text-sm text-gray-600">{post.author.name}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
