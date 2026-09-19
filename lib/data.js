export const profile = {
  name: "Emerson Willian do Nascimento Dias",
  course: "Ciência da Computação",
  institution: "Universidade Católica de Pernambuco",
  period: "5º período",
  location: "Pernambuco, Brasil",
  goal:
    "Em busca da primeira oportunidade de estágio em Tecnologia da Informação, com interesse em desenvolvimento de software e Java.",
  email: "emersonwdias2013@gmail.com",
  github: "https://github.com/EmersonW95",
  linkedin: "https://www.linkedin.com/in/emerson-willian-19984630b/",
};

export const academic = [
  {
    code: "AC-01",
    title: "Andador Inteligente — Robótica Inclusiva",
    period: "Robótica Inclusiva",
    description:
      "Sistema de apoio ao monitoramento e segurança de idosos, integrando uma Raspberry Pi a sensores e software para detectar quedas, obter localização e enviar alertas ao responsável.",
    stack: [
      "Python",
      "Raspberry Pi",
      "Flask",
      "SQLite",
      "Telegram",
      "GPS NEO-6M",
      "MPU6050",
      "Raspberry Pi Camera",
      "YOLO",
    ],
    highlights: [
      "Detecção de quedas e monitoramento de permanência no chão",
      "Alertas automáticos via Telegram e localização por GPS",
      "Monitoramento por câmera e dashboard web de acompanhamento",
      "Apresentado e avaliado com nota 10/10",
    ],
  },
  {
    code: "AC-02",
    title: "Sistema de Biblioteca",
    period: "Programação Orientada a Objetos",
    description:
      "Sistema de gerenciamento de biblioteca estruturado em camadas, seguindo o padrão MVC, com persistência de dados em arquivos.",
    stack: ["Java", "Git", "GitHub", "Gradle", "Arquivos .dat"],
    highlights: [
      "Separação entre modelo, serviços, controladores e aplicação",
      "Persistência de dados em arquivos",
      "Desenvolvimento colaborativo com Git e GitHub",
    ],
  },
  {
    code: "AC-03",
    title: "Next Fit — Gerenciamento de Academia",
    period: "Banco de Dados",
    description:
      "Modelagem de um sistema de gerenciamento de academia contemplando alunos, planos, instrutores, treinos e pagamentos.",
    stack: ["Modelagem de Dados", "MER", "DER", "SQL"],
    highlights: [
      "Modelo e Diagrama Entidade-Relacionamento (MER / DER)",
      "Definição de chaves primárias, relacionamentos e cardinalidades",
      "Estruturação de tabelas relacionais",
    ],
  },
  {
    code: "AC-04",
    title: "Estruturas de Dados",
    period: "Estruturas de Dados",
    description:
      "Implementações práticas de estruturas e algoritmos clássicos trabalhadas ao longo da disciplina.",
    stack: ["Árvores Binárias de Busca", "Árvores AVL", "Busca em Largura", "Listas Encadeadas"],
    highlights: [
      "Árvores Binárias de Busca (BST) e Árvores AVL",
      "Busca em largura e árvores espelhadas",
      "Análise de complexidade de algoritmos",
    ],
  },
  {
    code: "AC-05",
    title: "Projetos Web — React e Next.js",
    period: "Programação Web e Mobile",
    description:
      "Aplicações web construídas com tecnologias modernas de frontend, versionadas e publicadas em produção.",
    stack: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Vercel"],
    highlights: [
      "Versionamento com Git e GitHub",
      "Publicação contínua via Vercel",
    ],
  },
  {
    code: "AC-06",
    title: "Redes de Computadores",
    period: "Redes de Computadores",
    description:
      "Atividades práticas envolvendo servidores HTTP, comunicação de rede e testes via linha de comando.",
    stack: ["Python", "HTTP", "Servidor Local", "Curl", "Terminal"],
    highlights: [
      "Implementação de servidor HTTP local em Python",
      "Testes de requisições via curl e terminal",
    ],
  },
  {
    code: "AC-07",
    title: "NextCar — Vendas de Carros Usados",
    period: "Desenvolvimento Back-End",
    description:
      "API REST para registro e vendas de carros usados, construída com Spring Boot e persistência em MySQL.",
    stack: ["Java", "Spring Boot", "MySQL", "Postman"],
    highlights: [
      "Refatoração seguindo princípios SOLID / GRASP e padrões GoF",
      "Cobertura de testes de branch de 100% na camada de serviço (JaCoCo)",
      "Diagramas UML de classe, sequência e colaboração",
    ],
  },
];

