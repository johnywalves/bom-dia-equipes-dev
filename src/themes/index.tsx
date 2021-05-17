type FuncTheme = () => Array<string>

export const themeMonday: FuncTheme = () => [
  'amadas e amados, serão bem vindo a mais uma bela semana e tenham um ótimo dia',
  'bom dia, pessoas lindas para mais uma semana de sucesso e alegrias',
  'bom dia, amadas e amados, lindas e lindos para mais um bela e inspiradora semana',
  'boa semana e bom dia para os praticantes das artes tecnológicas, conjuradores de sistemas e encantadores de máquinas'
]

export const themeWednesday: FuncTheme = () => [
  'bom dia, pessoas dedicadas para uma bela e iluminada quarta-feira de muita alegrias e cheia de divertimentos'
]

export const themeFriday: FuncTheme = () => [
  'bom dia, festeiros para mais uma sexta-feira vamos aproveitar esse finalzinho de fim de semana'
]

export const themeHappy: FuncTheme = () => [
  'bom dia, engenheiras e engenheiros para construir pontes e plataformas para unir pessoas',
  'Pessoas encantadoras, sabem que dia é hoje? Dia de ser engajado, produtivo e compartilhar experiências! Bom dia para pessoal'
]

export const themeFunny: FuncTheme = () => [
  'bom dia, amandes da chuva e paqueradores do sol para mais um dia belo e sorridente',
  'bom dia, luthiers! Para mais uma oportunidades de desenvolver a ferramenta que irá produzir o som da alma para encantar pessoas',
  'humanas e humanos, boa rotação, para os habitantes da mais bela esfera que a translada essa estrela amarela',
  'damas e cavalheiros, espero que a alvorada de um novo dia traga oportunidades para realizar seus sonhos e anseios',
  'ideias, design e muita teoria esses foram os ingredientes escolhidos para montar a equipe perfeita, mas o professor acidentalmente acrescentou o ingrediente extra na mistura o elemento Café, e assim nasceu o nesse time maravilhoso',
  'senhoras, senhores e o maravilhoso arco-íris entre esses dois, bom dia para mais um dia de foco, força e fé'
]

export const themeHoly: FuncTheme = () => [
  'irmãs e irmãos, já agradeceram por acordarem bem e saudáveis neste belo dia? Que ele veja cada vez mais iluminado',
  'Sejam bem-vindos, pessoas de luz para mais um abençoado dia',
  'consagradas e consagrados, o deus que habita em mim cumprimenta o deus que habita em vocês para lhes desejarem boas energias e ótimos eventos vindoros'
]

export const themeTokusatsu: FuncTheme = () => [
  'guerreiras e guerreiros defensores da paz, do amor e da justiça para mais um dia de luta e glória'
]

export const listThemeGenre = [
  themeHappy,
  themeHoly,
  themeFunny,
  themeTokusatsu
]

export const listAllTheme = [
  ...listThemeGenre,
  themeMonday,
  themeWednesday,
  themeFriday
]

const getMessage = () => {
  const getTheme = (list: Array<FuncTheme>): FuncTheme => {
    return list[Math.trunc(Math.random() * list.length)]
  }

  const getRandom = (list: Array<string>): string => {
    return list[Math.trunc(Math.random() * list.length)]
  }

  const today = new Date()
  let theme: FuncTheme

  if (Math.random() * 3 === 1) {
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
  } else {
    theme = getTheme(listThemeGenre)
  }

  const message = getRandom(theme())
  return message[0].toUpperCase() + message.slice(1)
}

export default getMessage
