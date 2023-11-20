import styles from './List.module.css'
import { FiPlusCircle } from "react-icons/fi";
import { Empty } from './Task/Empty';
import { Task } from './Task/Task';

export function List() {
    return (
        <>
            <div className={styles.list}>
                <input className={styles.input} type="text" placeholder="Adicione uma nova tarefa" />
                <button className={styles.button} type='submit'>
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
                        5
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
                <Task />
                <Task />
                <Task />
            </>
        </>
    )
}