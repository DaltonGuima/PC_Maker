### Fatec ZL - Centro Paula Souza
## Projeto - Junta Peça (nome novo)
##### Disciplina - Programação Web III
Grupo 6
- Gabriel Magalhães de Oliveira
- Dalton Joaquim Soares Guimarães
- Lucas Albuquerque Paradella
- Matheus de Carvalho Simões

O  nosso  projeto  foi  batizado  de  PCMaker.  Ele  será  uma  plataforma  responsável  por  realizar  a montagem de Hardware de acordo com a necessidade do cliente. Ademais,  os  usuários  da  plataforma  poderão  realizar  a  montagem  de  computadores  por  conta própria e salvar na aba Builds.

##### Processo de Desenvolvimento de Software - PDS
> O PDS segue uma abordagem interativa incremental adaptada do Scrum. Cada interação tem uma definição de pronto estabelecida com objetivo de controlar a qualidade.

##### Estudo de Caso / Objetivo do projeto

> O nosso projeto foi batizado de PCMaker. Ele será uma plataforma responsável por realizar a 
montagem de Hardware de acordo com a necessidade do cliente. 
Ademais, os usuários da plataforma poderão realizar a montagem de computadores por conta 
própria e salvar na aba Builds.

##### Descrição
>Primeiramente, é de suma importância explicar como surgiu a nossa ideia. Ela começou com a
análise de estudos profissionais e de acontecimentos pessoais durante a pandemia. Durante as nossas pesquisas iniciais, para decidir um tema, percebemos que o assunto tecnologia estava em alta.

>Após um aprofundamento, chegamos em um estudo da IDC Brasil que mostrava a seguinte informação: “o
mercado brasileiro de PCs fechou 2021 com alta de 37% em relação a 2020.” Junto a isso, uma parcela
dos integrantes do grupo relatou que alguns de seus parentes tiveram dificuldades para escolher um
desktop durante a pandemia.

>Levando esses pontos em consideração, decidimos elaborar um site que auxilie os usuários na
compra de um desktop funcional, sem que ocorra desperdícios de recursos econômicos e de hardware.

>O nosso site irá atender alguns requisitos como, por exemplo: o usuário poderá se cadastrar e
fazer login no nosso site, para que o computador seja montado sob medida para o cliente, ele terá que
realizar um questionário prévio com respostas delimitadas. Nesse, o cliente terá que responder perguntas
como: "Quais aplicativos você irá utilizar?". Além disso, o cliente poderá montar a própria Build e postala para que outras pessoas possam visualiza-la. E, por fim, em ambos os casos, o cliente será
redirecionado para os sites onde as peças do desktop montado estarão disponíveis para compra.

##### Canvas 
>
O modelo Canva do Projeto:
![canvas](https://i.imgur.com/R1COMC1.png)

##### Requisitos Funcionais
> Cada requisito tem um identificador único de maneira que seja possível rastrear a necessidade do cliente com a implementação do software.
###
| Identificador | Descrição | Prioridade |
| ------------ | ------------------------------------------------------------------------ | ------|
| REQ01 –  Gerenciar Usuários | Como – administrador, Eu quero – gerenciar usuários, De maneira que – seja possível identificar o cliente e o endereço de entrega para confirmar uma venda| Média |
| REQ02 – consultar cliente por ID| Como – vendedor, Eu quero – consultar um cliente pelo ID, De maneira que – seja possível obter informações detalhas do cliente | Alta |
| REQ03 – consultar cliente por CPF | Como – vendedor, Eu quero – consultar um cliente, De maneira que – seja possível obter informações detalhas do cliente | Alta |
| REQ04 – consultar todos os clientes | Como – vendedor, Eu quero – consultar todos os clientes cadastrado, De maneira que – seja possível obter uma lista de clientes | Baixa |
| REQ05 – corrigir informações de cliente | Como – vendedor, Eu quero – corrigir as informações do cliente, De maneira que – seja possível manter as informações atualizadas | Baixa |
| REQ06 – excluir cliente | Como – vendedor, Eu quero – excluir um cliente, De maneira que – seja possível manter informações somente de clientes ativos | Baixa |

| REQ01 – cadastrar cliente | Como – vendedor, Eu quero – cadastrar o cliente, De maneira que – seja possível identificar o cliente e o endereço de entrega para confirmar uma venda| Média |
| REQ02 – consultar cliente por ID| Como – vendedor, Eu quero – consultar um cliente pelo ID, De maneira que – seja possível obter informações detalhas do cliente | Alta |
| REQ03 – consultar cliente por CPF | Como – vendedor, Eu quero – consultar um cliente, De maneira que – seja possível obter informações detalhas do cliente | Alta |
| REQ04 – consultar todos os clientes | Como – vendedor, Eu quero – consultar todos os clientes cadastrado, De maneira que – seja possível obter uma lista de clientes | Baixa |
| REQ05 – corrigir informações de cliente | Como – vendedor, Eu quero – corrigir as informações do cliente, De maneira que – seja possível manter as informações atualizadas | Baixa |
| REQ06 – excluir cliente | Como – vendedor, Eu quero – excluir um cliente, De maneira que – seja possível manter informações somente de clientes ativos | Baixa |

##### Definição de pronto
> O sprint será considerado concluido quando:
> 1) Os casos de teste de aceitação forem executados e obtiverem 100% de satisfatorios. Os casos de teste (CT) são rastreáveis para os requisiitos (REQ). O elo de rastreabilidade
é estabelecido pelo identificador do caso de teste.
> 2) Depois de executado os casos de teste com 100% de satisfatorios o código deve ser armazenado no github (commit).

##### Modelo de Domínio

O modelo de dominio (Larman, 2006 - classes conceituais ou classes de negócio) foi definido considerando as seguintes classes:
![modelo de dominio](https://i.imgur.com/thgVQAK.png)

>Referencias
- [1] KRUCHTEN, Philippe. Reference: Title: Architectural blueprints—the “4+ 1” view model of software architecture. IEEE software, v. 12, n. 6, 1995.
- [2] RICHARDSON, Chris. Microservices patterns: with examples in Java. Simon and Schuster, 2018.
- [3] ERL, Thomas. SOA principles of service design (the Prentice Hall service-oriented computing series from Thomas Erl). Prentice Hall PTR, 2007.
- [4] LARMAN, Craig. Utilizando UML e padrões. 2aed., Porto Alegre: Bookman Editora, 2006 (pag. 147).

