import themeArt from './art'
import getThemeDay from './day'
import themeDream from './dream'
import themeFriday from './friday'
import { getRandom, getTheme } from './functions'
import themeFunny from './funny'
import themeHappy from './happy'
import themeHoly from './holy'
import themeLabor from './labor'
import themeMonday from './monday'
import themeTokusatsu from './tokusatsu'
import { DayTheme, FuncTheme } from './types'
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

  let concatenated = theme()
  concatenated = concatenated.concat(themeHappy())
  concatenated = concatenated.concat(themeHoly())
  concatenated = concatenated.concat(themeFunny())
  concatenated = concatenated.concat(themeTokusatsu())
  concatenated = concatenated.concat(themeArt())
  concatenated = concatenated.concat(themeLabor())
  concatenated = concatenated.concat(themeDream())

  const message = getRandom(concatenated)
  return message[0].toUpperCase() + message.slice(1)
}

export default getMessage
