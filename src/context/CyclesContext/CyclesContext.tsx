import * as React from 'react';

import { Cycle, cyclesReducers } from '../../reducers/cycles/reducer';

import {
  addNewCycleAction,
  interruptCurrentAction,
  markCurrentCycleAsFinishedAction
} from '../../reducers/cycles/actions';


interface CreateCycleData {
  task: string,
  minutesAmount: number,
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
  const [cyclesState, dispatch] = React.useReducer(cyclesReducers, {
    cycles: [],
    activeCycleId: null,
  })

  const [amountSecondsPassed, setAmountSecondsPassed] = React.useState<number>(0);

  const { cycles, activeCycleId } = cyclesState;

  function createNewCycle(data: CreateCycleData) {
    const { task, minutesAmount } = data;

    const cycle: Cycle = {
      id: String((new Date()).getTime()),
      task,
      minutesAmount,
      statedAt: new Date(),
    };

    dispatch(addNewCycleAction(cycle));
  }

  function interruptCurrentCycle() {
    dispatch(interruptCurrentAction());
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction());
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