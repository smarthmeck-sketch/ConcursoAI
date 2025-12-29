# 🎓 ConcursoAI

> Plataforma SaaS completa para preparação de concursos públicos brasileiros com IA integrada, técnicas avançadas de estudo e planejamento personalizado.

[![Deploy status](https://img.shields.io/badge/Vercel-Live-success)](https://concurso-ai-two.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)](https://www.typescriptlang.org)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-green)](https://supabase.com)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT4-orange)](https://openai.com)

## 🚀 Acesso Rápido

**Aplicação ao vivo:** [https://concurso-ai-two.vercel.app](https://concurso-ai-two.vercel.app)

**Repositório:** [github.com/smarthmeck-sketch/ConcursoAI](https://github.com/smarthmeck-sketch/ConcursoAI)

**Dashboard Vercel:** [Manage Project](https://vercel.com/smarthmeck-sketchs-projects/concurso-ai)

**Supabase:** [Manage Database](https://supabase.com/dashboard/project/nziswtvgqhuplivhfrdx)

---

## ✨ Recursos Principais

### 🤖 Mentor IA Integrado
- Chat em tempo real com streaming de respostas
- Explicações em múltiplos níveis de dificuldade
- Técnica Feynman para simplificação de conceitos
- Geração de questões práticas personalizadas

### 📊 Técnicas de Estudo Científicas
- **Pareto (80/20):** Foco nos temas mais cobrados
- **Repetição Espaçada:** Algoritmo SM-2 adaptativo
- **Active Recall:** Recuperação ativa de memória
- **Feynman:** Explicações simplificadas
- **Interleaving:** Prática intercalada de temas
- **Pomodoro:** Gestão inteligente de tempo

### 📈 Dashboard Inteligente
- Visualização de progresso por matéria
- Streaks e conquistas gamificadas
- Análise de desempenho detalhada
- Revisões espaçadas programadas

### 📝 Quiz e Simulados
- Questões de múltipla escolha
- Sistema de pontuação e XP
- Análise de erros com feedback
- Simulados cronometrados por concurso

### 📅 Planejamento Inteligente
- Cronograma semanal automático
- Ajuste baseado em desempenho
- Análise Pareto por concurso
- Revisões personalizadas por nível de domínio

---

## 🛠️ Stack Tecnológico

| Camada | Tecnologia |
|--------|------------|
| **Frontend** | Next.js 14, React 18, TypeScript |
| **Estilização** | Tailwind CSS, Radix UI, Shadcn/ui |
| **Backend** | Next.js API Routes, Node.js |
| **Database** | PostgreSQL (Supabase) |
| **IA** | OpenAI GPT-4 Turbo |
| **Autenticação** | Supabase Auth (JWT) |
| **Deploy** | Vercel (Production-ready) |
| **Estado** | Zustand |
| **Animações** | Framer Motion |
| **Charts** | Recharts |

---

## 🚀 Como Usar

### Opção 1: Acessar a Aplicação Live (Recomendado)

```bash
# Abra seu navegador e acesse:
https://concurso-ai-two.vercel.app
```

### Opção 2: Executar Localmente

#### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Git

#### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/smarthmeck-sketch/ConcursoAI.git
cd ConcursoAI

# 2. Instale as dependências
npm install
# ou
yarn install

# 3. Configure as variáveis de ambiente
cp .env.example .env.local

# Edite o arquivo .env.local e adicione:
# NEXT_PUBLIC_SUPABASE_URL=https://nziswtvgqhuplivhfrdx.supabase.co
# NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_aqui
# OPENAI_API_KEY=sk-proj-sua_chave_aqui

# 4. Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev

# 5. Abra em seu navegador:
# http://localhost:3000
```

---

## 📁 Estrutura do Projeto

```
ConcursoAI/
├── app/
│   ├── layout.tsx          # Layout raiz com metadata
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais
├── public/                 # Assets públicos
│   └── favicon.ico
├── package.json            # Dependências e scripts
├── next.config.js          # Configuração Next.js
├── tsconfig.json           # Configuração TypeScript
├── tailwind.config.js      # Configuração Tailwind CSS
├── .env.example            # Exemplo de variáveis
├── .gitignore              # Git ignore
└── README.md               # Este arquivo
```

---

## 🔧 Variáveis de Ambiente

Crie um arquivo `.env.local` com as seguintes variáveis:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://nziswtvgqhuplivhfrdx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima_aqui
SUPABASE_SERVICE_ROLE_KEY=sua_chave_service_role_aqui

# OpenAI
OPENAI_API_KEY=sk-proj-sua_chave_aqui

# Aplicação
NEXT_PUBLIC_APP_URL=http://localhost:3000
JWT_SECRET=sua_chave_secreta_super_segura_aqui
```

---

## 🧪 Testes

```bash
# Executar testes
npm run test

# Build para produção
npm run build

# Lint do código
npm run lint
```

---

## 📊 Banco de Dados

O projeto utiliza PostgreSQL via Supabase com as seguintes tabelas:

### Tabela: `users`
- `id` (UUID, Primary Key)
- `email` (String, Unique)
- `created_at` (Timestamp)

### Tabela: `profiles`
- `id` (UUID, Primary Key)
- `user_id` (UUID, Foreign Key)
- `full_name` (String)
- `avatar_url` (String)
- `bio` (Text)

### Tabela: `quizzes`
- `id` (UUID, Primary Key)
- `user_id` (UUID, Foreign Key)
- `title` (String)
- `questions` (JSONB)
- `score` (Integer)
- `created_at` (Timestamp)

### Tabela: `study_sessions`
- `id` (UUID, Primary Key)
- `user_id` (UUID, Foreign Key)
- `duration` (Integer)
- `topic` (String)
- `date` (Timestamp)
- `notes` (Text)

---

## 🔐 Segurança

✅ Variáveis de ambiente protegidas
✅ Autenticação JWT segura
✅ Row Level Security (RLS) no banco
✅ CORS configurado
✅ Validação de entrada em todos os endpoints
✅ Rate limiting nas APIs
✅ Senhas hasheadas

---

## 🌍 Deploy

Este projeto está deployado na **Vercel** e sincroniza automaticamente com o repositório GitHub.

### URLs de Acesso:

| Ambiente | URL |
|----------|-----|
| **Produção** | https://concurso-ai-two.vercel.app |
| **GitHub** | https://github.com/smarthmeck-sketch/ConcursoAI |
| **Vercel Dashboard** | https://vercel.com/smarthmeck-sketchs-projects/concurso-ai |
| **Supabase** | https://supabase.com/dashboard/project/nziswtvgqhuplivhfrdx |

---

## 📚 Documentação Adicional

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [OpenAI API Docs](https://platform.openai.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

## 📝 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo LICENSE para mais detalhes.

---

## 👨‍💻 Desenvolvedor

**smarthmeck-sketch**
- GitHub: [@smarthmeck-sketch](https://github.com/smarthmeck-sketch)

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📞 Suporte

Para dúvidas ou sugestões, abra uma issue no GitHub ou entre em contato através do repositório.

---

## 🎯 Roadmap

- [ ] Autenticação com Google, GitHub e Outlook
- [ ] Chat com IA em tempo real (streaming)
- [ ] Sistema completo de Quiz com análise
- [ ] Planejamento de estudos com IA
- [ ] Dashboard com analytics
- [ ] Sistema de gamificação (XP, Levels, Achievements)
- [ ] Mobile app (React Native)
- [ ] Integração com pagamentos (Stripe)
- [ ] Comunidade e fóruns
- [ ] Exportar relatórios em PDF

---

## ⭐ Recursos Imprescindíveis

Se você acha este projeto útil, considere dar uma ⭐ no GitHub!

---

**Desenvolvido com ❤️ para concurseiros brasileiros**

Última atualização: 29 de dezembro de 2025
