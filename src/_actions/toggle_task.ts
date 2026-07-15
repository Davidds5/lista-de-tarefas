"use server"
import prisma from "@/util/prisma"

export const toggerTaskDone = async (idTask: string, currentStatus: boolean) => {
    try {
        if (!idTask) return

        const updated = await prisma.task.update({
            where: {
                id: idTask
            },
            data: {
                done: !currentStatus // inverte o valor, se for true vira false, 
                // se for false vira true
            }
        })

        return updated

    } catch (error) {
        console.error("Erro ao alterna status de tarefa: ", error)
        throw error
    }

}