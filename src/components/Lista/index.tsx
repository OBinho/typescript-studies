import Item from './Item';
import styles from './Lista.module.scss';

function Lista() {
    const tarefas = [
        {
            tarefa: 'tarefa ',
            tempo: '02:00:00'
        }, {
            tarefa: 'tarefa 2',
            tempo: '01:00:00'
        }
    ]

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