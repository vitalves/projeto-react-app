# projeto-react-app

## Projeto feito em aula do modulo 04 "Primeiro projeto com ReactJS" do curso da Rockeseat

```js
yarn create react-app gitrepositories
```

**gitrepositories:** _Nome do projeto._

**Deleta as conffigurações do _eslint_ do _packeage.json_ pois será reconfigurado manualmente em arquivo separado**

```js
"eslintConfig": {
    "extends": "react-app"
  },
```

## Configurar o ambiente de desenvolvimento:

- Pugins do VsCode: EsLint e Prettier

**Gerar o arquivo _.editorconfig_ na raiz**
- Acrescentar: _end_of_line = lf_
- Alterar: _trim_trailing_whitespace_ e _insert_final_newline_ para _TRUE_:

```js
end_of_line = lf;
trim_trailing_whitespace = true;
insert_final_newline = true;
```

**Instalar o *eslint* como dependência de desenvolvimento:**

```js
yarn add eslint -D
```

_CONFIGURAR O ESLINT_:

```js
yarn eslint --init

// OPCOES A SEREM DEFINIDAS:
*to check syntax, find problems, and enforce code style
*javascript modules (import/export)
*React
*jsx
*Browser
*Use popular style guide
*Airbnb
*Javascript
```

*OBS: Remover o package-lock.json e dá um **yarn\***

_CONFIGURAR O PRETTIER_:

```js
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
```

- ajustar configs no arquivo *.eslintrc.js*:

```js
"extends": [
    "airbnb",
    "prettier",
    "prettier/react"
],
// +
"parser": "babel-eslint",
"plugins": [ "react", "prettier" ],
// +
rules: {
  "prettier/prettier": "error",
  "react/jsx-filename-extension": [
    "warn",
    { extensions: [ '.jsx', '.js'] }
  ],
  'import/prefer-default-export': 'off'
},
```

- Criar o arquivo *.prettierrc* e configurar:

```js
{
  "singleQuote": true,
  "trailingComma": "es5"
}
```

## Roteamento no React:

```js
yarn add react-router-dom
```
## Styled Compoments

```js
yarn add styled-components
```
