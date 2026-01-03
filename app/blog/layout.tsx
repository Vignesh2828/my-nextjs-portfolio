export const metadata = {
  title: "Blog | Vigneshwaran",
  description: "Thoughts on software, web development, and engineering",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-12 pb-8 border-b border-gray-200">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              vigneshdev.in/blog
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Thoughts on software, web development, and engineering
            </p>
          </div>
          {children}
        </div>
      </main>
    </>
  );
}