"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CalendarIcon, ClockIcon, RouteIcon } from "lucide-react"
import { training_session } from "@/generated/prisma"
import { Decimal } from "@prisma/client/runtime/library"
import { useUser } from "@clerk/nextjs"
import { clerkClient, currentUser } from "@clerk/nextjs/server"
import { updateOrCreateTrainingSession } from "@/server/training_session/actions"
import { useRouter } from "next/navigation"

interface TrainingFormData {
    distance_km: string
    duration_minutes: string
    run_date: string
}

export function DashboardForm() {
    const [formData, setFormData] = useState<TrainingFormData>({
        distance_km: "",
        duration_minutes: "",
        run_date: new Date().toISOString().split("T")[0], // Data atual como padrão
    })

    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const handleInputChange = (field: keyof TrainingFormData, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)


        const duration_minutes = formData.duration_minutes;
        const distance_km = formData.distance_km;
        const run_date = formData.run_date;

        const training_session: training_session = {
            id: BigInt(0), // Será gerado pelo banco de dados
            distance_km: parseFloat(formData.distance_km as string) as unknown as Decimal,
            duration_minutes: parseFloat(formData.duration_minutes as string) as unknown as Decimal,
            run_date: new Date(formData.run_date as string),
            user_id: "", // Substitua pelo ID do usuário autenticado
        };


        // Simular delay de API
        await updateOrCreateTrainingSession(training_session);
        router.refresh();

        // Reset form
        setFormData({
            distance_km: "",
            duration_minutes: "",
            run_date: new Date().toISOString().split("T")[0],
        })

        setIsSubmitting(false)
    }

    const isFormValid = formData.distance_km && formData.duration_minutes && formData.run_date

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <RouteIcon className="h-5 w-5 text-accent" />
                    Registrar Novo Treino
                </CardTitle>
                <CardDescription>Adicione os detalhes da sua sessão de corrida</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="distance" className="flex items-center gap-2">
                                <RouteIcon className="h-4 w-4" />
                                Distância (km)
                            </Label>
                            <Input
                                id="distance"
                                name="distance"
                                type="number"
                                step="0.1"
                                min="0"
                                placeholder="5.2"
                                value={formData.distance_km}
                                onChange={(e) => handleInputChange("distance_km", e.target.value)}
                                className="text-base"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="duration" className="flex items-center gap-2">
                                <ClockIcon className="h-4 w-4" />
                                Duração (minutos)
                            </Label>
                            <Input
                                id="duration"
                                name="duration"
                                type="number"
                                step="0.1"
                                min="0"
                                placeholder="28.5"
                                value={formData.duration_minutes}
                                onChange={(e) => handleInputChange("duration_minutes", e.target.value)}
                                className="text-base"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="date" className="flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4" />
                            Data do Treino
                        </Label>
                        <Input
                            id="date"
                            name="date"
                            type="date"
                            value={formData.run_date}
                            onChange={(e) => handleInputChange("run_date", e.target.value)}
                            className="text-base"
                        />
                    </div>

                    <Button type="submit" className="w-full" disabled={!isFormValid || isSubmitting}>
                        {isSubmitting ? "Salvando..." : "Registrar Treino"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
