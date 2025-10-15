import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Target, Users, BarChart3, MapPin, Award } from "lucide-react"

const features = [
  {
    icon: Activity,
    title: "Monitoramento em Tempo Real",
    description: "Acompanhe sua velocidade, distância, tempo e calorias queimadas durante cada corrida.",
  },
  {
    icon: Target,
    title: "Definição de Metas",
    description: "Estabeleça objetivos personalizados e receba notificações para manter-se motivado.",
  },
  {
    icon: BarChart3,
    title: "Análise de Performance",
    description: "Visualize seu progresso com gráficos detalhados e estatísticas avançadas.",
  },
  {
    icon: MapPin,
    title: "Rotas Personalizadas",
    description: "Descubra novas rotas e salve seus percursos favoritos com GPS integrado.",
  },
  {
    icon: Users,
    title: "Comunidade Ativa",
    description: "Conecte-se com outros corredores, participe de desafios e compartilhe conquistas.",
  },
  {
    icon: Award,
    title: "Sistema de Conquistas",
    description: "Desbloqueie medalhas e troféus conforme alcança novos marcos pessoais.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Recursos Que Fazem a Diferença</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Tudo que você precisa para transformar sua paixão por corrida em resultados concretos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-balance">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
