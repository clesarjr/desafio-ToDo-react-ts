import { ITask } from '../List'
import styles from './Task.module.css'
import { FaRegTrashAlt } from "react-icons/fa"

interface TaskProps {
    task: ITask
}

export function Task({ task }: TaskProps) {
    return (
        <div className={styles.task}>
            <div className={styles.content}>
                <input className={styles.checkbox} type="checkbox" checked={task.checked} />
                <p>
                    {task.content}
                </p>
            </div>
            <FaRegTrashAlt />
        </div>
    )
}