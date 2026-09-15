# Lacrei Saúde — Frontend

Aplicação frontend desenvolvida como desafio técnico inspirado na proposta da **Lacrei Saúde**, com foco em acessibilidade, responsividade, experiência do usuário e performance.

O projeto simula uma plataforma para facilitar a busca por profissionais de saúde, utilizando uma interface acolhedora e acessível, com a identidade visual da Lacrei Saúde, seguindo o guia Marsha Design System.

## 🔗 Projeto

**Deploy da aplicação:** [Clique Aqui.](https://projeto-frontend-lacrei-saude.vercel.app)


---

## Objetivo

Desenvolver uma aplicação frontend moderna que represente uma experiência de busca por profissionais de saúde, seguindo os princípios visuais e de acessibilidade propostos pela Lacrei Saúde.

O projeto foi desenvolvido considerando:

* Design mobile-first
* Responsividade
* Acessibilidade
* Navegação por teclado
* HTML semântico
* Componentização
* Performance
* SEO
* Testes automatizados
* Experiência consistente em diferentes tamanhos de tela

---

## Funcionalidades

### Página inicial

* Apresentação da proposta da plataforma
* Seções informativas
* Navegação principal
* Links para busca e demais áreas
* Layout responsivo

### Busca de profissionais

* Listagem de profissionais
* Busca por nome, especialidade ou localização
* Feedback para buscas sem resultados
* Interface responsiva
* Visualização do perfil do profissional através de modal

### Modal de profissional

* Abertura através do botão "Ver perfil"
* Fechamento através do botão dedicado
* Fechamento utilizando `Escape`
* Controle de foco
* Retorno do foco para o elemento que abriu o modal
* Navegação por teclado mantida dentro do modal

### Menu mobile

* Menu responsivo
* Controle através de botão acessível
* `aria-expanded`
* `aria-controls`
* Navegação por teclado
* Controle de foco ao abrir e fechar

---

## Tecnologias

* **Next.js 16**
* **React 19**
* **TypeScript**
* **Styled Components**
* **Vitest**
* **Testing Library**
* **Material Symbols**
* **GitHub**
* **Vercel**

---

## Estrutura

A aplicação foi organizada separando páginas, componentes, estilos, dados e serviços.

```text
src/
├── app/
│   ├── buscar/
│   │   ├── page.tsx
│   │   └── page.styles.ts
│   ├── page.tsx
│   └── page.styles.ts
|   |__ layout.tsx
│
├── components/
│   ├── Header/
│   ├── Footer/
│   └── ProfessionalModal/
│
├── data/
│   └── professionals.json
│
├── services/
│   └── professionals.ts
│
├── styles/
│   ├── colors.ts
│   ├── GlobalStyle.ts
│   ├── StyledComponentsRegistry.tsx
│   ├── styled.d.ts
│   ├── theme.ts
│   └── typography.ts
│
└── test/
    └── render.tsx
```

A separação entre dados e serviços permite que a implementação atual utilizando dados locais possa ser posteriormente substituída por uma API real sem precisar acoplar a página diretamente à fonte dos dados.

---

## Service Layer / Mock API

Para simular uma integração com backend, os profissionais são disponibilizados através de uma camada de serviço:

```text
src/services/professionals.ts
```

A página de busca não acessa diretamente o arquivo JSON.

O fluxo utilizado é:

```text
Buscar página
      ↓
Service
      ↓
professionals.json
      ↓
Resultados
```

Atualmente o serviço utiliza dados locais, mas sua estrutura foi criada pensando em uma futura substituição por uma API HTTP real.

---

## Acessibilidade

A acessibilidade foi tratada como parte da implementação, e não apenas como uma etapa final de validação.

Entre as medidas utilizadas:

* HTML semântico
* Hierarquia correta de headings
* Labels associados aos campos
* `aria-label`
* `aria-expanded`
* `aria-controls`
* `aria-live`
* `role="dialog"`
* `aria-modal`
* `aria-labelledby`
* `aria-describedby`
* Navegação por teclado
* Suporte à tecla `Escape`
* Gerenciamento de foco
* Retorno do foco após fechamento do modal
* Contraste adequado
* Estados de `focus-visible`

---

Validação

Além dos testes automatizados e da auditoria do Lighthouse, foi realizado um teste básico utilizando o NVDA, validando:

* Navegação pelos headings
* Navegação pelos links e botões
* Anúncio dos estados do menu mobile
* Identificação dos campos de busca
* Abertura e identificação do modal
* Foco no botão de fechamento
* Navegação por teclado dentro do modal
* Fechamento com Escape
* Retorno do foco ao elemento que abriu o modal

## Responsividade

O projeto foi desenvolvido seguindo uma abordagem **mobile-first**.

Foram considerados diferentes tamanhos de tela para:

* Header
* Menu mobile
* Hero
* Formulário de busca
* Cards de profissionais
* Modal
* Footer

O layout utiliza breakpoints para adaptar a quantidade de colunas e espaçamentos conforme o tamanho da tela.

---

## Performance

A performance foi uma das partes mais importantes do desenvolvimento.

Durante a implementação, a aplicação chegou a apresentar uma pontuação de aproximadamente **75 no Lighthouse**, principalmente devido ao carregamento dos ícones através da fonte do Material Symbols.

### Problema identificado

Inicialmente, os ícones eram carregados através de uma fonte externa, adicionando recursos ao carregamento inicial da aplicação.

Além do impacto no carregamento, o recurso externo também poderia contribuir para bloqueios durante a renderização.

### Solução

EU adotei uma abordagem de otimização utilizando uma versão local e reduzida da fonte.

Foi utilizado `pyftsubset` para gerar um subset contendo apenas os ícones realmente utilizados pela aplicação.

A fonte original possuía aproximadamente **5,37 MB**, enquanto a versão reduzida ficou em aproximadamente **254 KB**.

O resultado foi uma redução significativa no recurso carregado pelo navegador.

A aplicação passou a utilizar a fonte local:

```text
public/fonts/material-symbols-rounded.woff2
```

E os ícones passaram a ser declarados através de `@font-face`.

Essa alteração eliminou a dependência da fonte externa para os ícones e melhorou significativamente a performance.

---

## Lighthouse

Resultado final validado em produção, utilizando a versão mobile:

| Categoria      | Resultado |
| -------------- | --------: |
| Performance    |    **99** |
| Accessibility  |   **100** |
| Best Practices |   **100** |
| SEO            |   **100** |

O objetivo não foi apenas alcançar uma pontuação alta, mas identificar problemas reais e melhorar a aplicação com base nos resultados das ferramentas de auditoria.

---

## Testes

Foram implementados testes automatizados utilizando **Vitest** e **Testing Library**.

Atualmente existem testes para:

* Header
* Footer
* ProfessionalModal

Os testes validam comportamentos importantes da aplicação, incluindo:

* Renderização dos elementos
* Navegação
* Abertura e fechamento do menu mobile
* Estados ARIA
* Abertura do modal
* Foco no modal
* Fechamento através de `Escape`

Para executar os testes:

```bash
npm run test
```

---

## Executando localmente

### Pré-requisitos

* Node.js
* npm
* Git

### Instalação

Clone o repositório:

```bash
git clone https://github.com/BigodeMarine/projeto-frontend-lacrei-saude.git
```

Entre no projeto:

```bash
cd projeto-frontend-lacrei-saude
```

Instale as dependências:

```bash
npm install
```

Execute o ambiente de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível localmente em:

```text
http://localhost:3000
```

---

## Build de produção

Para gerar a build:

```bash
npm run build
```

Para executar a aplicação em modo de produção:

```bash
npm run start
```

---

## Deploy

O projeto foi publicado utilizando **Vercel**, com integração ao repositório GitHub.

O fluxo utilizado é:

```text
GitHub
   ↓
Vercel
   ↓
Build Next.js
   ↓
Deploy
   ↓
Produção
```

Cada atualização do projeto pode ser versionada através do Git e posteriormente publicada através do pipeline de deploy da plataforma.

---

## Principais decisões técnicas

### Next.js

Escolhido pela estrutura baseada em React, para otimizações de produção e facilidade de deploy.

### TypeScript

Utilizado para aumentar a segurança durante o desenvolvimento e facilitar a manutenção através da tipagem dos dados e componentes.

### Styled Components

Utilizado para manter os estilos próximos aos componentes e permitir a criação de um sistema de design baseado em tokens.

### Service Layer

A camada de serviços separa a interface da fonte dos dados. Dessa forma, a implementação atual com JSON pode posteriormente ser substituída por uma API real com menor impacto na interface.

### Testes automatizados

Vitest e Testing Library foram utilizados para validar comportamentos importantes da aplicação, especialmente aqueles relacionados à interação e acessibilidade.

### Material Symbols otimizado

Em vez de manter uma fonte de ícones completa ou depender exclusivamente de um recurso externo, foi utilizada uma versão subset da fonte contendo somente os ícones necessários.

---

## Autor

**Edson Luiz Garcia Portela**

