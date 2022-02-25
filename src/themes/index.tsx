type FuncTheme = () => Array<string>

export const themeMonday: FuncTheme = () => [
  'amadas e amados, serão bem vindo a mais uma bela semana e tenham um ótimo dia',
  'bom dia, pessoas lindas para mais uma semana de sucesso e alegrias',
  'bom dia, amadas e amados, lindas e lindos para mais um bela e inspiradora semana',
  'boa semana e bom dia para os praticantes das artes tecnológicas, conjuradores de sistemas e encantadores de máquinas',
  'bom dia e Boa semana, para os gigantes do meu coração vamos juntos nessa bela semana linda e produtiva'
]

export const themeWednesday: FuncTheme = () => [
  'bom dia, pessoas dedicadas para uma bela e iluminada quarta-feira de muita alegrias e cheia de divertimentos'
]

export const themeFriday: FuncTheme = () => [
  'bom dia, festeiros para mais uma sexta-feira vamos aproveitar esse finalzinho de fim de semana',
  'bom dia, sexteiras e sexteiros, para mais um dia produtivo, antes do final de semana',
  'festeiras e festeiros, preparem as bebidas, mas espere as 18h para colocar a carne para assar, vamos juntos para mais um sexta-feira bela e produtiva'
]

export const themeHappy: FuncTheme = () => [
  'bom dia, engenheiras e engenheiros para construir pontes e plataformas para unir pessoas',
  'pessoas encantadoras, sabem que dia é hoje? Dia de ser engajado, produtivo e compartilhar experiências! Bom dia para pessoal',
  'pássaras e pássaros, acordai-vos para esse belo dia que se inicia, vamos cantar as alegrias das conquistas passadas e migrar para os desafios futuros',
  'sejam bem-vindos, pessoas de luz para mais um abençoado dia',
  'conterrâneas e conterrâneos, habitantes de terras brazilis, construtores do país do futuro, resistentes e sonhadores, vamos juntos para mais um belo dia construir um lugar para nos orgulharmos e que nos permita acreditar que o melhor é possível'
]

export const themeFunny: FuncTheme = () => [
  'bom dia, amandes da chuva e paqueradores do sol para mais um dia belo e sorridente',
  'bom dia, luthiers! Para mais uma oportunidades de desenvolver a ferramenta que irá produzir o som da alma para encantar pessoas',
  'humanas e humanos, boa rotação, para os habitantes da mais bela esfera que a translada essa estrela amarela',
  'damas e cavalheiros, espero que a alvorada de um novo dia traga oportunidades para realizar seus sonhos e anseios',
  'ideias, design e muita teoria esses foram os ingredientes escolhidos para montar a equipe perfeita, mas o professor acidentalmente acrescentou o ingrediente extra na mistura o elemento Café, e assim nasceu o nesse time maravilhoso',
  'senhoras, senhores e o maravilhoso arco-íris entre esses dois, bom dia para mais um dia de foco, força e fé',
  'pássaras e pássaros, acordai-vos para esse belo dia que se inicia, vamos cantar as alegrias das conquistas passadas e migrar para os desafios futuros',
  'magas e magos, vamos unir nossos feitiços para conjurar um dia belo e uma semana maravilhosa, cheia de magia e colorida com várias realizações e sucesso'
]

export const themeHoly: FuncTheme = () => [
  'irmãs e irmãos, já agradeceram por acordarem bem e saudáveis neste belo dia? Que ele veja cada vez mais iluminado',
  'sejam bem-vindos, pessoas de luz para mais um abençoado dia',
  'consagradas e consagrados, o deus que habita em mim cumprimenta o deus que habita em vocês para lhes desejarem boas energias e ótimos eventos vindoros'
]

export const themeTokusatsu: FuncTheme = () => [
  'guerreiras e guerreiros defensores da paz, do amor e da justiça para mais um dia de luta e glória'
]

export const themeArt: FuncTheme = () => [
  'dançarinas e dançarinos, vamos juntos performar um dia fantástico, encantar os olhos dos expectadores com movimentos belos e precisos e deixar boquiabertos com nossas dedicação e conquistas',
  'poetisas e poetas, vamos encantar no mundo de hoje com uma bela sonoridade e rimas maravilhosas para nossos poemas perdurem e encantem todos'
]

export const themeLabor: FuncTheme = () => [
  'astrônomas e astrônomos, observai o céu a aproximação da sol marcando um novo dia iluminando novas esperanças entendendo o cosmos para gerar conhecimento',
  'confeiteiras e confeiteiros, vamos aquecer o forno e preparar as formas para decorar um dia maravilhoso e caprichar nas formas, detalhes e sabores para nossas entregas de hoje',
  'naturalistas e naturalistos, vamos explorar o muindo para descobrir novas formas de entregar resultados e teorizar sobre a evolução de nosso produto, nessa bela quarta-feira',
  'advogadas e advogados, preparem seus argumentos, laudos e citações pois temos um cliente para defender contra as injustiças deste mundo, que tenhamos sucesso nesse belo e iluminado dia',
  'jogadoras e jogadores, vamos nos preparar para mais um partida que será fantástica desse time prepadado e dedicado',
  'escultoras e escultores, bom dia e uma ótima semana, para criar obras maravilhosas para encantar o cliente e descobrir novas formas de tralhar a realidade do material bruto',
  'advogadas e advogados, preparem os processos e as papeladas vamos garantir um dia lindo e maravilhoso nem que judicialmente',
  'cineatas e cineatos, preparem suas câmeras e microfones para registrar esse dia maravilhoso, vamos enquadrar em nossa visão e expressar com maestria a sétima arte para encantar corações e mentes'
]

export const themeDream: FuncTheme = () => [
  'conterrâneas e conterrâneos, habitantes de terras brazilis, construtores do país do futuro, resistentes e sonhadores, vamos juntos para mais um belo dia construir um lugar para nos orgulharmos e que nos permita acreditar que o melhor é possível',
  'sonhadoras e sonhadores, acordai-vos para o novo dia vamos fazer ele belo e produtivo, para que nossas cabeças possam descansar e sempre aproveitar o novo dia para correr atrás de nossos sonhos',
  'damas e cavalheiros, espero que a alvorada de um novo dia traga oportunidades para realizar seus sonhos e anseios'
]

export const listThemeGenre = [
  themeHappy,
  themeHoly,
  themeFunny,
  themeFunny,
  themeTokusatsu,
  themeArt,
  themeLabor,
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
