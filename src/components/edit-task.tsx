
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { SquarePen } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { Task } from "@/generated/prisma/client";
import { atualizarTarefa } from "@/_actions/update_task";

interface EditTaskProps {
    task: Task;
    onUpdate: () => void;
}

const EditTask = ({ task, onUpdate }: EditTaskProps) => {

    const [currentTaskText, setCurrentTaskText] = useState(task.task)

    const handleSave = async () => {
        if (!currentTaskText.trim()) return;
        await atualizarTarefa(task.id, currentTaskText);
        onUpdate();

    }
    return (
        <Dialog>
            <DialogTrigger>
                <SquarePen size={16} className="cursor-pointer" />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Editar Tarefa
                    </DialogTitle>
                </DialogHeader>
                <div>
                    <Input className="mb-2"
                        placeholder="Editar tarefa..."
                        value={currentTaskText}
                        onChange={(e) => setCurrentTaskText(e.target.value)} />
                    <Button className="cursor-pointer" onClick={handleSave} >Editar</Button>
                </div>
            </DialogContent>

        </Dialog >
    )

}

export default EditTask;
