interface IExercise {
  name: string
  sets: string
  reps: string
  tempo: string
}

export interface IExercises {
  exercises: IExercise[]
  break: number
  breakset: number
  round: number
  roundset: number
}
