import Link from "next/link";
import Image from "next/image";
import { Play } from "@phosphor-icons/react/dist/ssr";
import { BlogPost } from "@/types";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col">
      <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-sand">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {post.videoLink && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-cream/95 px-3 py-1 text-xs font-medium text-navy">
            <Play size={12} weight="fill" className="text-gold-ink" aria-hidden="true" />
            Video
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col pt-5">
        <p className="eyebrow">{post.category}</p>
        <h3 className="mt-2 line-clamp-2 text-2xl leading-snug text-navy transition-colors group-hover:text-violet">
          {post.title}
        </h3>
        <p className="mt-3 line-clamp-3 flex-1 text-[15px] leading-relaxed text-muted">{post.excerpt}</p>
        <p className="mt-4 text-xs text-muted">
          {new Date(post.date).toLocaleDateString("en", { month: "long", day: "numeric", year: "numeric" })} · {post.readTime}
        </p>
      </div>
    </Link>
  );
}
