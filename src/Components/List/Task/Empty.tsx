import styles from './Empty.module.css'
import { TbClipboardText } from "react-icons/tb"

export function Empty() {
    return (
        <div className={styles.empty}>
            <TbClipboardText size={64} />
            <div className={styles.content}>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}