import { FuncTheme, MessageType } from './types'

export const getTheme = (list: Array<FuncTheme>): FuncTheme => {
  return list[Math.trunc(Math.random() * list.length)]
}

export const getRandom = (list: Array<MessageType>): MessageType => {
  const randomItem = list[Math.trunc(Math.random() * list.length)]
  return randomItem
}
