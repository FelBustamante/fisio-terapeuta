# Fisio Terapeuta

Site em React + TanStack Start.

## Desenvolvimento local

```bash
npm ci
npm run dev
```

## Build de producao

```bash
npm run build
```

## Deploy no Vercel

Este projeto esta configurado para deploy estatico no Vercel com pre-render das rotas.

Configuracao usada em `vercel.json`:

- `installCommand`: `npm ci`
- `buildCommand`: `npm run build`
- `outputDirectory`: `dist/client`

Fluxo recomendado:

1. Faça push para a branch `main`.
2. O Vercel dispara o deploy automatico.
3. Acompanhe o status em **Deployments** no painel do Vercel.

## Observacoes

- O deploy do GitHub Pages foi removido para evitar publicacao duplicada.
- As paginas publicas sao pre-renderizadas no build (`/`, `/sobre`, `/servicos`, `/depoimentos`, `/contato`).
