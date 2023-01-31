import styles from '../Lista.module.scss';

function Item({tarefa, tempo}: { tarefa: String, tempo: string }) {
    return (
        <li className={styles.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}

export default Item;