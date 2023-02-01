import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import styles from './Lista.module.scss';

function Lista({ tarefas }: { tarefas: ITarefa[] }) {
    return (
        <aside className={styles.listaTarefas}>
            <h2>Lista de cronômetros</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;