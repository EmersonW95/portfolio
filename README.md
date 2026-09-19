# Portfólio — Emerson Willian do Nascimento Dias

Site de currículo/portfólio em Next.js (App Router), com página extra do Jogo da Forca.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Build de produção

```bash
npm run build
npm start
```

## Publicando na Vercel

1. Suba este projeto para um repositório no GitHub.
2. Importe o repositório em https://vercel.com/new.
3. A Vercel detecta o Next.js automaticamente — não é preciso configurar nada.

## Estrutura

```
app/
  layout.js          # layout raiz, fontes (Space Grotesk + IBM Plex Mono)
  globals.css         # tokens de design e reset
  page.js              # página inicial: currículo/portfólio
  page.module.css
  forca/
    page.js            # rota /forca
    ForcaGame.js        # lógica do jogo (client component)
    forca.module.css
components/
  Nav.js               # barra de navegação
  Nav.module.css
lib/
  data.js              # todo o conteúdo: perfil, formação, projetos, banco de palavras
```

Todo o conteúdo (formação acadêmica, projetos, extracurricular, banco de palavras
do Jogo da Forca) está centralizado em `lib/data.js` — edite esse arquivo para
atualizar o site sem mexer nos componentes.
