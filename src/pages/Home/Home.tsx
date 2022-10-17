import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import {
    HomeContainer,
    FormContainer,
    CountdownContainer,
    CountdownSeparator,
    StartCountdownButton, TaskInput, MinutesAmountInput,
} from './styles';

const createNewCycleSchema = zod.object({
   task: zod
       .string(),
    minutesAmount: zod
        .number()
        .min(5)
        .max(60),
});

type CreateNewCycleFormData = zod.infer<typeof createNewCycleSchema>;

export function Home() {
    const {
        reset,
        control,
        register,
        handleSubmit,
    } = useForm({
        resolver: zodResolver(createNewCycleSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    });

    const task = useWatch({
        control,
        name: 'task',
        defaultValue: '',
    });

    function handleCreateNewCycle(data: CreateNewCycleFormData) {
        console.log(data);
        reset();
    }

    const isDisableSubmitCreateNewCycle = !task;

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">

                <FormContainer>

                    <label htmlFor="project">
                        Vou trabalhar em
                    </label>
                    <TaskInput
                        id="project"
                        type="text"
                        placeholder="Dê um nome para o seu projeto"
                        list="task-suggestions"
                        {...register('task')}
                    />
                    <datalist id="task-suggestions">
                        <option value="Projeto 1" />
                        <option value="Projeto 2" />
                        <option value="Projeto 3" />
                    </datalist>

                    <label htmlFor="minutesAmount">
                        durante
                    </label>
                    <MinutesAmountInput
                        id="project"
                        type="number"
                        placeholder="00"
                        step={5}
                        min={5}
                        max={60}
                        {...register('minutesAmount', {
                            valueAsNumber: true,
                        })}
                    />

                    <span>minutos.</span>

                </FormContainer>

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <CountdownSeparator>:</CountdownSeparator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <StartCountdownButton
                    type="submit"
                    disabled={isDisableSubmitCreateNewCycle}
                >
                    Começar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    );
}