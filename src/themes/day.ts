import { DayTheme } from './types'

const getThemeDay = (today: Date): DayTheme | undefined => {
  const list: Array<DayTheme> = [
    {
      id: 'day_0308_A',
      month: 3,
      day: 8,
      text: 'bom dia para as mulheres do time, feliz dia das mulheres e parabéns pelas conquistas no dia a dia nessa sistema sistematicamente misógino e bom dia para os homens também'
    },
    {
      id: 'day_0414_A',
      month: 4,
      day: 14,
      text: 'cafeicultoras e cafeicultores, preparem seus belos grãos para preparar essa bebida sagrada de cada dia, quente e forte para nos levantar dispostos a conquistar mais um dia e que sua energia nos siga no dia de hoje'
    },
    {
      id: 'day_0419_A',
      day: 19,
      month: 4,
      text: 'índias e índio, guardiões dos segredos selvagens e das matas, domesticadores da mandioca, habitantes do coração do Brasil, vamos todos preparar nossos arcos para trazer pela caça para nosso dia'
    },
    {
      id: 'day_0420_A',
      month: 4,
      day: 20,
      text: 'danceiras e danceiros, vamos pegar os sapatos plataformas, armar nossos cabelos com muito hair spray, preparar a bola espelhada para dançarmos juntos e impressionar todos com nossa performance'
    },
    {
      id: 'day_0426_A',
      month: 4,
      day: 26,
      text: 'escultoras e escultores, bom dia e uma ótima semana, para criar obras maravilhosas para encantar o cliente e descobrir novas formas de tralhar a realidade do material bruto'
    },
    {
      id: 'day_0502_A',
      month: 5,
      day: 2,
      text: 'trabalharas e trabalhadores, acorda-vos para mais um pelo de labuta e conquista, para mais oportunidades de mover o mundo para frente e levar o mundo para um futuro belo'
    },
    {
      id: 'day_0504_A',
      month: 5,
      day: 4,
      text: 'sensitivas e sensitivos, deixe o fluxo da vida passar por vocês e guiar seu movimentos, que a força esteja com vocês nesse dia maravilhoso e possamos conquistar com perseverança e respeito'
    },
    {
      id: 'day_0505_A',
      month: 5,
      day: 5,
      text: 'expedicionárias e expedicionários, vamos explorar a vastidão do desconhecido em busca de novas oportunidades e construir novos caminhos, juntos conquistar o nunca conquistado e descobrir o nunca antes revelado'
    },
    {
      id: 'day_0509_A',
      day: 9,
      month: 5,
      text: 'viajantas e viajantes, peguem o passaporte, não esqueçam de colocar toalha na sua mala, vamos conhecer monumentos, histórias e pessoas, para acrescem no nosso repertório e assim agregar nas nossas entregas'
    },
    {
      id: 'day_0512_A',
      month: 5,
      day: 12,
      text: 'enfermeiras e enfermeiros, lavem as mãos e se preparem para mais um belo dia de trabalho para garantir a saúde e estabilidade de nosso paciência que os ensinamentos de Florence Nightingale perdure e orientem nossas ações'
    },
    {
      id: 'day_0512_A',
      month: 5,
      day: 17,
      text: 'senhoras, senhores e o maravilhoso arco-íris entre esses dois, bem-vindos para mais um belo e glorioso dia para fazer o mundo melhor a cada dia com igualdade e oportunidade para todos'
    },
    {
      id: 'day_0518_A',
      month: 5,
      day: 18,
      text: 'museólogas e museólogos, guardiões do passado, construtores da memória coletiva e protetores dos tesouros da história coletiva, vamos juntos criar um futuro melhor, para nos orgulharmos e encher de esperança para tempos vindouros'
    },
    {
      id: 'day_0519_A',
      month: 5,
      day: 19,
      text: 'médicas e médicos, vamos pegar o prontuário do nosso paciente e levar para ele saúde plena, trabalhar com dedicação e presteza para garantir o futuro maravilhoso para todos'
    },
    {
      id: 'day_0520_A',
      month: 5,
      day: 20,
      text: 'abelhas e abelhos, vamos tomar o solzinho da manhã para aquecer e preparar para esse dia frio, colher o pólen das flores e produzir um gostoso e nutritivo mel'
    },
    {
      id: 'day_0524_A',
      month: 5,
      day: 24,
      text: 'amantas e amantes do café, vamos juntos preparar um bela xícara para o dia de hoje com a ajuda da santa cafeína nos manter produtivos e atentos, um ótimo café para todos e um maravilhoso dia'
    },
    {
      id: 'day_0525_A',
      month: 5,
      day: 25,
      text: 'mochileiras e mochileiros, preparem seus pertences e sua vontade de explorar o universo, vamos de carona em carona para onde nossos sonhos quiserem nos levar, andem sempre com atenção e não esqueçam suas toalhas'
    },
    {
      id: 'day_0530_A',
      month: 5,
      day: 30,
      text: 'decoradoras e decoradores, peguem seus cortinas, vasinhos de planta, quadros e almofadas vamos deixar nesse ambiente lindo e agradável, para inspirar e transpirar calma e organização, trazer a beleza do mundo para nosso e outros lares'
    },
    {
      id: 'day_0531_A',
      month: 5,
      day: 31,
      text: 'atenção senhoras e senhores passageiros, bem-vindos ao dia de hoje, para sua segurança estamos aqui para te auxiliar e desenvolver juntos, se precisar de alguma ajuda a um chat de distância pode encontrar um companheiro de trabalho, a previsão de chegada é de trabalho bem feito e sucesso para todos'
    },
    {
      id: 'day_0721_A',
      month: 7,
      day: 21,
      text: 'confeiteiras e confeiteiros, peguem seus picos, seus glacês, seus fues para fazermos um belo bolo hoje para alimentar e encher os corações de alegrias'
    },
    {
      id: 'day_0817_A',
      month: 8,
      day: 17,
      text: 'historiadoras e historiadores, bem vindos para um dia vindouro, para mais oportunidades de conhecer o passado e entender o futuro que está se desenhando em nossa frente'
    },
    {
      id: 'day_0829_A',
      month: 8,
      day: 29,
      text: 'jogadoras e jogadores, esquentam os consoles, ajustem os controles, arrumem um lugar confortável para mais desafios e possibilidades para desenvolver nossas habilidades para garantir conquistas para todos'
    },
    {
      id: 'day_0901_A',
      month: 9,
      day: 1,
      text: 'fisiculturistas e fisiculturistos, flexionar os músculos, tomar o Whey Protein e muita energia para fazer o supino, vamos esculpir deusas e deuses gregos nesse belo mármore que chamamos de corpo'
    },
    {
      id: 'day_0902_A',
      month: 9,
      day: 2,
      text: 'floristas e floristos, vamos preparar os cravos, dente de leão e rosas, para fazer belas e inspirados arranjos assim decorar o mundo e nossas vidas'
    },
    {
      id: 'day_0914_A',
      month: 9,
      day: 14,
      text: 'frevistas e frevistos, vamos pegar nossos guarda chuvas e nos alegrar por mais um dia em ritmo animado com habilidade e desenvoltura'
    },
    {
      id: 'day_0915_A',
      month: 9,
      day: 15,
      text: 'democratas e democratos do meu brasil, juntos vamos construir as bases para um futuro ordeiro e prospero para os nossos e todos desta pela pátria'
    },
    {
      id: 'day_1004_A',
      month: 10,
      day: 4,
      text: 'bartenders, bom dia, vamos preparar nossas misturas e treinar nossas performances vamos para mais um dia de trabalho para encantar e alegrar '
    },
    {
      id: 'day_1025_A',
      month: 10,
      day: 25,
      text: 'bom dia, para o povo do meu coração, camaradas da luta diária para gerar um mundo melhor, membros da sociedade crescente e progredindo, levantem e olhem para cima esse é o caminho'
    },
    {
      id: 'day_1025_A',
      month: 10,
      day: 26,
      text: 'construtoras e construtores, vocês conseguem visualizar o destino final de nossa obra? Vamos juntos levantar os materiais e com destreza vamos juntos to realizar grandes maravilhas'
    },
    {
      id: 'day_1027_A',
      month: 10,
      day: 27,
      text: 'bom dia, agrônomas e agrônomos, vamos verificar o ph do solo, checar o nível do nitrogênio e do potássio, por que hoje vamos fazer crescer e florescer novas e fartas safras 🌱🌽 🍅'
    },
    {
      id: 'day_1109_A',
      month: 11,
      day: 9,
      text: 'bom dia, lutadoras e lutadores, apertem as luvas e preparem a respiração, vamos juntos enfrentar as injustiças do mundo para construir uma comunidade de melhor para todos'
    },
    {
      id: 'day_1114_A',
      month: 11,
      day: 14,
      text: 'desbravadoras e desbravadores, vamos marcar o caminho para o progresso e o desenvolvimento, vamos na frente para mostrar como se avança!'
    },
    {
      id: 'day_1124_A',
      month: 11,
      day: 24,
      text: 'bom dia, peregrinas e peregrinos, vamos agradecer todos pelo belo mundo que vivemos, pelos encontros da vida e esperança nossa de cada dia! 🦃 🙏 ☀️'
    }
  ]

  return list.find(
    ({ day, month }) =>
      day === today.getDate() && month === today.getMonth() + 1
  )
}

export default getThemeDay
