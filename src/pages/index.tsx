import Main from 'components/Main'

const listMessages = [
  'Bom dia, engenheiras e engenheiros para construir pontes e plataformas para unir pessoas',
  'Bom dia, pessoas lindas para mais uma semana de sucesso e alegrias',
  'Bom dia, amadas e amados para mais um lindo e ensolarado dia do fim da metade deste ano tenebroso',
  'Bom dia, guerreiras e guerreiros defensores da paz, do amor e da justiça para mais um dia de luta e glória',
  'Bom dia Luthiers, para mais uma oportunidades de desenvolver a ferramenta que irá produzir o som da alma e  encantar pessoas',
  'Bom dia, pessoas de luz, já agradeceram por acordarem bem e saudáveis essa pandemia?',
  'Amadas e amados, serão bem vindo a mais uma bela semana e tenham um ótimo dia',
  'Bom dia, animadas e animados para alegria da vida e divertimento dos nossos dias',
  'Bom dia, amadas e amados para uma bela e iluminada quarta-feira de muita alegrias e cheia de divertimentos',
  'Bom dia, amandes da chuva e paqueradores do sol para mais um dia belo e sorridente',
  'Humanas e humanos, boa rotação, para os habitantes da mais bela esfera que a translada essa estrela amarela',
  'Bom dia, amadas e amados, lindas e lindos para mais um bela e inspiradora semana',
  'Damas e cavalheiros, espero que a alvorada de um novo dia traga oportunidades para realizar seus sonhos e anseios',
  'Consagradas e consagrados, o deus que habita em mim cumprimenta o deus que habita em vocês para lhes desejarem boas energias e ótimos eventos vindoros',
  'Bom dia, anjas e anjos para mais um abençoado dia',
  'Senhoras, senhores e o maravilhoso arco-íris entre esses dois, bom dia para mais um dia de foco, força e fé',
  'Boa semana e bom dia para os praticantes das artes tecnológicas, conjuradores de sistemas e encantadores de máquinas',
  'Café, Tempero e Muita teoria esses foram os ingredientes escolhidos para montar a equipe perfeita, mas o Professor Leonardo acidentalmente acrescentou o ingrediente extra na mistura o elemento A, e assim nasceu o time Shenlong',
  'Bom dia, inspiradoras e inspiradores, sabem  que dia é hoje? Dia de ser engajado, produtivo e feliz!'
]

export default function Home() {
  return (
    <Main
      message={listMessages[Math.trunc(Math.random() * listMessages.length)]}
    />
  )
}
