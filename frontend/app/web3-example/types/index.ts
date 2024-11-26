export type Message = {
  id: number
  type: 'user' | 'ai'
  content: string
  file?: File
}
