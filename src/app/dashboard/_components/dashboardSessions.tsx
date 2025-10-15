import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Timer } from "lucide-react"
import { training_session } from "@prisma/client"
import { getTrainingSessionsByUserId } from "@/server/training_session/actions"


 

export async function SessionsList() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = Math.floor(minutes % 60)
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`
  }

  const calculatePace = (distance: number, duration: number) => {
    const pace = duration / distance
    const minutes = Math.floor(pace)
    const seconds = Math.floor((pace - minutes) * 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const trainingSessions = await getTrainingSessionsByUserId();

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-card-foreground">
          <Calendar className="h-5 w-5 text-accent" />
          Treinos Recentes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-2 font-medium text-muted-foreground">Data</th>
                <th className="text-left py-3 px-2 font-medium text-muted-foreground">Distância</th>
                <th className="text-left py-3 px-2 font-medium text-muted-foreground">Duração</th>
                <th className="text-left py-3 px-2 font-medium text-muted-foreground">Pace</th>
              </tr>
            </thead>
            <tbody>
              {trainingSessions.map((session) => (
                <tr key={session.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium text-card-foreground">{formatDate(String(session.run_date))}</span>
                    </div>
                  </td>
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-card-foreground">{String(session.distance_km)} km</span>
                    </div>
                  </td>
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-2">
                      <Timer className="h-4 w-4 text-muted-foreground" />
                      <span className="text-card-foreground">{formatTime(Number(session.duration_minutes))}</span>
                    </div>
                  </td>
                  <td className="py-4 px-2">
                    <Badge variant="secondary" className="bg-muted text-foreground border-border">
                      {calculatePace(Number(session.distance_km), Number(session.duration_minutes))}/km
                    </Badge>
                  </td>
                </tr>
              ))}
              {trainingSessions.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center py-6 text-muted-foreground ">
                    Nenhum treino registrado ainda.
                    </td>  
                </tr>
                )}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
