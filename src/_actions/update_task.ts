"use server"
import prisma from "@/util/prisma"

export const atualizarTarefa = async (idTarefa: string, novoTextoTarefa: string) => {

    try {
        if (!idTarefa || !novoTextoTarefa) return

        {/**Forma padrao para atualizar com o prisma para atualizar um unico registro*/ }
        const tarefaAtualizada = await prisma.task.update({
            where: {
                id: idTarefa
            },
            data: {
                task: novoTextoTarefa

            }
        })

        return tarefaAtualizada

    } catch (error) {
        console.error("Error ao atualizar tarefa: ", error)
        throw error
    }
}