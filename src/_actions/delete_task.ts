"use server"

import prisma from "@/util/prisma"

export const deletarTarefa = async (idTarefa: string) => {

    try {
        if (!idTarefa) return

        const tarefaDeletada = await prisma.task.delete({
            where: {
                id: idTarefa
            }
        })
        if (!tarefaDeletada) return

        return tarefaDeletada

    } catch (error) {
        console.error("Erro ao deletar tarefa", error)
        throw error
    }

}
export const excluirTarefasConcluidas = async () => {
    try {
        const resultado = await prisma.task.deleteMany({
            where: {
                done: true
            }
        })
        return resultado;
    } catch (error) {
        console.error("Erro ao concluir tarefas concluidas: ", error)
        throw error
    }
}
