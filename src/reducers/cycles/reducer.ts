import { produce } from 'immer';

import { ActionsTypes } from './actions';

export interface Cycle {
  id: string,
  task: string,
  minutesAmount: number,
  statedAt: Date,
  interruptDate?: Date,
}

interface CyclesInterface {
  cycles: Cycle[],
  activeCycleId: string | null,
}

export function cyclesReducers(state: CyclesInterface, action: any) {
  switch (action.type) {
    case ActionsTypes.ADD_NEW_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle);
        draft.activeCycleId = action.payload.newCycle.id;
      });
    case ActionsTypes.INTERRUPT_CURRENT_CYCLE:
      const currentCycleIndex = state.cycles.findIndex((cycle) => (
        cycle.id === state.activeCycleId
      ));

      if (currentCycleIndex < 0) {
        return state;
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null;
        draft.cycles[currentCycleIndex].interruptDate = new Date();
      });

    case ActionsTypes.MARK_CURRENT_CYCLE_AS_FINISHED:
      const currentIndex = state.cycles.findIndex((cycle) => (
        cycle.id === state.activeCycleId
      ));

      if (currentIndex < 0) {
        return state;
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null;
        draft.cycles[currentIndex].interruptDate = new Date();
      });
    default:
      return state;
  }
}