"use server"
import prisma from "@/util/prisma"

export const newTask = async (task: string) => {
    try {
        await prisma.task.create({
            data: {
                task: task,
            }
        })
        console.log("Tarefa criada com sucesso!")
    } catch (error) {
        console.error("Error ao criar tarefa: ", error)
        throw error
    }

}
