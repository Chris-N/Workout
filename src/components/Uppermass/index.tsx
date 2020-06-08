import * as React from 'react'
import { useMemo } from 'react'
import styled from 'styled-components'

import { IExercises } from '../../type'

const Container = styled.p``
const Exercise = styled.div``

export const Uppermass: React.FC<{ data: IExercises }> = ({ data }) => {
  const list = useMemo(
    () =>
      data.exercises.map((item) => {
        return (
          <Exercise>{`${item.name}: ${item.sets} x ${item.reps} (${item.tempo})`}</Exercise>
        )
      }),
    [data]
  )

  return (
    <>
      <Container>Upper Mass Exercise List</Container>
      {list}
      <p>{`Break for ${data.break} seconds after the first ${data.breakset} exercises`}</p>
      <p>{`Break for ${data.round} seconds after round completion of ${data.roundset} exercises`}</p>
    </>
  )
}
