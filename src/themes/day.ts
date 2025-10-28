import { DayTheme, FuncTheme } from './types'

const list: Array<DayTheme> = [
  {
    id: 'day-0219-a',
    month: 2,
    day: 19,
    text: 'Esportistas e esportistos , se alonguem, focalize o movimento e pulem para o recorde, vamos para mais uma partida, em rumo a auto superação e novas conquistas 🏆🏅🏃‍♀🏃‍♂'
  },
  {
    id: 'day-0220-a',
    month: 2,
    day: 20,
    text: 'Juízas e juízes, vamos juntos para um dia de ponderações e escolhas, sempre fazendo uso de nossos melhores juízos e á salvos de data venhas 🧑‍⚖🔨'
  },
  {
    id: 'day-0226-a',
    month: 2,
    day: 26,
    text: 'Comediantas e comediantes, bom dia para mais dia de alegrias, diversão e bom humor, vamos juntos trazer sorrisos e animação para todos 🎉🤣😆 '
  },
  {
    id: 'day-02276-a',
    month: 2,
    day: 27,
    text: 'Didatas e didatos, bom dia! Preparem seus livros, afinem suas aulas e aquecem suas vozes para uma mais belo e inspirador dia 💛☀'
  },
  {
    id: 'day-0308-a',
    month: 3,
    day: 8,
    text: 'bom dia para as mulheres do time, feliz dia das mulheres e parabéns pelas conquistas no dia a dia nessa sistema sistematicamente misógino e bom dia para os homens também'
  },
  {
    id: 'day-0310-a',
    month: 3,
    day: 10,
    text: 'Gaiteiras e gaiteiros, preparem seus pulmões e seus repertórios, respirem fundo e vamos fazer um maravilhoso dia com muita música, alegria e dedicação 🎶🙂'
  },
  {
    id: 'day-0312-a',
    month: 3,
    day: 12,
    text: 'Bibliotecárias e bibliotecários, acordai-vos para um pelo dia de organização, descobertas e compartilhamento de conhecimento, um ótimo dia produtivo e instrutivo'
  },
  {
    id: 'day-0314-a',
    month: 3,
    day: 14,
    text: 'Bom dia para os amantes do animais, tutores, país de pets e todos fazem carinhos em cães e gatos estranhos, que seus dias tenham muito carinho e companheirismo 🐶 🐱 💛'
  },
  {
    id: 'day-0319-a',
    month: 3,
    day: 19,
    text: 'carpinteiras e carpinteiros, manipuladores da madeira e construtores de belas artes, vamos juntos para um belo dias aprendendo a respeitar a vida vegetal e usar sua obra para maravilhar mais nossas vidas 🪵 🌳 🪚'
  },
  {
    id: 'day-0320-a',
    month: 3,
    day: 20,
    text: 'contadoras e contadores de histórias, vamos nos alegrar para mais um belo dias de troca de fantasias e realidades, compartilhar esperanças e lições e juntos trazer felicidades para todas e todos 📙 💭 🐲 '
  },
  {
    id: 'day-0326-a',
    month: 3,
    day: 26,
    text: 'chocolateiras e chocolateiros, vamos juntos para preparar uma bela e deliciosa receita, um dia maravilhoso de novos sabores e adoçar esse nova alvorada de todos'
  },
  {
    id: 'day-03268-a',
    month: 3,
    day: 28,
    text: 'diagramadoras e diagramadores, em mais um belo dia vamos preparar artes, textos e organizar tudo para melhor comunicar e informar 📈 📰 📙 '
  },
  {
    id: 'day-0331-a',
    month: 3,
    day: 31,
    text: 'nutricionistas e nutricionistos, uma belo dia para cuidar alimentação de todos, garantir os nutrientes certos para o crescimento e sustentação de nossos corpos e almas 🍪 🥬 🍔'
  },
  {
    id: 'day-0402-a',
    month: 4,
    day: 2,
    text: 'propagandistas e propagandistos, vamos juntos publicar as boas notícias, divulgar a ideia de excelência, otimização e qualidade, trazer a todos um rumo e a esperança de um futuro promissor 🗞️ 🎉 🌄 '
  },
  {
    id: 'day-0407-a',
    month: 4,
    day: 7,
    text: 'jornalistas e jornalistos, vamos para mais um belo dia em busca da verdade, trazer a luz as notícias que todos precisam e manter as pessoas dos nossos corações informadas e com as ferramentas para tomar boas decisões 🗞️ 🎤 🎥 '
  },
  {
    id: 'day-0408-a',
    month: 4,
    day: 8,
    text: 'carterias e carteiros, entregadores de mensagens, finalizadores de esperas e facilitadores do mundo moderno, vamos para mais um belo dia de ótimas entregas, com pontualidade e excelência 📬 📦 🚐 '
  },
  {
    id: 'day-0409-a',
    month: 4,
    day: 9,
    text: 'forjadoras e forjadores, coloquem os óculos de proteção e preparem as chamas, vamos para um belo dia para fortalecer as bases, dobrar os rumos a nossa vontade e moldar futuros 🔥 🏗️ 🔩'
  },
  {
    id: 'day-0414-a',
    month: 4,
    day: 14,
    text: 'cafeicultoras e cafeicultores, preparem seus belos grãos para preparar essa bebida sagrada de cada dia, quente e forte para nos levantar dispostos a conquistar mais um dia e que sua energia nos siga no dia de hoje'
  },
  {
    id: 'day-0415-a',
    month: 4,
    day: 15,
    text: 'desenhistas e desenhistos, preparem seus lápis, pinceis e seu software favorito para um dia expressando o conteúdo de nossas almas e mentes, projetando um novo amanhã com muitas formas e cores'
  },
  {
    id: 'day-0416-a',
    month: 4,
    day: 16,
    text: 'Vocalistas e vocalistos, preparem suas vozes e guturais, vamos juntos para um dia cheio de cantorias e alegrias, vamos movimentar as pessoas direcionar e guiando 🗣️ 🎤 🎸'
  },
  {
    id: 'day-0419-a',
    day: 19,
    month: 4,
    text: 'índias e índio, guardiões dos segredos selvagens e das matas, domesticadores da mandioca, habitantes do coração do Brasil, vamos todos preparar nossos arcos para trazer pela caça para nosso dia'
  },
  {
    id: 'day-0420-a',
    month: 4,
    day: 20,
    text: 'danceiras e danceiros, vamos pegar os sapatos plataformas, armar nossos cabelos com muito hair spray, preparar a bola espelhada para dançarmos juntos e impressionar todos com nossa performance'
  },
  {
    id: 'day-0423-a',
    month: 4,
    day: 23,
    text: 'autoras e autores. vamos para um dia de histórias, invenção de novos mundos, expansão da imaginação e organizadores do conhecimento 📙 🧙 🚀'
  },
  {
    id: 'day-0426-a',
    month: 4,
    day: 26,
    text: 'escultoras e escultores, bom dia e uma ótima semana, para criar obras maravilhosas para encantar o cliente e descobrir novas formas de tralhar a realidade do material bruto'
  },
  {
    id: 'day-0502-a',
    month: 5,
    day: 2,
    text: 'trabalharas e trabalhadores, acorda-vos para mais um pelo de labuta e conquista, para mais oportunidades de mover o mundo para frente e levar o mundo para um futuro belo'
  },
  {
    id: 'day-0504-a',
    month: 5,
    day: 4,
    text: 'sensitivas e sensitivos, deixe o fluxo da vida passar por vocês e guiar seu movimentos, que a força esteja com vocês nesse dia maravilhoso e possamos conquistar com perseverança e respeito'
  },
  {
    id: 'day-0505-a',
    month: 5,
    day: 5,
    text: 'expedicionárias e expedicionários, vamos explorar a vastidão do desconhecido em busca de novas oportunidades e construir novos caminhos, juntos conquistar o nunca conquistado e descobrir o nunca antes revelado'
  },
  {
    id: 'day-0509-a',
    day: 9,
    month: 5,
    text: 'viajantas e viajantes, peguem o passaporte, não esqueçam de colocar toalha na sua mala, vamos conhecer monumentos, histórias e pessoas, para acrescem no nosso repertório e assim agregar nas nossas entregas'
  },
  {
    id: 'day-0512-a',
    month: 5,
    day: 12,
    text: 'enfermeiras e enfermeiros, lavem as mãos e se preparem para mais um belo dia de trabalho para garantir a saúde e estabilidade de nosso paciência que os ensinamentos de Florence Nightingale perdure e orientem nossas ações'
  },
  {
    id: 'day-0512-a',
    month: 5,
    day: 17,
    text: 'senhoras, senhores e o maravilhoso arco-íris entre esses dois, bem-vindos para mais um belo e glorioso dia para fazer o mundo melhor a cada dia com igualdade e oportunidade para todos'
  },
  {
    id: 'day-0518-a',
    month: 5,
    day: 18,
    text: 'museólogas e museólogos, guardiões do passado, construtores da memória coletiva e protetores dos tesouros da história coletiva, vamos juntos criar um futuro melhor, para nos orgulharmos e encher de esperança para tempos vindouros'
  },
  {
    id: 'day-0519-a',
    month: 5,
    day: 19,
    text: 'médicas e médicos, vamos pegar o prontuário do nosso paciente e levar para ele saúde plena, trabalhar com dedicação e presteza para garantir o futuro maravilhoso para todos'
  },
  {
    id: 'day-0520-a',
    month: 5,
    day: 20,
    text: 'abelhas e abelhos, vamos tomar o solzinho da manhã para aquecer e preparar para esse dia frio, colher o pólen das flores e produzir um gostoso e nutritivo mel'
  },
  {
    id: 'day-0522-a',
    month: 5,
    day: 22,
    text: 'góticas e góticos, vamos para um maravilhoso dia de belas músicas, vestes pretas e arquiteturas extraordinárias ⛪ 🤘 🎸'
  },
  {
    id: 'day-0520-a',
    month: 5,
    day: 22,
    text: 'tartarugas e tartarugos, navegantes dos sete mares, exploradores do oceano, habitantes do mundo, vamos juntos aproveitar as correntes marítimas para ir longe e encontrar belas praias e maravilhosos horizontes 🐢 🌊 🗺️'
  },
  {
    id: 'day-0524-a',
    month: 5,
    day: 24,
    text: 'amantas e amantes do café, vamos juntos preparar um bela xícara para o dia de hoje com a ajuda da santa cafeína nos manter produtivos e atentos, um ótimo café para todos e um maravilhoso dia'
  },
  {
    id: 'day-0525-a',
    month: 5,
    day: 25,
    text: 'mochileiras e mochileiros, preparem seus pertences e sua vontade de explorar o universo, vamos de carona em carona para onde nossos sonhos quiserem nos levar, andem sempre com atenção e não esqueçam suas toalhas'
  },
  {
    id: 'day-0528-a',
    month: 5,
    day: 28,
    text: 'Hamburgueiras e hamburgueiros, vamos para um delicioso dia de novos blends, aperfeiçoamento de nossas técnicas, para fazer uma refeição maravilhosa ornando sabor e textura para encantar a todos 🍔 🐮 👩‍🍳'
  },
  {
    id: 'day-0530-a',
    month: 5,
    day: 30,
    text: 'decoradoras e decoradores, peguem seus cortinas, vasinhos de planta, quadros e almofadas vamos deixar nesse ambiente lindo e agradável, para inspirar e transpirar calma e organização, trazer a beleza do mundo para nosso e outros lares'
  },
  {
    id: 'day-0530-b',
    month: 5,
    day: 28,
    text: 'Maquinistas e maquinisto, vamos levar esse novo dia para frente sempre com a carga cheia, guiar sonhos e pessoas para terras cada vez mais distantes, juntos carregar futuro e progresso 🚋 🚆 👩‍✈️ '
  },
  {
    id: 'day-0531-a',
    month: 5,
    day: 31,
    text: 'atenção senhoras e senhores passageiros, bem-vindos ao dia de hoje, para sua segurança estamos aqui para te auxiliar e desenvolver juntos, se precisar de alguma ajuda a um chat de distância pode encontrar um companheiro de trabalho, a previsão de chegada é de trabalho bem feito e sucesso para todos'
  },
  {
    id: 'day-0603-a',
    month: 6,
    day: 3,
    text: 'Bom dia, amigas e amigos nesse dia maravilhoso! Bom dia, amigas e amigos nesse dia maravilhoso! Ops... ei, vamos juntos um dia produtivo e divertido para repetir o que faz bem e praticar bons hábitos ➿ 🔁 🎢'
  },
  {
    id: 'day-004-a',
    month: 6,
    day: 4,
    text: 'Gatas e gatos do meu coração, vamos para um dia de tranquilidade e olho vivo para os arredores, sempre preparos para a caça e receber carinho de todos 😻 🐈‍⬛'
  },
  {
    id: 'day-0605-a',
    month: 6,
    day: 5,
    text: 'Mecânicas e mecânicos, articuladores do mundo vamos para um dia maravilhoso para movimentar a todos, manter a máquina funcionando com precisão e persistência 👩‍🔧 ⚙️ 🦾'
  },
  {
    id: 'day-0606-a',
    month: 6,
    day: 6,
    text: 'Cafeicultoras e cafeicultores, vamos arar a terra para nutrir o grão sagrado, vamos cultivar com amor e dedicação para gerar o liquido negro para alegrar nosso dia ☕ 🫘 💛'
  },
  {
    id: 'day-0609-a',
    month: 6,
    day: 9,
    text: 'Arquivistas e arquivistos, guardiões da história, lembradores dos fatos passados, organizadores do conhecimento, vamos para um pelo dia de encontrar e compartilhar a chave para soluções e ideia 🗃️ 👩‍💼 🗄️'
  },
  {
    id: 'day-0610-a',
    month: 6,
    day: 10,
    text: 'Lusas e lusos, navegantes dos mares, rompedores de tormentas e descobridores de novas rotas vamos juntos para esse belo oceano aberto encontrar riquezas em terras distantes 🚢 🌏 🗺️'
  },
  {
    id: 'day-0611-a',
    month: 6,
    day: 11,
    text: 'Marinheiras e marinheiros, vamos puxar a âncora e ichar velas! Vamos para um maravilhoso dia com muitas aventuras e desafios rumando nosso navio em rumo guiando sonhos e futuros 🚢 🌏 🗺️'
  },
  {
    id: 'day-0611-a',
    month: 6,
    day: 12,
    text: 'Namoradas, namorados, solteiras e solteiros, vamos todos juntos para compartilhar entre nós e todos o amor e compaixão, para mais um pelo dia e nova oportunidade de expressar aos que fazer nossos dias especiais 💛 ❤️‍🔥 💖'
  },
  {
    id: 'day-0721-a',
    month: 7,
    day: 21,
    text: 'confeiteiras e confeiteiros, peguem seus picos, seus glacês, seus fues para fazermos um belo bolo hoje para alimentar e encher os corações de alegrias'
  },
  {
    id: 'day-0817-a',
    month: 8,
    day: 17,
    text: 'historiadoras e historiadores, bem vindos para um dia vindouro, para mais oportunidades de conhecer o passado e entender o futuro que está se desenhando em nossa frente'
  },
  {
    id: 'day-0829-a',
    month: 8,
    day: 29,
    text: 'jogadoras e jogadores, esquentam os consoles, ajustem os controles, arrumem um lugar confortável para mais desafios e possibilidades para desenvolver nossas habilidades para garantir conquistas para todos'
  },
  {
    id: 'day-0901-a',
    month: 9,
    day: 1,
    text: 'fisiculturistas e fisiculturistos, flexionar os músculos, tomar o Whey Protein e muita energia para fazer o supino, vamos esculpir deusas e deuses gregos nesse belo mármore que chamamos de corpo'
  },
  {
    id: 'day-0902-a',
    month: 9,
    day: 2,
    text: 'floristas e floristos, vamos preparar os cravos, dente de leão e rosas, para fazer belas e inspirados arranjos assim decorar o mundo e nossas vidas'
  },
  {
    id: 'day-0914-a',
    month: 9,
    day: 14,
    text: 'frevistas e frevistos, vamos pegar nossos guarda chuvas e nos alegrar por mais um dia em ritmo animado com habilidade e desenvoltura'
  },
  {
    id: 'day-0915-a',
    month: 9,
    day: 15,
    text: 'democratas e democratos do meu brasil, juntos vamos construir as bases para um futuro ordeiro e prospero para os nossos e todos desta pela pátria'
  },
  {
    id: 'day-1004-a',
    month: 10,
    day: 4,
    text: 'bartenders, bom dia, vamos preparar nossas misturas e treinar nossas performances vamos para mais um dia de trabalho para encantar e alegrar '
  },
  {
    id: 'day-1025-a',
    month: 10,
    day: 25,
    text: 'bom dia, para o povo do meu coração, camaradas da luta diária para gerar um mundo melhor, membros da sociedade crescente e progredindo, levantem e olhem para cima esse é o caminho'
  },
  {
    id: 'day-1025-a',
    month: 10,
    day: 26,
    text: 'construtoras e construtores, vocês conseguem visualizar o destino final de nossa obra? Vamos juntos levantar os materiais e com destreza vamos juntos to realizar grandes maravilhas'
  },
  {
    id: 'day-1027-a',
    month: 10,
    day: 27,
    text: 'bom dia, agrônomas e agrônomos, vamos verificar o ph do solo, checar o nível do nitrogênio e do potássio, por que hoje vamos fazer crescer e florescer novas e fartas safras 🌱🌽 🍅'
  },
  {
    id: 'day-1109-a',
    month: 11,
    day: 9,
    text: 'bom dia, lutadoras e lutadores, apertem as luvas e preparem a respiração, vamos juntos enfrentar as injustiças do mundo para construir uma comunidade de melhor para todos'
  },
  {
    id: 'day-1114-a',
    month: 11,
    day: 14,
    text: 'desbravadoras e desbravadores, vamos marcar o caminho para o progresso e o desenvolvimento, vamos na frente para mostrar como se avança!'
  },
  {
    id: 'day-1124-a',
    month: 11,
    day: 24,
    text: 'bom dia, peregrinas e peregrinos, vamos agradecer todos pelo belo mundo que vivemos, pelos encontros da vida e esperança nossa de cada dia! 🦃 🙏 ☀️'
  }
]

export const themeDay: FuncTheme = () => list

const getThemeDay = (today: Date): DayTheme | undefined => {
  return list.find(
    ({ day, month }) =>
      day === today.getDate() && month === today.getMonth() + 1
  )
}

export default getThemeDay
