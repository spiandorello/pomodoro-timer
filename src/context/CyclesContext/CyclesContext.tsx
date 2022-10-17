import * as React from 'react';

interface CreateCycleData {
  task: string,
  minutesAmount: number,
}

interface Cycle {
  id: string,
  task: string,
  minutesAmount: number,
  statedAt: Date,
  interruptDate?: Date,
}

interface CyclesContextType {
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number,
  setSecondsPassed: (seconds: number) => void,
  markCurrentCycleAsFinished: () => void,
  createNewCycle: (data: CreateCycleData) => void,
  interruptCurrentCycle: () => void,
}

interface CyclesContextProviderType {
  children: React.ReactNode;
}

export const CyclesContext = React.createContext({} as CyclesContextType);

export function CyclesContextProvider({ children }: CyclesContextProviderType) {
  const [cycles, setCycles] = React.useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = React.useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = React.useState<number>(0);

  function createNewCycle(data: CreateCycleData) {
    const { task, minutesAmount } = data;

    const cycle: Cycle = {
      id: String((new Date()).getTime()),
      task,
      minutesAmount,
      statedAt: new Date(),
    };

    setCycles((state) => [...state, cycle]);
    setActiveCycleId(cycle.id);
  }

  function interruptCurrentCycle() {
    setCycles(cycles.map((cycle) => {
      if (cycle.id === activeCycleId) {
        return {...cycle, interruptDate: new Date()}
      }

      return cycle;
    }));

    setActiveCycleId(null);
  }

  function markCurrentCycleAsFinished() {
    setCycles(cycles.map((cycle) => {
      if (cycle.id === activeCycleId) {
        return {...cycle, finishAt: new Date()};
      }

      return cycle;
    }));
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  const activeCycle = cycles.find((cycle) => activeCycleId === cycle.id);

  return (
    <CyclesContext.Provider value={{
      activeCycle,
      activeCycleId,
      amountSecondsPassed,
      setSecondsPassed,
      createNewCycle,
      interruptCurrentCycle,
      markCurrentCycleAsFinished
    }}>
      {children}
    </CyclesContext.Provider>
  );
}

export function useCreateCycle(): CyclesContextType {
  return React.useContext(CyclesContext);
}