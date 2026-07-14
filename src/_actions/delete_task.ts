"use server"
import { Task } from "@/generated/prisma/client"
import prisma from "@/util/prisma"

export const deletTask = async (idTask: string) => {

    try {
        if (!idTask) return

        const deletTask = await prisma.task.delete({
            where: {
                id: idTask
            }
        })
        if (!deletTask) return

        return deletTask

    } catch (error) {
        throw error
    }
}
