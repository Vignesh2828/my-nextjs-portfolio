import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export function getAllPosts() {
  return fs.readdirSync(BLOG_DIR).map((file) => {
    const slug = file.replace(".mdx", "");
    const { data } = matter(
      fs.readFileSync(path.join(BLOG_DIR, file), "utf8")
    );

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
    };
  });
}
