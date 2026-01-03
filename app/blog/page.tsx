import BlogList from "@/components/blog/blog-list";

export default function BlogPage() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">All Posts</h2>
        <BlogList />
      </div>
    </div>
  );
}