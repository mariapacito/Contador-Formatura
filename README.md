# 🎀 contador-formatura

Contagem regressiva fofinha para a formatura (**18/12/2026**), feita com Next.js 14, TypeScript, Tailwind CSS, Framer Motion e Lucide React.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Mudar a data-alvo

Copie `.env.example` para `.env.local` e edite `NEXT_PUBLIC_TARGET_DATE` (formato `AAAA-MM-DDTHH:MM:SS`, horário local de quem acessa). Ou altere o valor padrão em `lib/config.ts`.

## Deploy na Vercel

1. Suba o repositório para o GitHub.
2. Em vercel.com, clique em **Add New → Project** e importe `contador-formatura`.
3. Mantenha as configurações detectadas (Next.js) e clique em **Deploy**.
