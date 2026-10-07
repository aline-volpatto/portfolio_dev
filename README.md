# Portfolio — Aline Volpatto

Portfolio pessoal desenvolvido em React para apresentação profissional,
habilidades técnicas, projetos desenvolvidos e informações de contato.

## 1. Sobre o projeto

Este projeto consiste no desenvolvimento de um portfolio pessoal utilizando
React, JavaScript, CSS, CSS Modules e Bootstrap.

A aplicação foi desenvolvida com foco em organização de código,
componentização, reutilização de componentes, responsividade e apresentação
dos projetos desenvolvidos durante minha formação na área de tecnologia.

O portfolio também apresenta demonstrações em vídeo dos projetos, permitindo
que o visitante conheça melhor cada aplicação diretamente pela interface.

## 2. Objetivos

Os principais objetivos do projeto são:

- Desenvolver uma aplicação utilizando React;
- Praticar componentização e reutilização de componentes;
- Trabalhar com React Hooks;
- Aplicar conceitos de estado, props e eventos;
- Utilizar CSS Modules para organização dos estilos;
- Desenvolver interfaces responsivas;
- Utilizar Bootstrap em componentes da aplicação;
- Organizar imagens e vídeos como assets;
- Praticar controle de versão utilizando Git e GitHub;
- Utilizar branches e Pull Requests durante o desenvolvimento;
- Construir uma aplicação que possa ser utilizada como portfolio profissional.

## 3. Funcionalidades

### Navegação

A aplicação possui uma barra de navegação responsiva contendo links para as
principais seções do portfolio.

O componente utiliza Bootstrap para a estrutura e o comportamento responsivo,
enquanto os estilos específicos da aplicação são definidos através de CSS
Modules.

### Seção Sobre

Apresenta informações sobre minha trajetória, formação, interesses e
habilidades relacionadas à área de tecnologia.

### Seção de Projetos

Os projetos são apresentados através de cards contendo:

- Nome do projeto;
- Imagem de apresentação;
- Descrição;
- Botão para demonstração;
- Botão para informações adicionais.

### Demonstrações

Os projetos que possuem demonstração disponibilizam vídeos diretamente na
aplicação.

Os arquivos de vídeo são armazenados na pasta de assets e foram convertidos
para o formato MP4 para melhorar a compatibilidade com navegadores.

### Modal

As demonstrações e informações dos projetos são apresentadas através de
janelas modais.

O componente de modal possui:

- Abertura e fechamento controlados por estado;
- Botão para fechamento;
- Fechamento através da tecla Escape;
- Fechamento ao clicar fora do conteúdo;
- Reprodução de vídeos;
- Exibição das informações dos projetos.

## 4. Tecnologias utilizadas

### React

Utilizado como principal biblioteca para construção da interface e
organização da aplicação em componentes reutilizáveis.

### JavaScript

Utilizado para implementação da lógica da aplicação, gerenciamento de estado,
eventos e manipulação dos dados dos projetos.

### HTML

Utilizado através do JSX para estruturação dos componentes da aplicação.

### CSS

Utilizado para estilização e definição da identidade visual do portfolio.

### CSS Modules

Utilizado para encapsular os estilos dos componentes e reduzir conflitos
entre classes CSS.

### Bootstrap

Utilizado principalmente para estruturação e comportamento responsivo da
barra de navegação.

### Vite

Utilizado como ferramenta de desenvolvimento, execução local e build da
aplicação.

### Git e GitHub

Utilizados para controle de versão, organização do código e gerenciamento do
processo de desenvolvimento.

## 5. Arquitetura da aplicação

A aplicação utiliza uma arquitetura baseada em componentes, separando as
responsabilidades de cada parte da interface.

Principais componentes:

```text
Navegacao
SobreMim
Projetos
Card
Modal
Contato
Rodape