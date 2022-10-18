import {
  Status,
  HistoryList,
  HistoryContainer
} from './styles';

import {useCreateCycle} from '../../context';
import {formatDistanceToNow} from 'date-fns';
import {ptBR} from 'date-fns/locale';

export function History() {
  const { cycles } = useCreateCycle();

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
            {cycles.map((cycle) => {
              const {
                id,
                task,
                minutesAmount,
                statedAt,
                interruptDate,
                finishedAt,
              } = cycle;

              return (
                <tr key={id}>
                  <td>{task}</td>
                  <td>{minutesAmount} minutos</td>
                  <td>{
                    formatDistanceToNow(new Date(statedAt), {
                      addSuffix: true,
                      locale: ptBR,
                    })
                  }</td>
                  <td>
                    {interruptDate && (
                      <Status variant="red">Interrompido</Status>
                    )}

                    {finishedAt && (
                      <Status variant="green">Concluído</Status>
                    )}

                    {(!finishedAt && !interruptDate) && (
                      <Status variant="yellow">Em andamento</Status>
                    )}

                  </td>
                </tr>
              );
            })}
          </tbody>

        </table>
      </HistoryList>
    </HistoryContainer>
  );
}