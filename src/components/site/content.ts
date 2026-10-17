export const WHATSAPP_URL =
  "https://wa.me/5585000000000?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20consulta";
export const INSTAGRAM_URL = "https://instagram.com/thaiseufrasio.adv";
export const OAB = "OAB/CE 00.000";
export const CIDADE = "Ubajara · Ceará";

export const AREAS = [
  {
    numero: "01",
    nome: "Direito Previdenciário",
    curto: "Previdenciário / INSS",
    resumo:
      "Benefício negado, cessado ou atrasado pelo INSS? É aqui que a maior parte do trabalho acontece.",
    itens: [
      "Salário-maternidade (inclusive trabalhadora rural)",
      "BPC/LOAS negado por renda ou perícia",
      "Aposentadoria por idade, rural e por invalidez",
      "Recurso de indeferimento e revisão de benefício",
    ],
  },
  {
    numero: "02",
    nome: "Direito do Consumidor",
    curto: "Descontos indevidos",
    resumo:
      "Desconto que você não autorizou no benefício ou na conta? Dá para parar e reaver o valor.",
    itens: [
      "Empréstimo consignado não autorizado",
      "Descontos de associações no benefício do INSS",
      "Cobrança indevida de banco ou financeira",
      "Devolução de valores e indenização",
    ],
  },
  {
    numero: "03",
    nome: "Acompanhamento criminal",
    curto: "Acompanhamento criminal",
    resumo: "Atuação pontual: acompanhamento em audiências e orientação em delegacia, com sigilo.",
    itens: [
      "Acompanhamento em audiências",
      "Orientação em delegacia",
      "Acompanhamento de processo em curso",
    ],
  },
];

export const PROCESSO = [
  {
    n: "01",
    titulo: "Conversa e documentos",
    texto:
      "Pelo WhatsApp ou no escritório em Ubajara. Traga RG, CPF, comprovante de residência e as cartas do INSS que você recebeu.",
  },
  {
    n: "02",
    titulo: "Análise do CNIS",
    texto:
      "Puxo seu extrato de contribuições e a carta de indeferimento para saber exatamente por que o pedido foi negado.",
  },
  {
    n: "03",
    titulo: "Caminho e prazos",
    texto:
      "Digo se o melhor é novo pedido, recurso administrativo ou ação judicial — e o prazo realista de cada um, por escrito.",
  },
  {
    n: "04",
    titulo: "Acompanhamento",
    texto:
      "Você recebe aviso a cada movimentação: perícia marcada, exigência do INSS, decisão. Sem precisar perguntar.",
  },
];

export const DIFERENCIAIS = [
  {
    n: "01",
    titulo: "Resposta em 24h úteis",
    texto: "Mensagem no WhatsApp respondida por mim, não por atendente automático.",
  },
  {
    n: "02",
    titulo: "Honorários por escrito",
    texto: "Valor e forma de pagamento apresentados antes de assinar qualquer contrato.",
  },
  {
    n: "03",
    titulo: "Aviso a cada movimentação",
    texto: "Perícia, exigência ou decisão: você é avisado assim que entra no processo.",
  },
  {
    n: "04",
    titulo: "Atendimento online",
    texto: "Para quem mora na zona rural ou em outra comarca, tudo pode ser resolvido a distância.",
  },
];

export const PRIMEIRA_SEMANA = [
  {
    dia: "Dia 1",
    titulo: "Conversa e lista de documentos",
    texto:
      "Você conta o que aconteceu pelo WhatsApp ou no escritório. No mesmo dia recebe uma lista escrita do que precisa reunir — RG, CPF, comprovante de residência, cartas do INSS e, no caso rural, notas do produtor ou declaração do sindicato.",
  },
  {
    dia: "Dias 2 e 3",
    titulo: "Leitura da carta e do CNIS",
    texto:
      "Puxo seu extrato de contribuições e leio a carta de indeferimento linha por linha. É aqui que aparece o motivo real da negativa: falta de prova, cálculo de renda familiar ou resultado de perícia.",
  },
  {
    dia: "Dias 4 e 5",
    titulo: "Caminho recomendado e honorários",
    texto:
      "Digo por escrito se o melhor é novo pedido, recurso administrativo ou ação judicial, o que cada um exige de prova e o valor dos honorários. Se eu achar que não há caminho, eu digo isso também.",
  },
  {
    dia: "Dias 6 e 7",
    titulo: "Protocolo e primeiro aviso",
    texto:
      "Decidindo seguir, o pedido ou o recurso é protocolado e você recebe o número do processo. A partir daí, cada movimentação — perícia, exigência, decisão — chega a você sem precisar perguntar.",
  },
];

