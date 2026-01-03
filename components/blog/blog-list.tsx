// components/blog/blog-list.tsx
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
}

interface BlogListProps {
  posts: BlogPost[];
  highlightQuery?: string;
}

export default function BlogList({ posts, highlightQuery = "" }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <p className="text-gray-500">No blog posts found.</p>
      </div>
    );
  }

  // Function to highlight search terms in text
  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-100 font-semibold">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="group relative bg-white p-4 sm:p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
        >
          <Link href={`/blog/${post.slug}`} className="block">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {highlightQuery ? highlightText(post.title, highlightQuery) : post.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4 sm:mb-6 line-clamp-2 sm:line-clamp-3">
                  {highlightQuery ? highlightText(post.description, highlightQuery) : post.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <time 
                        className="text-sm text-gray-500 shrink-0" 
                        dateTime={post.date}
                      >
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </time>
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-blue-600 font-medium group-hover:text-blue-800 transition-colors text-sm sm:text-base">
                    Read article
                    <svg 
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
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