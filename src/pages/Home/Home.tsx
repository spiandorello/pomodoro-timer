import * as React from 'react'

import * as zod from 'zod'
import { HandPalm, Play } from 'phosphor-react'
import { useForm, useWatch, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Countdown, NewCycleForm } from './components'

import { useCreateCycle } from '../../context'

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'

const createNewCycleSchema = zod.object({
  task: zod.string(),
  minutesAmount: zod.number().min(1).max(60),
})

type NewCycleFormData = zod.infer<typeof createNewCycleSchema>

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useCreateCycle()

  const newCycleForm = useForm({
    resolver: zodResolver(createNewCycleSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { reset, control, handleSubmit } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = useWatch({
    control,
    name: 'task',
    defaultValue: '',
  })
  const isDisableSubmitCreateNewCycle = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton type="button" onClick={interruptCurrentCycle}>
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton
            type="submit"
            disabled={isDisableSubmitCreateNewCycle}
          >
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
