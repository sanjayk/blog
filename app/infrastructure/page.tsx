import Link from "next/link"
import { getAllPosts } from "@/lib/posts"
import { PostList } from "@/components/post-list"

export default function InfrastructurePage() {
  const posts = getAllPosts().filter((post) => post.category === "Infrastructure")

  return (
    <div className="min-h-screen">
      <header className="border-b border-border px-4 py-3">
        <nav className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="font-mono text-sm hover:underline">
            [index]
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/developer" className="font-mono text-sm hover:underline">
              /dev
            </Link>
            <Link href="/product" className="font-mono text-sm hover:underline">
              /product
            </Link>
            <span className="font-mono text-sm underline">/infra</span>
            <Link href="/about" className="font-mono text-sm hover:underline">
              /about
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-12">
          <h1 className="mb-2 font-mono text-sm text-muted-foreground">~/infrastructure</h1>
          <div className="text-4xl font-light leading-tight tracking-tight">
            Systems, scaling, and operational excellence.
          </div>
        </div>

        <PostList posts={posts} category="Infrastructure" />
      </main>
    </div>
  )
}
