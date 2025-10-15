import { ChevronsRight, Instagram, Twitter, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <ChevronsRight className="h-8 w-8 text-secondary" />
              <span className="text-2xl font-bold">Tracker</span>
            </div>
            <p className="text-background/80 mb-6 max-w-md leading-relaxed">
              O app definitivo para corredores que querem alcançar seus objetivos e superar seus limites a cada corrida.
            </p>
            <div className="flex gap-4">
              <Instagram className="h-6 w-6 text-background/60 hover:text-secondary cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-background/60 hover:text-secondary cursor-pointer transition-colors" />
              <Facebook className="h-6 w-6 text-background/60 hover:text-secondary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Preços
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Comunidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; 2024 Tracker. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
