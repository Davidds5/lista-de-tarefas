"use client"
import EditTask from "@/components/edit-task";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Plus, List, Check, X, Trash, ListCheck, Sigma } from 'lucide-react';
import { obterTarefas } from "@/_actions/get_task_from_db";
import { useState, useEffect } from "react";
import { Task } from "@/generated/prisma/client";
import { TaskScalarFieldEnum } from "@/generated/prisma/internal/prismaNamespace";
import { adicionarTarefa } from "@/_actions/add_task";
import { deletarTarefa } from "@/_actions/delete_task";
import { alternarStatusTarefa } from "@/_actions/toggle_task";

const Home = () => {

  const [minhasTarefas, setAtualizarTarefas] = useState<Task[]>([])
  const [inputTarefa, setInputTarefa] = useState<string>('')


  const handleBuscarTarefas = async () => {
    try {
      const tarefasObtidas = await obterTarefas();
      if (!tarefasObtidas) return

      setAtualizarTarefas(tarefasObtidas)

    } catch (error) {
      console.error("Erro ao buscar tarefas: ", error)
      throw (error)
    }


  }


  const handleAdicionarTarefa = async () => {

    if (inputTarefa.length === 0 || !inputTarefa) return


    await adicionarTarefa(inputTarefa)
    await handleBuscarTarefas()
    setInputTarefa('')
  }

  const handleDeletarTarefa = async (id: string) => {
    try {
      await deletarTarefa(id)
      await handleBuscarTarefas()
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error)
    }
  }

  const handleAlternarTarefa = async (id: string, statusAtual: boolean) => {
    try {
      await alternarStatusTarefa(id, statusAtual)
      await handleBuscarTarefas();

    } catch (error) {
      console.error("Erro ao alternar status ", error)
      throw error
    }
  }


  useEffect(() => {
    handleBuscarTarefas()
  }, [])


  const totalDeTarefas = minhasTarefas.length;
  const tarefaConluidas = minhasTarefas.filter(tarefa => tarefa.done).length
  const porcentagemProgresso = totalDeTarefas > 0 ? (tarefaConluidas / totalDeTarefas) * 100 : 0;


  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-lg p-6">

        <div className="flex gap-2">
          <Input placeholder="Adicionar tarefa" value={inputTarefa} onChange={(e) => setInputTarefa(e.target.value)} />
          <Button variant={"default"} className="cursor-pointer" onClick={handleAdicionarTarefa} > <Plus />Cadastra</Button>
        </div>


        <Separator className="mt-4" />

        { /**tags de finalizados pendentes e concluidos*/}
        <div className="flex py-2 gap-2">
          <Badge className="cursor-pointer" variant="default"><List />Todas</Badge>
          <Badge className="cursor-pointer" variant={"outline"}><X />Pendentes</Badge>
          <Badge className="cursor-pointer" variant={"outline"}><Check />Concluídas</Badge>
        </div>

        {/**Lista de tarefas */}
        <div className="  border-b-1">

          {minhasTarefas.map(task =>
            <div key={task.id} className="h-10 flex justify-between items-center border-t-1 ">
              <div className="w-1 h-full bg-blue-400"></div>

              <p className={`text-sm flex-1 px-2 cursor-pointer hover:text-gray-700 ${task.done ? `line-through text-gray-400` : ''}`}
                onClick={() => handleAlternarTarefa(task.id, task.done)}>
                {task.task}
              </p>
              <div className="flex items-center gap-1">

                {/**edit-task.tsx */}
                <EditTask task={task} onUpdate={handleBuscarTarefas} />

                <Trash
                  size={16}
                  className="cursor-pointer text-red-500 hover:text-red-700 transition-colors"
                  onClick={() => handleDeletarTarefa(task.id)}
                />
              </div>
            </div>)}
        </div>

        { /**Area tarefas concluidas, Limpar tarefas  */}
        <div className=" flex justify-between items-center mt-4">
          <div className="flex gap-1 items-center">
            <ListCheck size={16} />
            <p className="text-xs">tarefas concluidas ({tarefaConluidas} / {totalDeTarefas})</p>
          </div>
          <Button className="text-xs h-6 cursor-pointer"><Trash />
            Limpar tarefas concluidas
          </Button>
        </div>

        { /** Barra de porcentagem*/}
        <div className="w-full h-2 bg-gray-200 rounded-md mt-2">
          <div className="h-full bg-blue-500 rounded-md" style={{ width: `${porcentagemProgresso}%` }}></div>
        </div>

        { /**Tarefas no total */}
        <div className="flex mt-2 justify-end items-center gap-1">
          <Sigma size={16} />
          <p className="text-xs">{totalDeTarefas} Tarefas no Total</p>
        </div>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="text-xs h-7 cursor-pointer" variant={"outline"}>Limpar tarefas concluidas</Button>
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Tem certeza que deseja excluir x itens ?</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction className="cursor-pointer">Sim, excluir</AlertDialogAction>
              <AlertDialogCancel className="cursor-pointer">Cancelar</AlertDialogCancel>
            </AlertDialogFooter>


          </AlertDialogContent>
        </AlertDialog>




      </Card >
    </main >
  )
}

export default Home