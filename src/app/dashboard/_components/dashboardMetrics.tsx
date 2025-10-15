import { Card, CardContent } from "@/components/ui/card"
import { Timer, MapPin, TrendingUp, Calendar } from "lucide-react"

interface MetricsOverviewProps {
  totalDistance: number
  totalDuration: number
  averagePace: number
  totalSessions: number
}

export function MetricsOverview({ totalDistance, totalDuration, averagePace, totalSessions }: MetricsOverviewProps) {
  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = Math.floor(minutes % 60)
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`
  }

  const formatPace = (pace: number) => {
    const minutes = Math.floor(pace)
    const seconds = Math.floor((pace - minutes) * 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const metrics = [
    {
      title: "Distância Total",
      value: `${totalDistance.toFixed(1)} km`,
      icon: MapPin,
      color: "text-chart-1",
    },
    {
      title: "Tempo Total",
      value: formatTime(totalDuration),
      icon: Timer,
      color: "text-chart-2",
    },
    {
      title: "Pace Médio",
      value: `${formatPace(averagePace)}/km`,
      icon: TrendingUp,
      color: "text-chart-3",
    },
    {
      title: "Total de Treinos",
      value: totalSessions.toString(),
      icon: Calendar,
      color: "text-chart-4",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <Card key={index} className="border-border bg-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">{metric.title}</p>
                <p className="text-2xl font-bold text-card-foreground">{metric.value}</p>
              </div>
              <div className={`p-2 rounded-lg bg-muted ${metric.color}`}>
                <metric.icon className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
