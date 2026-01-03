import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

export default function BlogList() {
  const posts = getAllPosts().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No blog posts yet. Coming soon!</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="group relative bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all duration-200"
        >
          <Link href={`/blog/${post.slug}`} className="block">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-3 line-clamp-2">
                  {post.description}
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <time className="text-gray-500" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span className="text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                    Read article →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}