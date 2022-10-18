import * as React from 'react'

import { Cycle, cyclesReducers } from '../../reducers/cycles/reducer'

import {
  addNewCycleAction,
  interruptCurrentAction,
  markCurrentCycleAsFinishedAction,
} from '../../reducers/cycles/actions'
import { differenceInSeconds } from 'date-fns'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  setSecondsPassed: (seconds: number) => void
  markCurrentCycleAsFinished: () => void
  createNewCycle: (data: CreateCycleData) => void
  interruptCurrentCycle: () => void
}

interface CyclesContextProviderType {
  children: React.ReactNode
}

export const CyclesContext = React.createContext({} as CyclesContextType)

export function CyclesContextProvider({ children }: CyclesContextProviderType) {
  const [cyclesState, dispatch] = React.useReducer(
    cyclesReducers,
    {
      cycles: [],
      activeCycleId: null,
    },
    () => {
      const storageStateAsJSON = localStorage.getItem(
        '@pomodoro-timer:cycles-state-1.0.0',
      )
      if (storageStateAsJSON) {
        return JSON.parse(storageStateAsJSON)
      }
    },
  )

  const { cycles, activeCycleId } = cyclesState

  const activeCycle = cycles.find((cycle) => activeCycleId === cycle.id)

  const [amountSecondsPassed, setAmountSecondsPassed] = React.useState<number>(
    () => {
      if (activeCycle) {
        return differenceInSeconds(new Date(), new Date(activeCycle.statedAt))
      }

      return 0
    },
  )

  function createNewCycle(data: CreateCycleData) {
    const { task, minutesAmount } = data

    const cycle: Cycle = {
      id: String(new Date().getTime()),
      task,
      minutesAmount,
      statedAt: new Date(),
    }

    dispatch(addNewCycleAction(cycle))
  }

  function interruptCurrentCycle() {
    dispatch(interruptCurrentAction())
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction())
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  React.useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)
    localStorage.setItem('@pomodoro-timer:cycles-state-1.0.0', stateJSON)
  })

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
        markCurrentCycleAsFinished,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}

export function useCreateCycle(): CyclesContextType {
  return React.useContext(CyclesContext)
}
