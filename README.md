### Fatec ZL - Centro Paula Souza
## Projeto - Junta Peça
##### Disciplina - Programação Web III
Grupo 6
- Gabriel Magalhães de Oliveira
- Dalton Joaquim Soares Guimarães
- Lucas Albuquerque Paradella
- Matheus de Carvalho Simões

##### Processo de Desenvolvimento de Software - PDS
> O PDS segue uma abordagem interativa incremental adaptada do Scrum. Cada interação tem uma definição de pronto estabelecida com objetivo de controlar a qualidade.

##### Estudo de Caso / Objetivo do projeto

> O nosso projeto foi batizado de Junta Peça. Ele será uma plataforma responsável por realizar a 
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
como: "Quais aplicativos você irá utilizar?". Além disso, o cliente poderá montar a própria Build e postala para que outras pessoas possam visualizá-la. E, por fim, em ambos os casos, o cliente será
redirecionado para os sites onde as peças do desktop montado estarão disponíveis para compra.


##### Tecnologias Utilizadas
>Devido a complexidade do sistema, utilizamos diversas tecnologias para a confecção do nosso projeto. Entre elas, podemos citar o Framework Spring Boot, esse foi utilizado para a construção do Back-end. Posteriormente, fizemos a análise estática do nosso código com a ferramenta Sonarlint. Estruturamos a parte do Front-end com React e Bootstrap, além do mais, utilizados o Axios para integração entre Front-end e Back-end.

