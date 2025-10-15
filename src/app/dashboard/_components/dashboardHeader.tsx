import { Activity, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-accent rounded-lg">
          <Activity className="h-6 w-6 text-accent-foreground" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Minha Dashboard</h1>
          <p className="text-muted-foreground">Acompanhe seu progresso nos treinos</p>
        </div>
      </div>
    </header>
  )
}
