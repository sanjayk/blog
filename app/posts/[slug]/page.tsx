import Link from "next/link"
import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug } from "@/lib/posts"
import { MDXRemote } from "next-mdx-remote/rsc"
import { ProductToolkitGrid } from "@/components/product-toolkit-grid"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-border px-4 py-3">
        <nav className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href="/" className="font-mono text-sm hover:underline">
            ← [index]
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
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12">
        <article>
          <div className="mb-8 space-y-4 border-b border-border pb-8">
            <div className="flex items-center gap-3">
              <time className="font-mono text-xs text-muted-foreground">{post.date}</time>
              <span className="inline-flex items-center rounded-sm border border-border px-2 py-0.5 font-mono text-xs">
                {post.category}
              </span>
              <span className="font-mono text-xs text-muted-foreground">{post.readTime}</span>
            </div>
            <h1 className="text-balance text-4xl font-light leading-tight tracking-tight md:text-5xl">{post.title}</h1>
            {post.author && (
              <div className="flex items-center gap-2 pt-2">
                <span className="font-mono text-xs text-muted-foreground">by</span>
                <span className="text-sm">{post.author}</span>
              </div>
            )}
          </div>

          <div className="prose prose-neutral max-w-none dark:prose-invert">
            <MDXRemote source={post.content} components={{ ProductToolkitGrid }} />
          </div>
        </article>

        <div className="mt-12 border-t border-border pt-8">
          <Link href="/" className="inline-flex items-center gap-2 font-mono text-sm hover:underline">
            ← Back to posts
          </Link>
        </div>
      </main>
    </div>
  )
}
