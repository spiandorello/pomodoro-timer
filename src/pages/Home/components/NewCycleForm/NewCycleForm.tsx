import * as React from 'react';

import { FormContainer, MinutesAmountInput, TaskInput } from './styles';
import {useFormContext} from 'react-hook-form';
import {useCreateCycle} from '../../../../context';

export function NewCycleForm() {
  const { register } = useFormContext();
  const { activeCycle } = useCreateCycle();

  return (
    <FormContainer>
      <label htmlFor="project">
        Vou trabalhar em
      </label>
      <TaskInput
        id="project"
        type="text"
        placeholder="Dê um nome para o seu projeto"
        list="task-suggestions"
        disabled={!!activeCycle}
        {...register('task')}
      />
      <datalist id="task-suggestions">
        <option value="Projeto 1"/>
        <option value="Projeto 2"/>
        <option value="Projeto 3"/>
      </datalist>

      <label htmlFor="minutesAmount">
        durante
      </label>
      <MinutesAmountInput
        disabled={!!activeCycle}
        id="project"
        type="number"
        placeholder="00"
        step={1}
        min={1}
        max={60}
        {...register('minutesAmount', {
          valueAsNumber: true,
        })}
      />

      <span>minutos.</span>
    </FormContainer>
  );
}