export const extracurricular = [
  {
    code: "EX-01",
    title: "Projeto Padawan — Mentoria Acadêmica",
    description:
      "Atuação como veterano em um projeto de mentoria voltado ao acolhimento de alunos calouros, acompanhando dois alunos com encontros semanais de cerca de 30 minutos, oferecendo suporte e orientação na adaptação à graduação.",
  },
];

export const projects = [
  {
    code: "PROJ-01",
    title: "Andador Inteligente",
    description:
      "Sistema de monitoramento com Raspberry Pi, sensores, câmera, GPS e visão computacional para detecção de quedas e acompanhamento do usuário.",
    stack: ["Python", "Raspberry Pi", "Flask", "SQLite", "YOLO", "GPS", "MPU6050", "Telegram"],
    link: "https://github.com/andadorInteligente/projeto-andador",
  },
  {
    code: "PROJ-02",
    title: "Sistema de Biblioteca",
    description:
      "Gerenciamento de biblioteca em Java, com arquitetura modular baseada em MVC e persistência de dados em arquivos.",
    stack: ["Java", "Git", "GitHub", "Gradle"],
    link: "https://github.com/NextCoffeeJ/sistema_biblioteca",
  },
  {
    code: "PROJ-03",
    title: "Projetos Web",
    description:
      "Aplicações web em React e Next.js, incluindo publicação das entregas na Vercel.",
    stack: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Vercel"],
    link: "https://github.com/EmersonW95/programacao-web-e-mobile",
  },
  {
    code: "PROJ-04",
    title: "NextCar",
    description:
      "API REST em Java com Spring Boot para registro e vendas de carros usados.",
    stack: ["Java", "Spring Boot", "MySQL", "Postman"],
    link: "https://github.com/NextCar-Project/projeto-next-car",
  },
  {
    code: "PROJ-05",
    title: "Jogo de Dados",
    description: "Jogo de dados para 2 jogadores em 5 rodadas, feito em Next.js.",
    stack: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Vercel"],
    link: "https://github.com/EmersonW95/jogo-dados",
  },
];

// Banco de palavras do Jogo da Forca — termos do universo de TI / CC
export const hangmanWords = [
  { word: "JAVASCRIPT", hint: "Linguagem de programação do navegador" },
  { word: "PYTHON", hint: "Linguagem usada no Andador Inteligente" },
  { word: "RASPBERRY", hint: "Computador de placa única" },
  { word: "ALGORITMO", hint: "Sequência de passos para resolver um problema" },
  { word: "RECURSAO", hint: "Função que chama a si mesma" },
  { word: "COMPILADOR", hint: "Traduz código-fonte em código de máquina" },
  { word: "BANCODEDADOS", hint: "Onde os dados ficam armazenados" },
  { word: "SERVIDOR", hint: "Responde requisições de clientes" },
  { word: "FRAMEWORK", hint: "Estrutura que acelera o desenvolvimento" },
  { word: "VARIAVEL", hint: "Guarda um valor na memória" },
  { word: "FUNCAO", hint: "Bloco de código reutilizável" },
  { word: "OBJETO", hint: "Instância de uma classe" },
  { word: "HERANCA", hint: "Pilar da orientação a objetos" },
  { word: "POLIMORFISMO", hint: "Muitas formas para um mesmo método" },
  { word: "ENCAPSULAMENTO", hint: "Esconde os detalhes internos de um objeto" },
  { word: "ARVOREBINARIA", hint: "Estrutura de dados com no máximo dois filhos" },
  { word: "PILHA", hint: "Estrutura LIFO" },
  { word: "FILA", hint: "Estrutura FIFO" },
  { word: "PONTEIRO", hint: "Guarda o endereço de memória de outra variável" },
  { word: "SISTEMAOPERACIONAL", hint: "Gerencia os recursos do computador" },
  { word: "REDE", hint: "Conjunto de dispositivos conectados" },
  { word: "PROTOCOLO", hint: "Regras de comunicação entre sistemas" },
  { word: "REQUISICAO", hint: "Pedido feito a um servidor" },
  { word: "COMPONENTE", hint: "Peça reutilizável de interface" },
  { word: "ESTADO", hint: "Dado que muda ao longo do tempo em uma aplicação" },
  { word: "DEPLOY", hint: "Colocar uma aplicação no ar" },
  { word: "VERSIONAMENTO", hint: "Controle de histórico do código" },
  { word: "REPOSITORIO", hint: "Onde o código-fonte é guardado" },
  { word: "TERMINAL", hint: "Interface de linha de comando" },
  { word: "DEBUG", hint: "Processo de encontrar e corrigir erros" },
  { word: "SPRINGBOOT", hint: "Framework Java usado no NextCar" },
  { word: "MODULO", hint: "Parte independente de um sistema maior" },
];
