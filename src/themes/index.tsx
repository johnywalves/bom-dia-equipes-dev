type FuncTheme = () => Array<Array<string>>

const defaultPeople = [
  'engenheiras e engenheiros',
  'amadas e amados',
  'inspiradoras e inspiradores',
  'engajadas e engajados',
  'consagradas e consagrados',
  'pessoas lindas',
  'pessoas dedicadas',
  'condesas e condes',
  'senhoras, senhores e o maravilhoso arco-íris entre esses dois'
]

export const themeMonday: FuncTheme = () => {
  const messages = [
    'amadas e amados, serão bem vindo a mais uma bela semana e tenham um ótimo dia',
    'bom dia, pessoas lindas para mais uma semana de sucesso e alegrias',
    'bom dia, amadas e amados, lindas e lindos para mais um bela e inspiradora semana',
    'boa semana e bom dia para os praticantes das artes tecnológicas, conjuradores de sistemas e encantadores de máquinas'
  ]

  return [messages]
}

export const themeWednesday: FuncTheme = () => {
  const messages = [
    'bom dia, {{people}} para uma bela e iluminada quarta-feira de muita alegrias e cheia de divertimentos'
  ]

  return [messages, defaultPeople]
}

export const themeFriday: FuncTheme = () => {
  const messages = [
    'bom dia, {{people}} para mais uma sexta-feira vamos aproveitar esse finalzinho de fim de semana'
  ]

  return [messages, defaultPeople]
}

export const themeHappy: FuncTheme = () => {
  const messages = [
    'bom dia, {{people}} para construir pontes e plataformas para unir pessoas',
    'bom dia, {{people}} para alegria da vida e divertimento dos nossos dias',
    '{{people}}, sabem que dia é hoje? Dia de ser engajado, produtivo e compartilhar experiências! Bom dia para pessoal'
  ]

  return [messages, defaultPeople]
}

export const themeFunny: FuncTheme = () => {
  const messages = [
    'bom dia, amandes da chuva e paqueradores do sol para mais um dia belo e sorridente',
    'bom dia, luthiers! Para mais uma oportunidades de desenvolver a ferramenta que irá produzir o som da alma para encantar pessoas',
    'humanas e humanos, boa rotação, para os habitantes da mais bela esfera que a translada essa estrela amarela',
    'damas e cavalheiros, espero que a alvorada de um novo dia traga oportunidades para realizar seus sonhos e anseios',
    'ideias, design e muita teoria esses foram os ingredientes escolhidos para montar a equipe perfeita, mas o professor acidentalmente acrescentou o ingrediente extra na mistura o elemento Café, e assim nasceu o nesse time maravilhoso',
    'senhoras, senhores e o maravilhoso arco-íris entre esses dois, bom dia para mais um dia de foco, força e fé'
  ]

  return [messages]
}

export const themeHoly: FuncTheme = () => {
  const messages = [
    '{{people}}, já agradeceram por acordarem bem e saudáveis neste belo dia? Que ele veja cada vez mais iluminado',
    'Sejam bem-vindos, {{people}} para mais um abençoado dia',
    'consagradas e consagrados, o deus que habita em mim cumprimenta o deus que habita em vocês para lhes desejarem boas energias e ótimos eventos vindoros'
  ]
  const people = ['irmãs e irmãos', 'pessoas de luz', 'anjas e anjos']

  return [messages, people]
}

export const themeTokusatsu: FuncTheme = () => {
  const messages = [
    'guerreiras e guerreiros defensores da paz, do amor e da justiça para mais um dia de luta e glória'
  ]

  return [messages]
}

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

  const [messages, people] = theme()

  const message = getRandom(messages).replace(
    /{{people}}/i,
    getRandom(people || [])
  )

  return message[0].toUpperCase() + message.slice(1)
}

export default getMessage
