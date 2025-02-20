export type MessageType = { id: string; text: string }

export type FuncTheme = () => Array<MessageType>
export type DayTheme = { day: number; month: number } & MessageType
