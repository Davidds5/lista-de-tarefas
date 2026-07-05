import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Plus, List, Check, X, SquarePen, Trash } from 'lucide-react';


const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-lg p-6">
        <div className="flex gap-2">

          <Input placeholder="Adicionar tarefa" />
          <Button variant={"default"} className="cursor-pointer"> <Plus />Cadastra</Button>
        </div>
        <Separator />

        <div className="flex py-2 gap-2">
          <Badge className="cursor-pointer"><List />Todas</Badge>
          <Badge className="cursor-pointer"><X />Pendentes</Badge>
          <Badge className="cursor-pointer"><Check />Concluídas</Badge>
        </div>

        <div className="py-2">

          <div className="h-10 flex justify-between items-center border-b-1 border-t-1">
            <div className="w-1 h-full bg-green-300"></div>
            <p className=" text-sm flex-1 px-2">Teste de mesa</p>
            <div className="flex items-center gap-1">
              <SquarePen size={20} className="cursor-pointer" />
              <Trash size={20} className="cursor-pointer" />
            </div>
          </div>

          <div className="h-10 flex justify-between items-center border-b-1 border-t-1">
            <div className="w-1 h-full bg-green-300"></div>
            <p className=" text-sm flex-1 px-2">Teste de mesa</p>
            <div className="flex items-center gap-1">
              <SquarePen size={20} className="cursor-pointer" />
              <Trash size={20} className="cursor-pointer" />
            </div>
          </div>

          <div className="h-10 flex justify-between items-center border-b-1 border-t-1">
            <div className="w-1 h-full bg-green-300"></div>
            <p className=" text-sm flex-1 px-2">Teste de mesa</p>
            <div className="flex items-center gap-1">
              <SquarePen size={20} className="cursor-pointer" />
              <Trash size={20} className="cursor-pointer" />
            </div>
          </div>
        </div>





      </Card >
    </main >
  )
}
export default Home