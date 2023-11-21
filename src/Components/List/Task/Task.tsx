import { ITask } from '../List'
import styles from './Task.module.css'
import { FaRegTrashAlt } from "react-icons/fa"

interface TaskProps {
    task: ITask
    onDeleteTask: (id: number) => void
}

export function Task({ task, onDeleteTask }: TaskProps) {

    function deleteTask() {
        onDeleteTask(task.id)
    }

    return (
        <div className={styles.task}>
            <div className={styles.content}>
                <input className={styles.checkbox} type="checkbox" checked={task.checked} />
                <p>
                    {task.content}
                </p>
            </div>
            <FaRegTrashAlt onClick={deleteTask} title='Excluir tarefa' />
        </div>
    )
}