export const DEPOIMENTOS = [
  {
    nome: "M. R.",
    cidade: "Ibiapina",
    area: "Aposentadoria rural",
    destaque: true,
    texto:
      "Eu já tinha tentado duas vezes sozinha e o INSS negou dizendo que não tinha prova do trabalho na roça. A Thaís pediu as notas do meu sogro, a declaração do sindicato e o cadastro dos meninos na escola — coisas que eu nem sabia que servia. Explicou que ia demorar e demorou mesmo, mas me avisava a cada mexida no processo. Hoje recebo meu benefício.",
  },
  {
    nome: "A. S.",
    cidade: "Ubajara",
    area: "BPC/LOAS negado",
    texto:
      "Explicou cada detalhe da carta de negativa com uma calma que me deu segurança em um momento muito difícil.",
  },
  {
    nome: "J. A.",
    cidade: "Tianguá",
    area: "Desconto indevido no benefício",
    texto:
      "Tinha um desconto de associação que eu nunca autorizei. Foi suspenso e recebi os valores de volta.",
  },
  {
    nome: "R. V.",
    cidade: "São Benedito",
    area: "Salário-maternidade",
    texto:
      "Atendimento todo pelo WhatsApp, porque eu moro longe. Nunca precisei ficar cobrando resposta.",
  },
];

export const FAQ = [
  {
    q: "Trabalhadora rural tem direito ao salário-maternidade?",
    a: "Sim. A segurada especial (quem trabalha na roça, em regime familiar) tem direito ao salário-maternidade mesmo sem carteira assinada. O que o INSS exige é a prova da atividade rural — notas do produtor, declaração do sindicato, documentos da terra, cadastro escolar dos filhos. Reunir essa prova é a parte principal do trabalho.",
  },
  {
    q: "Meu BPC foi negado. Ainda há o que fazer?",
    a: "Sim, e negativa é comum. Se foi negado por renda, dá para discutir quais valores entram no cálculo do grupo familiar; se foi por perícia, cabe recurso e, se necessário, ação judicial com perícia feita pelo juízo. O primeiro passo é ler a carta de indeferimento — ela diz o motivo exato.",
  },
  {
    q: "Quanto tempo o INSS leva para responder?",
    a: "Depende do benefício. Salário-maternidade costuma sair mais rápido; BPC e aposentadorias por invalidez dependem de agendamento de perícia e levam mais tempo. Na via judicial os prazos são maiores, mas eu informo o cenário realista antes de você decidir — sem promessa de data.",
  },
  {
    q: "Preciso viajar para resolver meu processo?",
    a: "Não. Os processos são eletrônicos e tramitam na Justiça Federal com atendimento na região. Perícias e audiências, quando necessárias, são marcadas no local mais próximo possível e eu aviso com antecedência.",
  },
  {
    q: "Sofro descontos indevidos no benefício. Como agir?",
    a: "Traga o extrato de pagamento do INSS. Identificando o desconto de associação ou consignado que você não autorizou, é possível pedir a suspensão imediata e a devolução dos valores, além de indenização em muitos casos.",
  },
  {
    q: "O atendimento pode ser todo pelo WhatsApp?",
    a: "Pode. Documentos são enviados por foto, o contrato é assinado eletronicamente e você recebe as atualizações pelo mesmo número. Quem preferir presencial é atendido em Ubajara-CE, com hora marcada.",
  },
];

export const TIMELINE = [
  {
    ano: "Formação",
    texto: "Graduação em Direito, com pesquisa voltada a benefícios previdenciários.",
  },
  { ano: "OAB/CE", texto: "Inscrição na Ordem dos Advogados do Brasil, seccional Ceará." },
  { ano: "Foco", texto: "Atuação concentrada em INSS e defesa do consumidor superendividado." },
  { ano: "Hoje", texto: "Atendimento em Ubajara e comarcas da Ibiapaba, presencial e online." },
];
