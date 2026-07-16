"use server"
import prisma from "@/util/prisma"

export const obterTarefas = async () => {
    try {
        const tarefas = await prisma.task.findMany()

        if (!tarefas) return

        console.log("tarefas buscadas no banco: ", tarefas)
        return tarefas
    } catch (error) {
        console.error("Erro ao buscar tarefas: ", error)
        throw error
    }
}