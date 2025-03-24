# Portfolio Pessoal

Este é meu portfolio pessoal desenvolvido com Angular, apresentando meus projetos, habilidades e informações de contato.

## 🚀 Tecnologias Utilizadas

- Angular 19
- TypeScript
- SCSS
- Font Awesome
- EmailJS (para o formulário de contato)

## 🛠️ Como Executar o Projeto

1. Clone o repositório:

```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
ng serve
```

4. Acesse o projeto em `http://localhost:4200`

## 📝 Guia de Manutenção

### Adicionar ou Modificar Habilidades

As habilidades são gerenciadas no arquivo `src/app/components/skills/skills.component.ts`. Para adicionar ou modificar habilidades:

1. Localize o array `skillCategories`
2. Cada categoria tem a seguinte estrutura:

```typescript
{
  name: 'Nome da Categoria',
  icon: 'classe-do-icone',
  skills: [
    {
      name: 'Nome da Habilidade',
      icon: 'classe-do-icone',
      level: 85, // Nível de 0 a 100
      description: 'Descrição da habilidade'
    }
  ]
}
```

3. Para adicionar uma nova categoria, adicione um novo objeto ao array `skillCategories`
4. Para adicionar uma nova habilidade, adicione um novo objeto ao array `skills` da categoria desejada

### Adicionar Novos Projetos

Os projetos são gerenciados no arquivo `src/app/components/projects/projects.component.ts`. Para adicionar um novo projeto:

1. Localize o array `projects`
2. Adicione um novo objeto seguindo a estrutura:

```typescript
{
  title: 'Título do Projeto',
  description: 'Descrição detalhada do projeto',
  image: 'caminho/para/imagem.png',
  technologies: ['Tecnologia 1', 'Tecnologia 2'],
  github: 'URL_DO_GITHUB', // opcional
  demo: 'URL_DO_DEMO' // opcional
}
```

3. Adicione a imagem do projeto na pasta `src/assets/projects/`

### Modificar Informações Pessoais

As informações pessoais podem ser modificadas nos seguintes arquivos:

1. Nome e título: `src/app/components/hero/hero.component.ts`
2. Links sociais: `src/app/components/contact/contact.component.html`
3. CV: Atualize o link no arquivo `src/app/components/hero/hero.component.html`

## 🏗️ Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── hero/         # Seção inicial
│   │   ├── projects/     # Seção de projetos
│   │   ├── skills/       # Seção de habilidades
│   │   ├── contact/      # Seção de contato
│   │   ├── navbar/       # Barra de navegação
│   │   └── footer/       # Rodapé
│   └── services/         # Serviços da aplicação
├── assets/
│   ├── images/          # Imagens gerais
│   ├── projects/        # Imagens dos projetos
│   ├── videos/          # Vídeos
│   └── icons/           # Ícones
└── styles/              # Estilos globais
```

## 📦 Build para Produção

Para gerar uma versão de produção do site:

```bash
ng build --configuration production
```

Os arquivos compilados serão gerados na pasta `dist/portfolio/`.

## 🤝 Contribuindo

Sinta-se à vontade para contribuir com o projeto através de pull requests ou reportando issues.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
