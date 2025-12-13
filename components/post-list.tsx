import Link from "next/link"
import type { BlogPost } from "@/lib/posts"

interface PostListProps {
  posts: BlogPost[]
  category: string
}

export function PostList({ posts, category }: PostListProps) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-border pb-2">
        <span className="font-mono text-xs text-muted-foreground">{category.toUpperCase()} POSTS</span>
        <span className="font-mono text-xs text-muted-foreground">({posts.length})</span>
      </div>

      {posts.length === 0 ? (
        <p className="py-12 text-center font-mono text-sm text-muted-foreground">No posts yet. Check back soon.</p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/posts/${post.slug}`} className="group block">
              <article className="grid grid-cols-[120px_1fr_auto] items-start gap-6 border-b border-border/50 pb-6 transition-colors hover:border-foreground/20">
                <div className="flex flex-col gap-1 pt-1">
                  <time className="font-mono text-xs text-muted-foreground">{post.date}</time>
                  <span className="font-mono text-xs text-muted-foreground/60">{post.readTime}</span>
                </div>
                <div className="space-y-2">
                  <h2 className="text-balance text-2xl font-light tracking-tight transition-colors group-hover:text-foreground/70">
                    {post.title}
                  </h2>
                  <p className="text-pretty text-sm text-muted-foreground">{post.excerpt}</p>
                </div>
                <div className="shrink-0 pt-1 font-mono text-xs opacity-0 transition-opacity group-hover:opacity-100">
                  →
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
