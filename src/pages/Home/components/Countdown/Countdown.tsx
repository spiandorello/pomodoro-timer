import * as React from 'react';

import { CountdownContainer, CountdownSeparator } from './styles';
import {differenceInSeconds} from 'date-fns';
import {useCreateCycle} from '../../../../context';

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    amountSecondsPassed,
    setSecondsPassed,
    markCurrentCycleAsFinished,
  } = useCreateCycle();

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

  const totalSecondsAmount = totalSeconds - amountSecondsPassed;
  const minutes = activeCycle ? Math.floor(totalSecondsAmount / 60) : 0;
  const seconds = activeCycle ? Math.floor(totalSecondsAmount % 60) : 0;

  const minutesFormatted = String(minutes).padStart(2, '0');
  const secondsFormatted = String(seconds).padStart(2, '0');

  React.useEffect(() => {
    if (!activeCycle) {
      return;
    }

    const interval = setInterval(() => {
      const secondsDiff = differenceInSeconds(new Date(), new Date(activeCycle.statedAt));
      if (secondsDiff >= totalSeconds) {
        markCurrentCycleAsFinished();

        setSecondsPassed(totalSeconds);
        clearInterval(interval);
      } else {
        setSecondsPassed(secondsDiff);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [activeCycle, totalSeconds, activeCycleId, markCurrentCycleAsFinished]);

  React.useEffect(() => {
    if (activeCycle) {
      document.title = `${minutesFormatted}:${secondsFormatted}`;
    }
  }, [minutesFormatted, secondsFormatted, activeCycle])

  return (
    <CountdownContainer>
      <span>{minutesFormatted[0]}</span>
      <span>{minutesFormatted[1]}</span>
      <CountdownSeparator>:</CountdownSeparator>
      <span>{secondsFormatted[0]}</span>
      <span>{secondsFormatted[1]}</span>
    </CountdownContainer>
  );
}