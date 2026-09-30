# Petshop

Aplicação de e-commerce para uma pet shop, criada como projeto de portfólio para praticar desenvolvimento frontend com React e TypeScript. O catálogo apresenta produtos para pets, com páginas de detalhes e carrinho de compras.

## Funcionalidades

- Listagem de produtos carregados de uma API local
- Página de detalhes para cada produto
- Carrinho com inclusão, remoção e ajuste de quantidade
- Cálculo do subtotal e do total da compra
- Alternância entre tema claro e escuro
- Layout adaptável a diferentes tamanhos de tela

## Tecnologias

- React 19 e TypeScript
- Vite
- Tailwind CSS
- React Router
- Axios
- JSON Server para simular a API

## Executar localmente

Você precisa ter Node.js e npm instalados.

1. Acesse a pasta do projeto e instale as dependências:

	```bash
	cd petshop
	npm install
	```

2. Em um terminal, inicie a API local:

	```bash
	npx json-server --watch db.json --port 3000
	```

3. Em outro terminal, ainda dentro de `petshop`, inicie a aplicação:

	```bash
	npm run dev
	```

4. Abra no navegador o endereço informado pelo Vite, normalmente `http://localhost:5173`.

A API disponibiliza os produtos em `http://localhost:3000/products`.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Verifica os tipos e gera a versão de produção |
| `npm run preview` | Executa uma prévia da versão de produção |
| `npm run lint` | Analisa o código com Oxlint |

## Estrutura do projeto

```text
petshop/
├── db.json                 # Dados usados pela API local
└── src/
	 ├── components/         # Componentes de layout e interface
	 ├── contexts/            # Estados globais de carrinho e tema
	 ├── pages/               # Início, detalhes, carrinho e página não encontrada
	 └── services/             # Configuração de acesso à API
```

## Sobre

Este projeto faz parte do meu portfólio e está em desenvolvimento. O checkout e o processamento de pagamentos não fazem parte da aplicação atual; os dados são servidos localmente pelo JSON Server.
