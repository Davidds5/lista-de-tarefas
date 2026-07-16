"use server"
import prisma from "@/util/prisma"

export const adicionarTarefa = async (textoTarefa: string) => {
    try {
        await prisma.task.create({
            data: {
                task: textoTarefa,
            }
        })
        console.log("Tarefa criada com sucesso!")
    } catch (error) {
        console.error("Error ao criar tarefa: ", error)
        throw error
    }

}
