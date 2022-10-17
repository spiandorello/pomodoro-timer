import {
    HomeContainer,
    FormContainer,
    CountdownContainer,
    CountdownSeparator,
    StartCountdownButton, TaskInput, MinutesAmountInput,
} from './styles';

export function Home() {
    return (
        <HomeContainer>
            <form action="">

                <FormContainer>

                    <label htmlFor="project">
                        Vou trabalhar em
                    </label>
                    <TaskInput
                        id="project"
                        type="text"
                        placeholder="Dê um nome para o seu projeto"
                        list="task-suggestions"
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

                <StartCountdownButton type="submit">
                    Começar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    );
}