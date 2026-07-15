"use server"
import prisma from "@/util/prisma"

export const updateTask = async (idTask: string, newTask: string) => {

    try {
        if (!idTask || !newTask) return

        {/**Forma padrao para atualizar com o prisma para atualizar um unico registro*/ }
        const updateTask = await prisma.task.update({
            where: {
                id: idTask
            },
            data: {
                task: newTask

            }
        })

        return updateTask

    } catch (error) {
        console.error("Error ao atualizar tarefa: ", error)
        throw error
    }
}