import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface BlogPost {
  slug: string
  title: string
  date: string
  category: "Developer" | "Product" | "Infrastructure"
  excerpt: string
  content: string
  readTime: string
  author?: string
}

const postsDirectory = path.join(process.cwd(), "content/posts")

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        date: data.date,
        category: data.category,
        excerpt: data.excerpt,
        content,
        readTime: data.readTime,
        author: data.author,
      } as BlogPost
    })

  // Sort by date descending
  return posts.sort((a, b) => {
    const dateA = new Date(a.date.replace(/\./g, "-"))
    const dateB = new Date(b.date.replace(/\./g, "-"))
    return dateB.getTime() - dateA.getTime()
  })
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date,
      category: data.category,
      excerpt: data.excerpt,
      content,
      readTime: data.readTime,
      author: data.author,
    } as BlogPost
  } catch {
    return undefined
  }
}

export function getPostsByCategory(category: "Developer" | "Product" | "Infrastructure"): BlogPost[] {
  return getAllPosts().filter((post) => post.category === category)
}
