import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types";
import Badge from "@/components/ui/Badge";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block cursor-pointer">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-semibold tracking-wide uppercase text-[#000B58] shadow-sm backdrop-blur-sm">
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
            <span>{new Date(post.date).toLocaleDateString("en", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>{post.readTime}</span>
          </div>
          <h3 className="text-lg font-semibold text-[#000B58] group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-gray-600 line-clamp-3 flex-1">
            {post.excerpt}
          </p>
          <div className="mt-4 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-semibold text-primary">
              {post.author.name.charAt(0)}
            </div>
            <span className="text-sm text-gray-600">{post.author.name}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
