import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

const components = {
  h1: (props: any) => (
    <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl font-bold mt-8 mb-3 text-gray-800" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800" {...props} />
  ),
  p: (props: any) => (
    <p className="my-4 text-gray-700 leading-relaxed" {...props} />
  ),
  a: (props: any) => (
    <a
      className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
      {...props}
    />
  ),
  ul: (props: any) => (
    <ul className="my-4 ml-6 list-disc text-gray-700 space-y-2" {...props} />
  ),
  ol: (props: any) => (
    <ol className="my-4 ml-6 list-decimal text-gray-700 space-y-2" {...props} />
  ),
  li: (props: any) => {
    // Custom li component to handle links in list items
    const children = props.children;

    if (typeof children === "string") {
      // Check for patterns like "**GitHub** https://..."
      const parts = children.split(/(\*\*.*?\*\*)/g);

      if (parts.length > 1) {
        // Process bold text and URLs
        const processedParts = parts.map((part: string, index: number) => {
          if (part.match(/^\*\*.*\*\*$/)) {
            // Extract bold text
            const boldText = part.replace(/\*\*/g, "");
            // Check if next part is a URL
            const nextPart = parts[index + 1] || "";
            const urlMatch = nextPart.trim().match(/(https?:\/\/[^\s]+)/);

            if (urlMatch) {
              const url = urlMatch[0];
              return (
                <span key={index}>
                  <strong>{boldText}</strong>
                  <br />
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline font-medium text-sm"
                  >
                    {url}
                  </a>
                </span>
              );
            }
            return <strong key={index}>{boldText}</strong>;
          }
          return part;
        });

        return <li className="pl-2">{processedParts}</li>;
      }
    }

    return <li className="pl-2" {...props} />;
  },
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-blue-500 pl-4 my-6 italic text-gray-600 bg-blue-50 py-2"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6 text-sm font-mono"
      {...props}
    />
  ),
  hr: (props: any) => (
    <hr className="my-8 border-t border-gray-300" {...props} />
  ),
  img: (props: any) => {
    if (props.src && !props.src.startsWith("http")) {
      return (
        <div className="my-8">
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
            <Image
              src={`/blog-images/${props.src}`}
              alt={props.alt || "Blog post image"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          {props.alt && (
            <p className="text-center text-sm text-gray-500 mt-2 italic">
              {props.alt}
            </p>
          )}
        </div>
      );
    }

    return (
      <div className="my-8">
        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={props.src}
            alt={props.alt || "Blog post image"}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        {props.alt && (
          <p className="text-center text-sm text-gray-500 mt-2 italic">
            {props.alt}
          </p>
        )}
      </div>
    );
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const file = fs.readFileSync(
    path.join(BLOG_DIR, `${params.slug}.mdx`),
    "utf8"
  );

  const { content, data } = matter(file);

  const posts = fs.readdirSync(BLOG_DIR).map((file) => {
    const slug = file.replace(".mdx", "");
    const postData = matter(
      fs.readFileSync(path.join(BLOG_DIR, file), "utf8")
    ).data;
    return { slug, title: postData.title, date: postData.date };
  });

  const sortedPosts = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const currentIndex = sortedPosts.findIndex(
    (post) => post.slug === params.slug
  );
  const nextPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;
  const prevPost =
    currentIndex < sortedPosts.length - 1
      ? sortedPosts[currentIndex + 1]
      : null;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Back link */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 hover:underline"
        >
          ← Back to all posts
        </Link>
      </div>

      {/* Article header WITH IMAGE */}
      <header className="mb-12">
        {/* Display featured image if exists in frontmatter */}
        {data.image && (
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
            <div className="relative w-full h-64 md:h-80 lg:h-96">
              <Image
                src={data.image}
                alt={data.title || "Blog post featured image"}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>
        )}

        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {data.title}
        </h1>
        <div className="flex items-center gap-4 text-gray-600">
          <time className="text-sm" dateTime={data.date}>
            {new Date(data.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="text-gray-300">•</span>
          <span className="text-sm">
            {Math.max(1, Math.ceil(content.split(" ").length / 200))} min read
          </span>
        </div>
        {data.description && (
          <p className="mt-6 text-lg text-gray-700 italic border-l-4 border-blue-500 pl-4 py-2 bg-blue-50">
            {data.description}
          </p>
        )}
      </header>

      {/* Article content */}
      <article className="prose prose-lg prose-blue max-w-none">
        <div className="border-t border-gray-200 pt-8">
          <MDXRemote source={content} components={components} />
        </div>
      </article>

      {/* Post navigation */}
      <div className="mt-16 pt-8 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          {prevPost && (
            <Link href={`/blog/${prevPost.slug}`} className="group flex-1">
              <div className="text-left">
                <p className="text-sm text-gray-500 mb-1">Previous post</p>
                <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors flex items-center gap-1">
                  <ChevronsLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  {prevPost.title}
                </p>
              </div>
            </Link>
          )}

          {nextPost && (
            <Link href={`/blog/${nextPost.slug}`} className="group flex-1">
              <div className="text-right">
                <p className="text-sm text-gray-500 mb-1">Next post</p>
                <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors flex items-center justify-end gap-1">
                  {nextPost.title}
                  <ChevronsRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
