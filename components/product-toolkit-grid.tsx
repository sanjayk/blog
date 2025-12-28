import type React from "react"
import {
  Lightbulb,
  Book,
  Target,
  FileText,
  ListChecks,
  Map,
  Rocket,
  LayoutDashboard,
  FlaskConical,
  PenTool,
  Palette,
  Users,
  Megaphone,
  KanbanSquare,
  DollarSign,
  BarChart3,
  TrendingUp,
  Timer,
  LifeBuoy,
  ShieldCheck,
} from "lucide-react"

type Item = {
  key: string
  title: string
  description: string
  Icon: React.ComponentType<{ className?: string }>
}

export function ProductToolkitGrid() {
  const items: Item[] = [
    { key: "ideas", title: "IDEAS", description: "A place to store all your ideas.", Icon: Lightbulb },
    { key: "domain", title: "DOMAIN KB", description: "Domain knowledge to ramp new folks.", Icon: Book },
    { key: "strategy", title: "STRATEGY", description: "Distilled strategy you want to pursue.", Icon: Target },
    { key: "mrd", title: "MRD", description: "Market requirements, problem statements, and segments.", Icon: FileText },
    { key: "prd", title: "PRD", description: "Product requirements, scope, and constraints.", Icon: ListChecks },
    { key: "roadmap", title: "ROADMAP", description: "Sequence, themes, and delivery plan.", Icon: Map },
    { key: "releases", title: "RELEASES", description: "Release schedule and notes.", Icon: Rocket },
    { key: "wireframes", title: "WIREFRAMES", description: "Low-fidelity flows and structures.", Icon: LayoutDashboard },
    { key: "prototype", title: "PROTOTYPE", description: "Clickable prototypes and experiments.", Icon: FlaskConical },
    { key: "design", title: "DESIGN", description: "High-fidelity design artifacts.", Icon: PenTool },
    { key: "uxr", title: "UX RESEARCH", description: "User interviews, surveys, and findings.", Icon: Users },
    { key: "adoption", title: "ADOPTION", description: "Activation and onboarding flows.", Icon: Palette },
    { key: "collab", title: "COLLAB", description: "Stakeholder alignment and rituals.", Icon: Users },
    { key: "comms", title: "COMMS", description: "Release notes and announcements.", Icon: Megaphone },
    { key: "backlog", title: "BACKLOG", description: "Prioritized issues and epics.", Icon: KanbanSquare },
    { key: "funding", title: "FUNDING", description: "Runway, budgets, and burn.", Icon: DollarSign },
    { key: "metrics", title: "METRICS", description: "KPIs, dashboards, and trends.", Icon: BarChart3 },
    { key: "experiments", title: "EXPERIMENTS", description: "AB tests and learnings.", Icon: FlaskConical },
    { key: "growth", title: "GROWTH", description: "Acquisition and retention loops.", Icon: TrendingUp },
    { key: "productivity", title: "PRODUCTIVITY", description: "Velocity and execution health.", Icon: Timer },
    { key: "support", title: "SUPPORT", description: "Support channels and SLAs.", Icon: LifeBuoy },
    { key: "compliance", title: "COMPLIANCE", description: "Regulatory and compliance tasks.", Icon: ShieldCheck },
    { key: "gtm", title: "GTM", description: "Go-to-market plans and assets.", Icon: Megaphone },
  ]

  return (
    <section>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={item.key}
            className="group flex h-full flex-col gap-4 rounded-lg border border-border/70 bg-background/60 p-4 shadow-[0_1px_0_rgba(0,0,0,0.05)] transition-colors hover:border-foreground/40 hover:bg-background"
          >
            <div className="flex items-center justify-between">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-foreground/80">
                <item.Icon className="h-4 w-4" aria-hidden="true" />
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                {(index + 1).toString().padStart(2, "0")}
              </span>
            </div>
            <div className="space-y-1">
              <div className="text-lg font-semibold tracking-tight text-foreground">{item.title}</div>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
