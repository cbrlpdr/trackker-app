# Trackker App

Trackker é o aplicativo definitivo para corredores. Registre suas corridas, acompanhe seu progresso e alcance novos recordes.

## Tecnologias Utilizadas

- **Next.js**: Framework React para aplicações web modernas.
- **TypeScript**: Tipagem estática para maior segurança e produtividade.
- **Prisma**: ORM para banco de dados PostgreSQL.
- **Clerk**: Autenticação e gerenciamento de usuários.
- **Tailwind CSS**: Estilização rápida e eficiente.

## Estrutura do Projeto

- **`src/app`**: Contém as páginas e layouts principais.
  - **`layout.tsx`**: Layout base da aplicação.
  - **`dashboard/`**: Páginas e componentes relacionados ao painel do usuário.
  - **`user/`**: Páginas relacionadas ao perfil do usuário.
- **`src/components`**: Componentes reutilizáveis, como botões e formulários.
- **`src/lib`**: Funções utilitárias e tipos globais.
- **`src/server`**: Lógica de backend, como ações relacionadas a sessões de treino.
- **`prisma/schema.prisma`**: Definição do banco de dados.

## Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/cbrlpdr/trackker-app.git
   cd trackker-app
   
2. Instale as dependências:

3. Configure as variáveis de ambiente:
- Copie o arquivo .env.example para .env e preencha as variáveis necessárias.

4. Execute as migrações do banco de dados:
```bash
npx prisma migrate dev
```
5. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

6. Acesse a aplicação em http://localhost:3000.

## Deploy
Para fazer o deploy, recomendamos o uso da Vercel. Consulte a documentação oficial do Next.js para mais detalhes.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.