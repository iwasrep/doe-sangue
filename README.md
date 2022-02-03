# Sistema de Cadastro de Doadores de Sangue

- Projeto desenvolvido para facilitar a informação criando dados virtual de doadores voluntários de sangue que, catalogados, estão à disposição para eventuais chamados de pacientes que venham necessitar de doação de sangue e hemoderivados.

## Como usar isto?

- Basta fazer o download do repositório no seu computador
- Acessar a pasta Backend
- Digitar o comando abaixo

```
npm install ou yarn install
```
## Instale o banco de dados PostgreSQL
- Após a instalação, crie o banco de dados com nome "doesangue";
- Crie uma tabela "doadores" com os campos nome, email, telefone, tipo manualmente ou use o script:
```
CREATE TABLE public.doadores (
  created_at timestamp without time zone NOT NULL,
  tipo character varying(6) NULL,
  telefone character varying(255) NULL,
  email character varying(255) NULL,
  nome character varying(255) NULL,
  id integer NOT NULL
);
ALTER TABLE
  public.doadores
ADD
  CONSTRAINT doadores_pkey PRIMARY KEY (id)
```

## Inicie o servidor
```
npm start ou yarn start
```

## Abra o endereço http://localhost:3000

# Enjoy!