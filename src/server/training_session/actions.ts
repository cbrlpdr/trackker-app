"use server"

import { training_session } from "@/generated/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function updateOrCreateTrainingSession(trainingSession: training_session) {
    const user = await currentUser();
    await prisma.training_session.upsert({
        where: { id: trainingSession.id },
        update: {
            id: trainingSession.id,
            user_id: String(user?.id),
            run_date: trainingSession.run_date,
            distance_km: trainingSession.distance_km,
            duration_minutes: trainingSession.duration_minutes
        },
        create: {
            ...trainingSession, id: undefined, user_id: String(user?.id),
        },
    });
}

export async function getTrainingSessionsByUserId() {
    const user = await currentUser();
    if  (!user) throw new Error('User not found');

    return await prisma.training_session.findMany({
        where: { user_id: String(user?.id) },
        orderBy: { run_date: 'desc' }
    });
}

export async function getAveragePaceByUserId() {
    const userId = await currentUser();
    if  (!userId) throw new Error('User not found');

    const result = await prisma.$queryRaw<{ average_pace: number | null }[]>`
        SELECT AVG(duration_minutes / NULLIF(distance_km, 0)) AS average_pace
        FROM training_session
        WHERE user_id = ${userId.id};
    `;
    return result[0]?.average_pace || 0;
}