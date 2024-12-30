# EJS

Projeto EJS - Embedded JavaScript Templating
Este repositório demonstra a utilização do EJS (Embedded JavaScript) para renderizar páginas HTML dinâmicas no lado do servidor. O EJS permite a integração de JavaScript dentro de arquivos HTML, tornando-os mais dinâmicos e interativos. O objetivo deste projeto é apresentar os principais recursos do EJS: renderização de dados, layouts e partials, passagem de dados entre o servidor e o cliente e manipulação de condições.

## 1. Introdução ao EJS

O código a seguir é um exemplo simples de como passar dados para uma página EJS para renderizar uma mensagem dinâmica.
```
html
<body>
    <h1>Hey, it's <%= dayType %>, <%= advice %>!</h1>
    <h1>Horas: <%= horas %>  </h1>
</body>
```

 - **<%= %>**: O código dentro das tags <%= %> será avaliado e inserido na página.
 - No exemplo acima, as variáveis dayType, advice e horas são renderizadas no HTML, permitindo a exibição de informações dinâmicas.

---

## 2. Partials e Layouts
   
EJS permite o uso de partials e layouts para reutilizar trechos de código, como cabeçalhos e rodapés.

**Exemplo de uso de Partial**:

```
<%- include("partials/header.ejs") %>
   <h1>About Me</h1>
   <img class="profile" src="images/cat.jpeg" alt="cat profile">
  <p>
    Quam purus justo enim purus, dolor enim, ut eu lectus nam eget nibh. Ante illum nullam leo, vivamus aliquam massa
    massa inceptos fermentum porttitor, blandit vehicula, lorem in placerat ut aliquam at sociosqu.
  </p>

<%- include("partials/footer.ejs") %>
```
- **<%- include() %>**: A função include permite incluir um arquivo EJS (neste caso, header.ejs e footer.ejs) no código principal.
- O uso de <%- %> garante que o conteúdo HTML seja interpretado e renderizado corretamente.

---

## 3. Passagem de Dados

O EJS permite a passagem de dados de forma simples, tornando o conteúdo dinâmico baseado em variáveis do servidor.

**Exemplo de passagem de dados**:

```
<body>
    <% if(locals.numberOfLetters){ %>
    <h1>The are <%= numberOfLetters %> letters in your Name</h1>
    <% } else {%>
    <h1>Enter your name below</h1>
    <% }%>
    <form action="/submit" method="POST">
      <input type="text" name="fName" placeholder="First name" />
      <input type="text" name="lName" placeholder="Last name" />
      <input type="submit" value="OK" />
    </form>
</body>
```

- **<%= %>**: Exibe o valor da variável no HTML.
- **<% if %>**: Condicional para verificar se uma variável existe antes de renderizar seu valor.

---

## 4. Uso de Tags

EJS também permite trabalhar com tags de loop, condições e inserir conteúdo HTML diretamente.

**Exemplo de Tags:**
```
<body>
    <h1><%= title %></h1>
    <p>Current second: <%= seconds %></p>
    <% if (seconds % 2 === 0) { %>
    <ul>
        <% items.forEach((list) => { %>
        <li><%= list %></li>
        <% }); %>
    </ul>
    <% } else { %>
    <p>No items to display</p>
    <% } %>

    <p><%- htmlContent %></p>
    <%- include("footer.ejs") %>
</body>
```

- **<%= %>**: Exibe o valor da variável title e seconds.
- **<% if %>**: Condição para verificar se o valor de seconds é par e renderizar a lista de items.
- **<%- %>**: Insere conteúdo HTML sem escapar as tags, útil para injetar HTML diretamente.
