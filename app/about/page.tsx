import Link from "next/link"

export default function AboutPage() {
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
            <span className="font-mono text-sm underline">/about</span>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12">
        <div className="mb-12">
          <h1 className="mb-2 font-mono text-sm text-muted-foreground">~/about</h1>
          <div className="text-4xl font-light leading-tight tracking-tight">Hi, I&apos;m [Your Name]</div>
        </div>

        <div className="prose prose-neutral max-w-none dark:prose-invert">
          <p className="text-lg text-muted-foreground">
            Software engineer, product builder, and infrastructure enthusiast.
          </p>

          <div className="mt-8 space-y-6 text-foreground/90">
            <p>
              I write about software development, product strategy, and building reliable systems at scale. My work
              focuses on the intersection of engineering excellence and practical problem-solving.
            </p>

            <p>
              Currently building at [Company], where I work on [brief description]. Previously, I&apos;ve worked on
              [previous experience].
            </p>

            <p>When I&apos;m not coding, you&apos;ll find me [hobbies/interests].</p>
          </div>

          <div className="mt-12 border-t border-border pt-8">
            <h2 className="mb-4 font-mono text-sm text-muted-foreground">CONNECT</h2>
            <div className="flex flex-col gap-2 font-mono text-sm">
              <a href="https://github.com" className="hover:underline">
                github.com/username
              </a>
              <a href="https://twitter.com" className="hover:underline">
                twitter.com/username
              </a>
              <a href="mailto:hello@example.com" className="hover:underline">
                hello@example.com
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
