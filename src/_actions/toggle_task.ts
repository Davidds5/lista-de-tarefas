"use server"
import prisma from "@/util/prisma"

export const alternarStatusTarefa = async (idTarefa: string, statusAtual: boolean) => {
    try {
        if (!idTarefa) return

        const tarefaAtualizada = await prisma.task.update({
            where: {
                id: idTarefa
            },
            data: {
                done: !statusAtual // inverte o valor, se for true vira false, 
                // se for false vira true
            }
        })

        return tarefaAtualizada

    } catch (error) {
        console.error("Erro ao alterna status de tarefa: ", error)
        throw error
    }

}