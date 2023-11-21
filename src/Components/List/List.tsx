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

    function deleteTask(idTask: number) {
        const updatedTasks = tasks.filter(task => { 
            return task.id !== idTask
        })

        setTasks(updatedTasks)
    }

    function checkTask(task: ITask) {
        const updatedTasks = tasks.map((item) => {
            if (item.id === task.id) {
              return { ...item, checked: task.checked }
            }
      
            return { ...item }
        })
      
        setTasks(updatedTasks)
    }

    const countCompletedTasks = tasks.filter(task => {
        return task.checked
    })

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
                    title='Adicionar tarefa'
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
                        {tasks.length}
                    </div>
                </div>
                <div className={styles.contentTasks}>
                    <span className={styles.completedTasks}>
                        Concluídas
                    </span>
                    <div className={styles.countTasks}>
                        {countCompletedTasks.length > 0 ? (
                            countCompletedTasks.length + ' de ' + tasks.length
                        ) : (
                            countCompletedTasks.length
                        )}
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
                                onDeleteTask={deleteTask}
                                onCheckTask={checkTask}
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