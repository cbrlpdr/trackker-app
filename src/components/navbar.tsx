import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs"
import { ChevronsRight } from "lucide-react"
import Link from "next/link"

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div>
                        {/* Logo */}    
                        <div className="flex items-center">
                            <ChevronsRight className="h-6 w-6 text-primary" />
                            <span className="text-xl font-bold text-gray-900">Trackker</span>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#recursos" className="text-gray-700 hover:text-primary transition-colors">
                                Recursos
                            </a>
                            <a href="#sobre" className="text-gray-700 hover:text-primary transition-colors">
                                Sobre
                            </a>
                            <a href="#contato" className="text-gray-700 hover:text-primary transition-colors">
                                Contato
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        {/* CTA Button */}
                        <SignedOut>
                            <SignInButton>
                                <div className="flex items-center space-x-4">
                                    <Button className="bg-primary hover:bg-primary/90  cursor-pointer">Começar Agora</Button>
                                    <span className="text-gray-700 hover:text-primary transition-colors cursor-pointer">Entrar</span> 
                                </div>

                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton showName={true} />
                            <Link href="/dashboard">
                                <Button className="bg-primary hover:bg-primary/90">Dashboard</Button>
                            </Link>
                            <SignOutButton>
                                <Button className="bg-primary hover:bg-primary/90">Sair</Button>
                            </SignOutButton>
                        </SignedIn>
                    </div>
                </div>
            </div>
        </nav>
    )
}