##### Canvas 
>
O modelo Canva do Projeto:
![canvas](https://i.imgur.com/R1COMC1.png)

##### Product Backlog
> O Product Backlog é utilizado pela nossa equipe para mapear as atividades que devem ser realizadas.Cada requisito tem um identificador único de maneira que seja possível rastrear a necessidade do cliente com a implementação do software.
###
| Identificador | Nome | Descrição |
| ------------ | ------------------------------------------------------------------------ | ------|
| 01 | Pesquisar por Build | Como – usuário, Eu quero – Pesquisar uma Build, De maneira que – seja possível encontrar uma Build específica. |
| 02 | Pesquisar por Criador | Como – usuário, Eu quero – Pesquisar as Builds criadas por um usuário específico, De maneira que – seja possível encontrar ,com mais facilidade, as criações de um usuário de meu interesse. |
| 03 | Pesquisar por Componente | Como – usuário, Eu quero – Pesquisar por componentes específicos, De maneira que – seja possível encontrar um componente especifico. |
| 04 | Criar Build | Como – usuário, Eu quero – Criar uma Build, De maneira que – outras pessoas possam ver o meu projeto. |
| 05 | Manter Build | Como – usuário, Eu quero – Modificar as informações da minha Build, De maneira que – eu possa atualizar a minha Build quando necessário. |
| 06 | Publicar Build | Como – usuário, Eu quero – Compartilhar as Builds que fiz, De maneira que – seja possível receber feedbacks de como melhorar e ajude outros usuários. |
| 07 | Precificação da Build | Como – usuário, Eu quero – Que o sistema Calcule o Preço final da Build, De maneira que – seja possível ter uma noção do preço total da Build que foi montada. |
| 08 | Cadastro do Usuário | Como – usuário, Eu quero – Fazer Cadastro , De maneira que – seja possível ter acesso às funcionalidades exclusivas do site. |
| 09 | Login do Usuário | Como – usuário, Eu quero – Fazer Login, De maneira que – eu possa ter acesso as minhas informações e criações que estão no site e modificá-las.|
| 10 | Trocar minha senha | Como – usuário, Eu quero – Modificar a senha da minha conta, De maneira que – seja possível manter minhas informações de acesso atualizadas se necessário.  |
| 11 | Trocar minhas preferências de e-mail | Como – usuário, Eu quero – Alterar o e-mail de contato, De maneira que – seja possível receber os e-mails no endereço mais relevante. |
| 12 | Compatilhar o conteúdo em redes sociais | Como – usuário, Eu quero – Compartilhar as Peças e Builds em redes sociais, De maneira que – seja possível engajar amigos e os traga para a plataforma. |
| 13 | Adicionar Comentários | Como – usuário, Eu quero – Adicionar um comentário a uma Build, De maneira que – seja possível compartilhar a minha opinião com outros usuários.  |
| 14 | Avaliar Builds | Como – usuário, Eu quero – Avaliar as Builds e saber suas avaliações, De maneira que – eu possa avaliar se as builds recomendadas satisfazem a minha necessidade. |
| 15 | Responder Questionário | Como – usuário, Eu quero – Responder questionários para identificação das minhas necessidades, De maneira que – eu possa receber o auxílio no momento de aquisição do meu computador. |
| 16 | Criar Guias | Como – administrador, Eu quero – Criar Guias Informativos, De maneira que – seja possível criar páginas que orientem o usuário sobre os produtos que ele precisa. |
| 17 | Adicionar Componentes | Como – administrador, Eu quero – Adicionar e disponibilizar mais componentes para o usuário, De maneira que – o Usuário tenha mais opções de componentes no momento da criação de Builds. |
| 18 | Manter Componentes | Como – administrador, Eu quero – Modificar informações individuais de componentes, De maneira que – seja possível modificar as informações dos componentes para esses possam se manter atualizadas. |
| 19 | Inserção do Questionário | Como – administrador, Eu quero – Que os desenvolvedores insiram um conjuto de 7 perguntas, De maneira que – seja possível identificar a necessidade do usuário. |
| 20 | Validação de dados | Como – desenvolvedor, Eu quero – Garantir que os dados estejam corretos de acordo com o previsto, De maneira que – seja possível salvar os dados, sem que haja erros, como, por exemplo, de um campo com o valor inteiro receber um texto. |
| 21 | Geração de Relatórios | Como – administrador, Eu quero – Analisar dados sobre produtos e compuadores cadastrados, De maneira que – seja possível analisar informações, como componente mais utilizados para recomendar em novas builds. |
| 22 | Armazenamento de Dados | Como – administrador, Eu quero – Armazenar em um Banco de Dados todos os Dados relevantes para o negócio, De maneira que – futuramente, eu possa personalizar a experiência do usuário de acordo com seus gostos. |
| 23 | Quem Somos | Como – usuário, Eu quero – Conhecer o Propósito da empresa, De maneira que – seja possível reconhecer as funcionalidades e intenções da empresa. |
| 24 | Tela de Acessibilidade | Como – usuário, Eu quero – Conhecer os recursos de acessibilidade do Site, De maneira que – seja possível reconhecer recursos que facilitem a minha navegação no site. |
| 25 | Recursos de Acessibilidade | Como – usuário, Eu quero – Utilizar o Alto Contraste e aumentar ou diminuir as fontes, De maneira que – o site se torne acessível para pessoas que possuem alguma deficiência visual, como eu. |

##### Definição de pronto
> O sprint será considerado concluído quando:
> 1) Todos os Testes de sistema forem concluídos com 100% de assertividade;
> 2) Código Revisado e Identado;
> 3) Checkout no github, após o projeto ser concluído e submetido a rotina de Testes, o mesmo deve ser atualizado no Github;
> 4) Revisão do Relatório do Sonarlint, análise minuciosa do relatório gerado pelo detector. Todos os erros e sugestões totalmente analisados e caso necessário, corrigidos;
> 5) Aceitação do projeto por parte dos Orientadores.


### Modelo de domínio

O modelo de dominio (Larman, 2006 - classes conceituais ou classes de negócio) foi definido considerando as seguintes classes:
![modelo de dominio](https://i.imgur.com/thgVQAK.png)

>Referencias
- [1] LARMAN, Craig. Utilizando UML e padrões. 2aed., Porto Alegre: Bookman Editora, 2006 (pag. 147).


