import themeArt from './art'
import getThemeDay, { themeDay } from './day'
import themeDream from './dream'
import themeFriday from './friday'
import { getRandom, getTheme } from './functions'
import themeFunny from './funny'
import themeHappy from './happy'
import themeHoly from './holy'
import themeLabor from './labor'
import themeMonday from './monday'
import themeTokusatsu from './tokusatsu'
import { DayTheme, FuncTheme, MessageType } from './types'
import themeWednesday from './wednesday'

export const listThemeGenre = [
  themeHappy,
  themeHoly,
  themeFunny,
  themeTokusatsu,
  themeArt,
  themeLabor,
  themeDream
]

export const listAllTheme = [
  ...listThemeGenre,
  themeMonday,
  themeWednesday,
  themeFriday
]

const libraries: Array<MessageType> = []
libraries.push(...themeDay())
libraries.push(...themeMonday())
libraries.push(...themeWednesday())
libraries.push(...themeFriday())
libraries.push(...themeHappy())
libraries.push(...themeHoly())
libraries.push(...themeFunny())
libraries.push(...themeTokusatsu())
libraries.push(...themeArt())
libraries.push(...themeLabor())
libraries.push(...themeDream())

export const completeLibraries = libraries

const getMessage = () => {
  const today = new Date()
  let theme: FuncTheme

  const dayTheme: DayTheme | undefined = getThemeDay(today)
  if (dayTheme && Math.trunc(Math.random() * 2) === 1) {
    return dayTheme.text[0].toUpperCase() + dayTheme.text.slice(1)
  }

  switch (today.getDay()) {
    case 1:
      theme = themeMonday
      break
    case 3:
      theme = themeWednesday
      break
    case 5:
      theme = themeFriday
      break
    default:
      theme = getTheme(listThemeGenre)
  }

  const concatenated = theme()
  concatenated.push(...themeHappy())
  concatenated.push(...themeHoly())
  concatenated.push(...themeFunny())
  concatenated.push(...themeTokusatsu())
  concatenated.push(...themeArt())
  concatenated.push(...themeLabor())
  concatenated.push(...themeDream())

  const message = getRandom(concatenated)
  return message[0].toUpperCase() + message.slice(1)
}

export default getMessage
