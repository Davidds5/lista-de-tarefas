
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { SquarePen } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";


const EditTask = () => {
    return (

        <Dialog>
            <DialogTrigger asChild>
                <SquarePen size={16} className="cursor-pointer" />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Editar Tarefa</DialogTitle>
                </DialogHeader>
                <div>
                    <Input className="mb-2" placeholder="Editar Tarefa ..." />
                    <Button className="cursor-pointer">Editar</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default EditTask;
