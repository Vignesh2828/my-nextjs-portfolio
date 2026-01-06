// app/blog/page.tsx
import BlogList from "@/components/blog/blog-list";
import SearchBar from "@/components/blog/search-bar";
import { getAllPosts } from "@/lib/blog";

interface BlogPageProps {
  searchParams?: {
    q?: string;
  };
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const searchQuery = searchParams?.q || "";
  const allPosts = getAllPosts().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  // Filter posts based on search query
  const filteredPosts = searchQuery
    ? allPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allPosts;

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Header with Search */}
      <div className="mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">My Blog</h1>
            <p className="text-gray-600">
              {searchQuery ? `${filteredPosts.length} of ${allPosts.length}` : allPosts.length} 
              {allPosts.length === 1 ? ' article' : ' articles'}
              {searchQuery && ` found for "${searchQuery}"`}
            </p>
          </div>
          
          {/* Search Bar Component */}
          <SearchBar initialQuery={searchQuery} />
        </div>

        {/* Search results info */}
        {searchQuery && (
          <div className="flex items-center justify-between py-3 px-4 bg-blue-50 rounded-lg">
            <div>
              <p className="text-sm text-gray-700">
                Showing results for "<span className="font-semibold">{searchQuery}</span>"
              </p>
            </div>
            <a
              href="/blog"
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              Clear search
            </a>
          </div>
        )}
      </div>

      <BlogList posts={filteredPosts} />
    </div>
  );
}