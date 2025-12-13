import Link from "next/link"
import { getAllPosts } from "@/lib/posts"

export default function HomePage() {
  const posts = getAllPosts()

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
          <h1 className="mb-2 font-mono text-sm text-muted-foreground">~/writing</h1>
          <div className="text-4xl font-light leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Building thoughtful software,
            <br />
            one commit at a time.
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-border pb-2">
            <span className="font-mono text-xs text-muted-foreground">RECENT POSTS</span>
            <span className="font-mono text-xs text-muted-foreground">({posts.length})</span>
          </div>

          <div className="space-y-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/posts/${post.slug}`} className="group block">
                <article className="grid grid-cols-[120px_1fr_auto] items-start gap-6 border-b border-border/50 pb-6 transition-colors hover:border-foreground/20">
                  <div className="space-y-1 pt-1">
                    <time className="block font-mono text-xs text-muted-foreground">{post.date}</time>
                    <span className="block font-mono text-xs text-muted-foreground">{post.readTime}</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h2 className="text-balance text-2xl font-light tracking-tight transition-colors group-hover:text-foreground/70">
                        {post.title}
                      </h2>
                      <span className="inline-flex shrink-0 items-center rounded-sm border border-border px-2 py-0.5 font-mono text-xs">
                        {post.category}
                      </span>
                    </div>
                    <p className="text-pretty text-sm text-muted-foreground">{post.excerpt}</p>
                  </div>

                  <div className="shrink-0 pt-2 font-mono text-xs opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className="mt-24 border-t border-border px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
            <div>© 2025</div>
            <div className="flex gap-4">
              <a href="https://github.com" className="hover:text-foreground">
                github
              </a>
              <a href="https://twitter.com" className="hover:text-foreground">
                twitter
              </a>
              <a href="/rss" className="hover:text-foreground">
                rss
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
