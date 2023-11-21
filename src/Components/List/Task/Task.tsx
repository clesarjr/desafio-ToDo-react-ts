import { ITask } from '../List'
import styles from './Task.module.css'
import { FaRegTrashAlt } from "react-icons/fa"

interface TaskProps {
    task: ITask,
    onDeleteTask: (id: number) => void,
    onCheckTask: (task: ITask) => void,
}

export function Task({ task, onDeleteTask, onCheckTask }: TaskProps) {

    function deleteTask() {
        onDeleteTask(task.id)
    }

    function checkTask() {
        task.checked = !task.checked
        onCheckTask(task)
    }

    const paragraphChecked = task.checked
    ? styles['paragraph-checked']
    : ''

    return (
        <div className={styles.task}>
            <div className={styles.content}>
                <input 
                    className={styles.checkbox} 
                    type="checkbox" 
                    checked={task.checked} 
                    onChange={ checkTask } 
                />
                <p className={`${styles.paragraph} ${paragraphChecked}`}>
                    {task.content}
                </p>
            </div>
            <FaRegTrashAlt onClick={deleteTask} title='Excluir tarefa' />
        </div>
    )
}