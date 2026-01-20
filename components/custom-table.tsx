import { type LucideIcon, Compass, Eye, Flag, ListChecks, Map, Megaphone, Rocket, Settings } from "lucide-react"

const iconLookup = {
  vision: Eye,
  strategy: Map,
  evangelism: Megaphone,
  prioritization: ListChecks,
  principles: Compass,
  execution: Settings,
  "go-to-market": Rocket,
  default: Flag,
}

type IconKey = keyof typeof iconLookup

type StrategicLayer = {
  layer: string
  focus: string
  keyQuestion?: string
  icon?: IconKey
}

type CustomTableProps = {
  rows: StrategicLayer[]
}

export function CustomTable({ rows }: CustomTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border bg-card/60 shadow-sm">
      <table className="min-w-full table-fixed border-collapse text-left">
        <thead className="border-b border-border/80 bg-muted/40 text-sm uppercase tracking-wide text-muted-foreground">
          <tr>
            <th className="px-4 py-3 font-semibold">Strategic Layer</th>
            <th className="px-4 py-3 font-semibold">Focus</th>
            <th className="px-4 py-3 font-semibold">Key Question</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/70">
          {rows.map((row) => {
            const iconKey = row.icon ?? "default"
            const Icon: LucideIcon | undefined = iconLookup[iconKey]

            return (
              <tr key={row.layer} className="align-top">
                <td className="px-4 py-4">
                  <div className="flex items-start gap-3">
                    {Icon ? <Icon className="mt-0.5 h-5 w-5 text-muted-foreground" aria-hidden /> : null}
                    <span className="text-base font-semibold">{row.layer}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-base text-muted-foreground">{row.focus}</td>
                <td className="px-4 py-4 text-base text-muted-foreground">{row.keyQuestion}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
