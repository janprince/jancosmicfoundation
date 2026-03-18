import { getBlogPosts } from '@/lib/api';
import BlogPageContent from './BlogPageContent';

export default async function BlogPage() {
  const posts = await getBlogPosts();
  return <BlogPageContent posts={posts} />;
}
