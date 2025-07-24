import { BonusResource } from '../types';

export const bonusResources: BonusResource[] = [
  {
    id: 'maximizing-teacher-poli',
    title: 'Maximizando seu Aprendizado com a Teacher Poli',
    description: 'Ebook Completo Explicando Todas as Funcionalidades da Teacher Poli',
    type: 'ebook',
    thumbnail: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    totalLessons: 5,
    totalDuration: '2h 30min',
    rating: 4.8,
    downloads: 1250,
    lessons: [
      {
        id: '1',
        title: 'Introdução à Teacher Poli',
        description: 'Conheça os fundamentos da plataforma',
        videoUrl: 'https://www.youtube.com/embed/mttHTuEK5Xs',
        duration: '15:30',
        textContent: `
# Introdução à Teacher Poli

## O que é a Teacher Poli?

A Teacher Poli é uma plataforma revolucionária de ensino de inglês que utiliza inteligência artificial para personalizar completamente sua experiência de aprendizado.

## Principais Características:

### 1. Personalização Completa
- Adapta-se ao seu nível atual
- Considera seus objetivos específicos
- Ajusta o ritmo conforme seu progresso

### 2. Metodologia Inovadora
- Baseada em neurociência
- Foco na conversação prática
- Aprendizado contextualizado

### 3. Suporte 24/7
- IA sempre disponível
- Correção instantânea
- Feedback personalizado

## Como Começar

1. **Complete seu perfil**: Forneça informações sobre seu nível e objetivos
2. **Gere seu plano**: Deixe a IA criar um plano personalizado
3. **Comece a praticar**: Inicie suas conversações com a Teacher Poli

## Dicas Importantes

- Seja consistente nos estudos
- Pratique diariamente, mesmo que por poucos minutos
- Não tenha medo de cometer erros - eles fazem parte do aprendizado
        `,
        exercises: [
          {
            id: '1',
            question: 'Qual é a principal característica da Teacher Poli?',
            options: [
              'Ensino tradicional de gramática',
              'Personalização completa usando IA',
              'Aulas em grupo',
              'Foco apenas em leitura'
            ],
            correctAnswer: 1,
            explanation: 'A Teacher Poli se destaca pela personalização completa usando inteligência artificial, adaptando-se ao nível e objetivos de cada aluno.'
          },
          {
            id: '2',
            question: 'Quantas horas por dia a Teacher Poli está disponível?',
            options: [
              '8 horas',
              '12 horas',
              '16 horas',
              '24 horas'
            ],
            correctAnswer: 3,
            explanation: 'A Teacher Poli oferece suporte 24/7, ou seja, está disponível 24 horas por dia, 7 dias por semana.'
          },
          {
            id: '3',
            question: 'Qual é o primeiro passo para começar com a Teacher Poli?',
            options: [
              'Fazer uma prova',
              'Completar seu perfil',
              'Pagar uma taxa',
              'Baixar um aplicativo'
            ],
            correctAnswer: 1,
            explanation: 'O primeiro passo é completar seu perfil, fornecendo informações sobre seu nível atual e objetivos de aprendizado.'
          }
        ],
        completed: false
      },
      {
        id: '2',
        title: 'Configurando seu Perfil',
        description: 'Como otimizar suas configurações pessoais',
        videoUrl: 'https://www.youtube.com/embed/-6J-tNXZkQc',
        duration: '12:45',
        textContent: `
# Configurando seu Perfil na Teacher Poli

## Por que o Perfil é Importante?

Seu perfil é a base para toda a personalização da Teacher Poli. Quanto mais informações precisas você fornecer, melhor será sua experiência de aprendizado.

## Informações Essenciais:

### 1. Nível Atual de Inglês
- **Iniciante**: Pouco ou nenhum conhecimento
- **Básico**: Conhece o básico, mas tem dificuldades
- **Intermediário**: Consegue se comunicar, mas quer melhorar
- **Avançado**: Quer aperfeiçoar e ganhar fluência

### 2. Objetivos de Aprendizado
- Conversação do dia a dia
- Inglês para negócios
- Preparação para exames
- Viagens internacionais
- Crescimento profissional

### 3. Tempo Disponível
- Defina quantos minutos por dia pode estudar
- Seja realista com sua disponibilidade
- A consistência é mais importante que a quantidade

## Configurações Avançadas:

### Preferências de Aprendizado
- Estilo visual, auditivo ou cinestésico
- Preferência por conversação ou exercícios
- Temas de interesse pessoal

### Metas Específicas
- Prazo para atingir objetivos
- Marcos intermediários
- Áreas de foco prioritário

## Dicas para um Perfil Eficaz:

1. **Seja honesto** sobre seu nível atual
2. **Defina objetivos claros** e mensuráveis
3. **Atualize regularmente** conforme evolui
4. **Experimente diferentes configurações** para encontrar o que funciona melhor
        `,
        exercises: [
          {
            id: '1',
            question: 'Por que é importante configurar corretamente seu perfil?',
            options: [
              'Para impressionar outros usuários',
              'Para ter acesso a mais conteúdo',
              'Para personalizar melhor a experiência de aprendizado',
              'Para receber certificados'
            ],
            correctAnswer: 2,
            explanation: 'Um perfil bem configurado permite que a Teacher Poli personalize melhor sua experiência de aprendizado, adaptando o conteúdo às suas necessidades específicas.'
          },
          {
            id: '2',
            question: 'Qual é mais importante para o aprendizado eficaz?',
            options: [
              'Estudar muitas horas por dia',
              'Ter consistência nos estudos',
              'Memorizar muitas palavras',
              'Fazer muitos exercícios de gramática'
            ],
            correctAnswer: 1,
            explanation: 'A consistência é mais importante que a quantidade. É melhor estudar 15 minutos todos os dias do que 2 horas uma vez por semana.'
          }
        ],
        completed: false
      },
      {
        id: '3',
        title: 'Navegando pela Plataforma',
        description: 'Conheça todas as funcionalidades disponíveis',
        videoUrl: 'https://www.youtube.com/embed/povotikiPeg',
        duration: '18:20',
        textContent: `
# Navegando pela Plataforma Teacher Poli

## Interface Principal

A Teacher Poli foi projetada para ser intuitiva e fácil de usar. Vamos explorar cada seção:

### 1. Dashboard Principal
- Visão geral do seu progresso
- Próximas atividades recomendadas
- Estatísticas de aprendizado
- Conquistas e marcos

### 2. Chat com a Teacher Poli
- Interface de conversação principal
- Correção em tempo real
- Sugestões contextuais
- Histórico de conversas

### 3. Plano de Estudos
- Cronograma personalizado
- Atividades diárias
- Metas semanais e mensais
- Progresso detalhado

### 4. Biblioteca de Recursos
- Materiais complementares
- Exercícios extras
- Conteúdo por temas
- Downloads disponíveis

## Funcionalidades Avançadas:

### Sistema de Gamificação
- Pontos por atividades completadas
- Níveis de progresso
- Badges e conquistas
- Ranking de desempenho

### Análise de Progresso
- Gráficos de evolução
- Áreas de melhoria
- Tempo de estudo
- Consistência de uso

### Configurações Personalizadas
- Notificações
- Lembretes de estudo
- Preferências de interface
- Configurações de privacidade

## Dicas de Navegação:

1. **Explore todas as seções** para conhecer os recursos
2. **Use os atalhos** para navegação mais rápida
3. **Personalize sua experiência** através das configurações
4. **Aproveite o sistema de busca** para encontrar conteúdo específico
        `,
        exercises: [
          {
            id: '1',
            question: 'Onde você pode ver seu progresso geral na plataforma?',
            options: [
              'No chat com a Teacher Poli',
              'No dashboard principal',
              'Na biblioteca de recursos',
              'Nas configurações'
            ],
            correctAnswer: 1,
            explanation: 'O dashboard principal oferece uma visão geral completa do seu progresso, incluindo estatísticas, próximas atividades e conquistas.'
          },
          {
            id: '2',
            question: 'O que o sistema de gamificação inclui?',
            options: [
              'Apenas pontos',
              'Pontos e níveis',
              'Pontos, níveis, badges e ranking',
              'Apenas badges'
            ],
            correctAnswer: 2,
            explanation: 'O sistema de gamificação é completo, incluindo pontos por atividades, níveis de progresso, badges/conquistas e ranking de desempenho.'
          }
        ],
        completed: false
      },
      {
        id: '4',
        title: 'Maximizando seu Aprendizado',
        description: 'Estratégias para acelerar seu progresso',
        videoUrl: 'https://www.youtube.com/embed/mttHTuEK5Xs',
        duration: '22:15',
        textContent: `
# Maximizando seu Aprendizado com a Teacher Poli

## Estratégias Comprovadas

### 1. Método da Imersão Controlada
- Dedique tempo diário exclusivo ao inglês
- Crie um ambiente livre de distrações
- Use apenas inglês durante as sessões
- Gradualmente aumente o tempo de imersão

### 2. Prática Ativa vs Passiva
- **Prática Ativa**: Conversação, escrita, exercícios
- **Prática Passiva**: Escuta, leitura, observação
- Combine ambas para resultados otimizados
- Priorize a prática ativa para maior retenção

### 3. Técnica do Espaçamento
- Revise conteúdo em intervalos crescentes
- Use o sistema de repetição espaçada
- Não acumule muito conteúdo novo de uma vez
- Consolide antes de avançar

## Aproveitando a IA da Teacher Poli:

### Feedback Inteligente
- Aceite correções sem resistência
- Peça explicações detalhadas quando necessário
- Use os exemplos fornecidos para praticar
- Aplique as correções em novos contextos

### Personalização Dinâmica
- Seja honesto sobre suas dificuldades
- Comunique suas preferências de aprendizado
- Ajuste configurações conforme evolui
- Experimente diferentes abordagens

### Conversação Natural
- Trate a Teacher Poli como uma pessoa real
- Faça perguntas sobre temas do seu interesse
- Pratique situações do cotidiano
- Não tenha medo de cometer erros

## Técnicas Avançadas:

### 1. Shadowing
- Repita simultaneamente com áudios
- Imite entonação e ritmo
- Comece devagar e acelere gradualmente
- Foque na fluência, não na perfeição

### 2. Thinking in English
- Pratique pensar em inglês
- Descreva mentalmente suas atividades
- Use monólogos internos em inglês
- Traduza menos, contextualize mais

### 3. Contextualização
- Aprenda palavras em frases completas
- Associe vocabulário a situações reais
- Crie histórias com novo vocabulário
- Use exemplos pessoais

## Medindo seu Progresso:

### Indicadores Quantitativos
- Tempo de resposta em conversações
- Número de erros por sessão
- Vocabulário ativo vs passivo
- Fluência em diferentes temas

### Indicadores Qualitativos
- Confiança ao falar
- Naturalidade das expressões
- Compreensão de nuances
- Capacidade de improvisação

## Mantendo a Motivação:

1. **Celebre pequenas vitórias** diariamente
2. **Defina metas realistas** e alcançáveis
3. **Varie os tipos de atividade** para evitar monotonia
4. **Conecte o aprendizado** aos seus interesses pessoais
5. **Acompanhe seu progresso** visualmente
        `,
        exercises: [
          {
            id: '1',
            question: 'Qual é a diferença entre prática ativa e passiva?',
            options: [
              'Ativa é mais difícil, passiva é mais fácil',
              'Ativa envolve produção (falar/escrever), passiva envolve recepção (ouvir/ler)',
              'Ativa é para iniciantes, passiva para avançados',
              'Não há diferença significativa'
            ],
            correctAnswer: 1,
            explanation: 'Prática ativa envolve produzir linguagem (conversação, escrita), enquanto prática passiva envolve receber linguagem (escuta, leitura). Ambas são importantes, mas a ativa gera maior retenção.'
          },
          {
            id: '2',
            question: 'O que é a técnica do "Shadowing"?',
            options: [
              'Estudar na sombra',
              'Repetir simultaneamente com áudios',
              'Seguir outros estudantes',
              'Estudar em grupo'
            ],
            correctAnswer: 1,
            explanation: 'Shadowing é a técnica de repetir simultaneamente com áudios, imitando entonação e ritmo para melhorar a fluência e pronúncia.'
          },
          {
            id: '3',
            question: 'Por que é importante "pensar em inglês"?',
            options: [
              'Para impressionar outras pessoas',
              'Para reduzir a tradução mental e aumentar a fluência',
              'Para memorizar mais vocabulário',
              'Para melhorar a gramática'
            ],
            correctAnswer: 1,
            explanation: 'Pensar em inglês reduz a necessidade de tradução mental, tornando a comunicação mais natural e fluente.'
          }
        ],
        completed: false
      },
      {
        id: '5',
        title: 'Recursos Avançados',
        description: 'Funcionalidades especiais para usuários experientes',
        videoUrl: 'https://www.youtube.com/embed/-6J-tNXZkQc',
        duration: '25:40',
        textContent: `
# Recursos Avançados da Teacher Poli

## Funcionalidades Especiais

### 1. Análise de Sentimentos
A Teacher Poli pode detectar:
- Seu nível de confiança
- Áreas de frustração
- Momentos de progresso
- Padrões emocionais no aprendizado

### 2. Adaptação Contextual
- Ajusta dificuldade em tempo real
- Identifica padrões de erro
- Personaliza exemplos baseados em seus interesses
- Sugere tópicos relevantes para prática

### 3. Simulação de Cenários
- Entrevistas de emprego
- Apresentações profissionais
- Conversas casuais
- Situações de viagem
- Negociações comerciais

## Recursos de Análise:

### Dashboard Avançado
- Heatmap de progresso por habilidade
- Gráficos de evolução temporal
- Comparação com outros usuários
- Previsões de progresso futuro

### Relatórios Detalhados
- Análise semanal/mensal
- Identificação de pontos fortes
- Recomendações personalizadas
- Planos de melhoria específicos

### Métricas Avançadas
- Velocidade de fala
- Precisão gramatical
- Riqueza vocabular
- Fluência conversacional

## Integração com Ferramentas Externas:

### Calendário Inteligente
- Sincronização com Google Calendar
- Lembretes automáticos
- Bloqueio de tempo para estudos
- Otimização de horários

### Exportação de Dados
- Relatórios em PDF
- Planilhas de progresso
- Backup de conversas
- Portfólio de aprendizado

### APIs e Integrações
- Conecta com outras plataformas
- Sincronização de progresso
- Compartilhamento de conquistas
- Integração com redes sociais

## Recursos de Comunidade:

### Grupos de Estudo
- Formação automática por nível
- Desafios em grupo
- Competições amigáveis
- Projetos colaborativos

### Mentoria Peer-to-Peer
- Conexão com usuários avançados
- Sistema de mentoria
- Troca de experiências
- Suporte mútuo

### Eventos Virtuais
- Webinars especializados
- Sessões de conversação em grupo
- Workshops temáticos
- Conferências online

## Personalização Avançada:

### Criação de Conteúdo
- Desenvolva seus próprios exercícios
- Crie listas de vocabulário personalizadas
- Defina metas específicas
- Configure lembretes customizados

### Modo Especialista
- Interface avançada
- Controles granulares
- Estatísticas detalhadas
- Configurações experimentais

### Automação Inteligente
- Rotinas de estudo automáticas
- Ajustes baseados em performance
- Recomendações proativas
- Otimização contínua

## Dicas para Usuários Avançados:

1. **Experimente diferentes modos** de interação
2. **Use dados para orientar** seu aprendizado
3. **Participe ativamente** da comunidade
4. **Contribua com feedback** para melhorar a plataforma
5. **Explore integrações** com suas ferramentas favoritas
6. **Defina metas ambiciosas** mas alcançáveis
7. **Monitore métricas avançadas** regularmente
        `,
        exercises: [
          {
            id: '1',
            question: 'O que a análise de sentimentos da Teacher Poli pode detectar?',
            options: [
              'Apenas erros gramaticais',
              'Nível de confiança e padrões emocionais',
              'Apenas velocidade de fala',
              'Somente vocabulário usado'
            ],
            correctAnswer: 1,
            explanation: 'A análise de sentimentos detecta seu nível de confiança, áreas de frustração, momentos de progresso e padrões emocionais durante o aprendizado.'
          },
          {
            id: '2',
            question: 'Quais cenários podem ser simulados na Teacher Poli?',
            options: [
              'Apenas conversas casuais',
              'Somente situações de trabalho',
              'Entrevistas, apresentações, viagens, negociações e conversas casuais',
              'Apenas situações de viagem'
            ],
            correctAnswer: 2,
            explanation: 'A Teacher Poli pode simular diversos cenários: entrevistas de emprego, apresentações profissionais, conversas casuais, situações de viagem e negociações comerciais.'
          },
          {
            id: '3',
            question: 'O que inclui o modo especialista?',
            options: [
              'Apenas interface diferente',
              'Interface avançada, controles granulares e estatísticas detalhadas',
              'Somente mais exercícios',
              'Apenas configurações básicas'
            ],
            correctAnswer: 1,
            explanation: 'O modo especialista oferece interface avançada, controles granulares, estatísticas detalhadas e configurações experimentais para usuários experientes.'
          }
        ],
        completed: false
      }
    ]
  },
  {
    id: 'stress-pronunciation',
    title: 'Curso Stress in Pronunciation',
    description: 'Conteúdo complementar para aprofundar seus estudos e aprender como os nativos realmente falam',
    type: 'course',
    thumbnail: 'https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=800',
    totalLessons: 8,
    totalDuration: '4h 15min',
    rating: 4.9,
    downloads: 890,
    lessons: [
      {
        id: '1',
        title: 'Introduction to Word Stress',
        description: 'Understanding the basics of English word stress',
        videoUrl: 'https://www.youtube.com/embed/mttHTuEK5Xs',
        duration: '20:30',
        textContent: `
# Introduction to Word Stress

## What is Word Stress?

Word stress is the emphasis placed on certain syllables within words. In English, this is crucial for:
- **Clarity**: Making your speech understandable
- **Natural Flow**: Sounding like a native speaker
- **Meaning**: Sometimes stress changes word meaning

## Why is Word Stress Important?

### 1. Communication Clarity
- Incorrect stress can make words unrecognizable
- Native speakers rely on stress patterns to understand
- Proper stress improves listening comprehension

### 2. Natural Rhythm
- English has a natural rhythm based on stress
- Stressed syllables are longer and clearer
- Unstressed syllables are shorter and weaker

### 3. Meaning Differentiation
Some words change meaning based on stress:
- **RE-cord** (noun) vs **re-CORD** (verb)
- **CON-tent** (noun) vs **con-TENT** (adjective)

## Basic Stress Patterns:

### Two-Syllable Words
- **Nouns**: Usually first syllable (TA-ble, WIN-dow)
- **Verbs**: Usually second syllable (be-GIN, for-GET)
- **Adjectives**: Usually first syllable (HAP-py, EA-sy)

### Three-Syllable Words
- Often stress the first syllable (EL-e-phant)
- Sometimes the second (com-PU-ter)
- Rarely the third (em-ploy-EE)

## Practice Tips:

1. **Listen actively** to native speakers
2. **Mark stress** in new vocabulary
3. **Practice with rhythm** exercises
4. **Record yourself** and compare
5. **Use stress in context** not isolation
        `,
        exercises: [
          {
            id: '1',
            question: 'Where is the stress typically placed in two-syllable nouns?',
            options: [
              'Second syllable',
              'First syllable',
              'Both syllables equally',
              'It varies randomly'
            ],
            correctAnswer: 1,
            explanation: 'Two-syllable nouns typically have stress on the first syllable, like TA-ble, WIN-dow, and PEN-cil.'
          },
          {
            id: '2',
            question: 'What happens when stress is placed incorrectly?',
            options: [
              'Nothing significant',
              'Words may become unrecognizable',
              'Grammar becomes wrong',
              'Vocabulary is reduced'
            ],
            correctAnswer: 1,
            explanation: 'Incorrect word stress can make words unrecognizable to native speakers, significantly impacting communication clarity.'
          },
          {
            id: '3',
            question: 'Which pair shows stress affecting meaning?',
            options: [
              'happy - happiness',
              'record (noun) - record (verb)',
              'table - tables',
              'begin - beginning'
            ],
            correctAnswer: 1,
            explanation: 'RE-cord (noun) vs re-CORD (verb) is a classic example where stress placement changes the word\'s meaning and part of speech.'
          }
        ],
        completed: false
      },
      {
        id: '2',
        title: 'Sentence Stress Patterns',
        description: 'How stress works in complete sentences',
        videoUrl: 'https://www.youtube.com/embed/-6J-tNXZkQc',
        duration: '25:15',
        textContent: `
# Sentence Stress Patterns

## Understanding Sentence Stress

Sentence stress is about emphasizing the most important words in a sentence. This creates the natural rhythm of English.

## Content vs Function Words:

### Content Words (Usually Stressed)
- **Nouns**: book, teacher, computer
- **Main Verbs**: run, study, create
- **Adjectives**: beautiful, difficult, important
- **Adverbs**: quickly, carefully, often
- **Question Words**: what, where, when, how

### Function Words (Usually Unstressed)
- **Articles**: a, an, the
- **Prepositions**: in, on, at, for
- **Pronouns**: he, she, it, they
- **Auxiliary Verbs**: is, are, have, will
- **Conjunctions**: and, but, or

## Sentence Stress Rules:

### Rule 1: New Information
Stress words that provide new or important information:
- "I bought a **CAR** yesterday."
- "The **RED** car is mine."

### Rule 2: Contrast
Stress words that show contrast or correction:
- "I said **BLUE**, not green."
- "**SHE** did it, not him."

### Rule 3: Emphasis
Stress words for emotional emphasis:
- "That's **AMAZING**!"
- "I **LOVE** this song!"

## Common Patterns:

### Statement Pattern
- Subject + Verb + **OBJECT**
- "I like **COFFEE**."
- "She studies **ENGLISH**."

### Question Pattern
- **QUESTION WORD** + auxiliary + subject + verb
- "**WHERE** do you live?"
- "**WHAT** are you doing?"

### Negative Pattern
- Subject + auxiliary + **NOT** + verb
- "I do **NOT** agree."
- "She is **NOT** coming."

## Practice Techniques:

### 1. Clapping Method
- Clap on stressed syllables
- Keep steady rhythm
- Feel the natural beat

### 2. Humming Technique
- Hum the sentence melody
- Notice pitch changes
- Stressed syllables are higher

### 3. Exaggeration Practice
- Over-stress important words
- Make rhythm very obvious
- Gradually make it more natural

## Advanced Concepts:

### Thought Groups
Break long sentences into meaningful chunks:
- "When I get home / I'm going to cook dinner."
- "If it rains tomorrow / we'll stay inside."

### Focus Words
The most important word in each thought group:
- "I **LOVE** chocolate ice cream."
- "The meeting is at **THREE** o'clock."

### Rhythm Patterns
English follows stress-timed rhythm:
- Stressed syllables occur at regular intervals
- Unstressed syllables are compressed between them
- This creates English's characteristic "bounce"
        `,
        exercises: [
          {
            id: '1',
            question: 'Which types of words are usually stressed in sentences?',
            options: [
              'Articles and prepositions',
              'Pronouns and auxiliary verbs',
              'Nouns, main verbs, adjectives, and adverbs',
              'Conjunctions and articles'
            ],
            correctAnswer: 2,
            explanation: 'Content words (nouns, main verbs, adjectives, adverbs) carry the main meaning and are usually stressed, while function words are typically unstressed.'
          },
          {
            id: '2',
            question: 'When do we stress words for contrast?',
            options: [
              'In every sentence',
              'When correcting or showing difference',
              'Only in questions',
              'Never in normal speech'
            ],
            correctAnswer: 1,
            explanation: 'We stress words for contrast when correcting someone or showing a difference, like "I said BLUE, not green."'
          },
          {
            id: '3',
            question: 'What is a "thought group"?',
            options: [
              'A group of people thinking',
              'A meaningful chunk of a sentence',
              'A grammar rule',
              'A type of question'
            ],
            correctAnswer: 1,
            explanation: 'A thought group is a meaningful chunk of a sentence that expresses one complete idea, helping organize speech rhythm.'
          }
        ],
        completed: false
      }
      // Adicionar mais lições conforme necessário...
    ]
  },
  {
    id: 'apa-method',
    title: 'Entendendo e Aplicando o Método APA',
    description: 'Descubra como aplicar o método APA na sua jornada de aprendizado com a Teacher Poli',
    type: 'guide',
    thumbnail: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
    totalLessons: 6,
    totalDuration: '3h 20min',
    rating: 4.7,
    downloads: 1100,
    lessons: [
      {
        id: '1',
        title: 'O que é o Método APA',
        description: 'Introdução aos fundamentos do método',
        videoUrl: 'https://www.youtube.com/embed/povotikiPeg',
        duration: '18:45',
        textContent: `
# O Método APA: Revolucionando o Aprendizado de Inglês

## O que significa APA?

**A**daptive **P**ersonalized **A**pproach - Uma abordagem adaptativa e personalizada para o ensino de inglês.

## Princípios Fundamentais:

### 1. Adaptação Contínua
- O método se ajusta constantemente ao seu progresso
- Identifica suas dificuldades em tempo real
- Modifica estratégias baseado em seu desempenho
- Personaliza conteúdo para suas necessidades específicas

### 2. Personalização Profunda
- Considera seu estilo de aprendizagem único
- Adapta-se aos seus interesses pessoais
- Respeita seu ritmo individual
- Incorpora seus objetivos específicos

### 3. Abordagem Holística
- Integra todas as habilidades linguísticas
- Conecta aprendizado com contexto real
- Desenvolve competência comunicativa completa
- Foca na aplicação prática

## Como o APA Funciona:

### Fase 1: Diagnóstico Inteligente
- Avaliação inicial abrangente
- Identificação de pontos fortes e fracos
- Mapeamento de preferências de aprendizagem
- Definição de objetivos personalizados

### Fase 2: Planejamento Dinâmico
- Criação de roteiro personalizado
- Seleção de atividades adequadas
- Definição de marcos de progresso
- Estabelecimento de cronograma flexível

### Fase 3: Execução Adaptativa
- Implementação de atividades personalizadas
- Monitoramento contínuo do progresso
- Ajustes em tempo real
- Feedback imediato e construtivo

### Fase 4: Avaliação e Refinamento
- Análise regular do desempenho
- Identificação de novas necessidades
- Refinamento de estratégias
- Evolução contínua do plano

## Diferenças do Método Tradicional:

### Método Tradicional:
- Abordagem única para todos
- Ritmo fixo e inflexível
- Foco em gramática isolada
- Avaliação padronizada

### Método APA:
- Abordagem única para cada pessoa
- Ritmo adaptável e flexível
- Foco em comunicação contextualizada
- Avaliação personalizada e contínua

## Benefícios Comprovados:

### 1. Eficiência Aumentada
- Redução de 40% no tempo de aprendizado
- Maior retenção de conteúdo
- Progresso mais consistente
- Menos frustração e desistência

### 2. Motivação Sustentada
- Conteúdo sempre relevante
- Desafios adequados ao nível
- Reconhecimento de progresso
- Conexão com interesses pessoais

### 3. Resultados Duradouros
- Aprendizado mais profundo
- Melhor transferência para situações reais
- Desenvolvimento de autonomia
- Habilidades metacognitivas aprimoradas

## Aplicação Prática:

### No Vocabulário:
- Palavras selecionadas por relevância pessoal
- Contextos baseados em seus interesses
- Repetição espaçada personalizada
- Associações significativas

### Na Gramática:
- Regras apresentadas quando necessárias
- Exemplos do seu contexto de vida
- Prática em situações reais
- Correção contextualizada

### Na Conversação:
- Tópicos de seu interesse
- Situações relevantes para você
- Nível de complexidade adequado
- Feedback personalizado

### Na Compreensão:
- Materiais adaptados ao seu nível
- Temas de seu interesse
- Velocidade ajustada
- Suporte contextual personalizado
        `,
        exercises: [
          {
            id: '1',
            question: 'O que significa a sigla APA no contexto do método de ensino?',
            options: [
              'Advanced Practical Application',
              'Adaptive Personalized Approach',
              'Automatic Progressive Assessment',
              'Active Participatory Activities'
            ],
            correctAnswer: 1,
            explanation: 'APA significa Adaptive Personalized Approach - uma abordagem adaptativa e personalizada que se ajusta continuamente às necessidades individuais de cada aluno.'
          },
          {
            id: '2',
            question: 'Qual é a principal diferença entre o método APA e métodos tradicionais?',
            options: [
              'APA usa mais tecnologia',
              'APA é mais caro',
              'APA personaliza para cada indivíduo, enquanto métodos tradicionais usam abordagem única',
              'APA só funciona online'
            ],
            correctAnswer: 2,
            explanation: 'A principal diferença é que o método APA personaliza completamente a experiência para cada indivíduo, enquanto métodos tradicionais aplicam a mesma abordagem para todos os alunos.'
          },
          {
            id: '3',
            question: 'Quantas fases tem o processo do método APA?',
            options: [
              '2 fases',
              '3 fases',
              '4 fases',
              '5 fases'
            ],
            correctAnswer: 2,
            explanation: 'O método APA tem 4 fases: Diagnóstico Inteligente, Planejamento Dinâmico, Execução Adaptativa e Avaliação e Refinamento.'
          }
        ],
        completed: false
      }
      // Adicionar mais lições conforme necessário...
    ]
  }
];