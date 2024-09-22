export type Task_type = {
  id: number
  text: string
  completed: boolean
}

export type Filter_type = 'all' | 'active' | 'completed'

export type User_type = {
  username: string
  email: string
  password: string
}
