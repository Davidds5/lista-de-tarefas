"use server"
import prisma from "@/util/prisma"

export const getTasks = async () => {
    try {
        const tasks = await prisma.task.findMany()

        if (!tasks) return

        return tasks
    } catch (error) {
        throw error
    }
}