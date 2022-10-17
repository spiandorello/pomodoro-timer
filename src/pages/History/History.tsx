import {
    Status,
    HistoryList,
    HistoryContainer
} from './styles';

export function History() {
    return (
        <HistoryContainer>
            <h1>Meu histórico</h1>

            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Inicio</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há dois meses</td>
                            <td><Status variant="green">Concluido</Status></td>
                        </tr>

                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há dois meses</td>
                            <td><Status variant="red">Concluido</Status></td>
                        </tr>

                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há dois meses</td>
                            <td><Status variant="yellow">Concluido</Status></td>
                        </tr>
                    </tbody>

                </table>
            </HistoryList>
        </HistoryContainer>
    );
}