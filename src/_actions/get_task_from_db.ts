"use server"
import prisma from "@/util/prisma"

export const getTasks = async () => {
    try {
        const tasks = await prisma.task.findMany()

        if (!tasks) return

        console.log("tarefas buscadas no banco: ", tasks)
        return tasks
    } catch (error) {
        console.error("Erro ao buscar tarefas: ", error)
        throw error
    }
}