"use server"

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
        console.error("Erro ao deletar tarefa", error)
        throw error
    }
}
