import styles from './List.module.css'
import { FiPlusCircle } from "react-icons/fi";
import { useState } from "react"
import { Empty } from './Task/Empty';
import { Task } from './Task/Task';

export interface ITask {
    id: number,
    content: string,
    checked: boolean
}

export function List() {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState<ITask[]>([])

    function addTask() {
        if (!task) {
            return
        }
      
        const newTask: ITask = {
            id: new Date().getTime(),
            content: task,
            checked: false,
        }

        setTasks([...tasks, newTask])
        setTask('')
    }

    const countTasks = tasks.length

    return (
        <>
            <div className={styles.list}>
                <input 
                    name="task"
                    value={task}
                    onChange={e => setTask(e.target.value)}
                    type="text" 
                    placeholder="Adicione uma nova tarefa"
                    className={styles.input}
                />
                <button 
                    type='submit'
                    className={styles.button}
                    onClick={addTask}
                    disabled={task.length === 0}
                >
                    Criar
                    <FiPlusCircle size={18} />
                </button>
            </div>
            <div className={styles.header}>
                <div className={styles.contentTasks}>
                    <span className={styles.createdTasks}>
                        Tarefas criadas
                    </span>
                    <div className={styles.countTasks}>
                        {countTasks}
                    </div>
                </div>
                <div className={styles.contentTasks}>
                    <span className={styles.completedTasks}>
                        Concluídas
                    </span>
                    <div className={styles.countTasks}>
                        0
                    </div>
                </div>
            </div>
            <>
                {tasks.length > 0 ? (
                    tasks.map(task => {
                        return (
                            <Task 
                                key={task.id}
                                task={task} 
                            />
                        )
                    })
                ) : ( 
                    <Empty /> 
                )}
            </>
        </>
    )
}