import Link from "next/link"
import { getAllPosts } from "@/lib/posts"
import { PostList } from "@/components/post-list"

export default function DeveloperPage() {
  const posts = getAllPosts().filter((post) => post.category === "Developer")

  return (
    <div className="min-h-screen">
      <header className="border-b border-border px-4 py-3">
        <nav className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="font-mono text-sm hover:underline">
            [index]
          </Link>
          <div className="flex items-center gap-6">
            <span className="font-mono text-sm underline">/dev</span>
            <Link href="/product" className="font-mono text-sm hover:underline">
              /product
            </Link>
            <Link href="/infrastructure" className="font-mono text-sm hover:underline">
              /infra
            </Link>
            <Link href="/about" className="font-mono text-sm hover:underline">
              /about
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-12">
          <h1 className="mb-2 font-mono text-sm text-muted-foreground">~/developer</h1>
          <div className="text-4xl font-light leading-tight tracking-tight">
            Development practices, patterns, and code.
          </div>
        </div>

        <PostList posts={posts} category="Developer" />
      </main>
    </div>
  )
}
