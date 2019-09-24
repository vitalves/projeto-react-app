# projeto-react-app

## Projeto feito em aula do modulo 04 "Primeiro projeto com ReactJS" do curso da Rockeseat

```js
yarn create react-app gitrepositories
```
**gitrepositories:** *Nome do projeto.*

**Deleta as conffigurações do *eslint* do  *packeage.json* pois será reconfigurado manualmente em arquivo separado**
```js
"eslintConfig": {
    "extends": "react-app"
  },
  ```

  ## Configurar o ambiente de desenvolvimento:

  **Gerar o arquivo *.editorconfig* na raiz**
  alterar para *TRUE*:
  ```js
  end_of_line = lf
  trim_trailing_whitespace = true
  insert_final_newline = true
  ```

  **Instalar o eslint como dependência de desenvolvimento**
  ```js
  yarn add eslint -D
  ```
  *CONFIGURAR O ESLINT*:
  ```js
  yarn eslint --init

  *to check syntax, find problems, and enforce code style
  *javascript modules (import/export)
  *React
  *Browser
  *Use popular style guide
  *Airbnb
  *Javascript
   ```

  *OBS: Remover o package-lock.json e dá um **yarn***







