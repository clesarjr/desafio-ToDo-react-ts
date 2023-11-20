import styles from './Task.module.css'
import { FaRegTrashAlt } from "react-icons/fa"

export function Task() {
    return (
        <div className={styles.task}>
            <div className={styles.content}>
                <input className={styles.checkbox} type="checkbox" />
                <p>
                    Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                </p>
            </div>
            <FaRegTrashAlt />
        </div>
    )
}