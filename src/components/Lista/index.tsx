import React from 'react';

function Lista() {
    const tarefas = [
        {
            tarefa: 'tarefa 1',
            tempo: '02:00:00'
        }, {
            tarefa: 'tarefa 2',
            tempo: '01:00:00'
        }
    ]

    return (
        <aside>
            <h2>Lista de cronômetros</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;