# 🧾 TEST-VFLOWS

Projeto de formulário interativo para cadastro de **Fornecedor** com múltiplos **Produtos** e **Anexos**, totalmente feito em HTML, CSS, JS modularizado e jQuery. Ideal para uso em sistemas de gestão, compras ou cadastros internos.

---

## 🧰 Tecnologias Utilizadas

- HTML5
- CSS3 (com Bootstrap 5.3 e Bootstrap Icons)
- JavaScript (ES6 Modules)
- jQuery
- jQuery Validation
- jQuery InputMask
- API ViaCEP

---

## 📁 Estrutura de Pastas

```plaintext
TEST-VFLOWS/
│
├── index.html
├── Styles/
│   └── style.css
└── js/
    ├── main.js
    ├── masks.js
    ├── cepHandler.js
    ├── formValidation.js
    ├── produtosHandler.js
    ├── anexosHandler.js
    └── submitHandler.js
```


## 💡 Funcionalidades
🔹 Formulário de Fornecedor
- Campos obrigatórios validados com jQuery Validate.

- Máscaras aplicadas para CNPJ, telefone e CEP.

- Busca automática de endereço via API ViaCEP ao digitar o CEP.

🔹 Adição de Produtos
- Adiciona múltiplos produtos dinamicamente.

- Campos para nome, unidade, quantidade, valor unitário e cálculo automático do valor total.

- Cada produto pode ser removido individualmente.

- Produtos armazenados em array interno.

🔹 Adição de Anexos
Upload de múltiplos arquivos.

- Cada anexo listado com opções de visualização (👁️) e remoção (🗑️).

- Arquivos armazenados em memória e sessão (sessionStorage).

🔹 Botão de Envio
- Verifica os campos obrigatórios.

- Ao salvar, mostra um modal de confirmação.

- Permite download do JSON com todos os dados preenchidos.

- Interaja com o formulário: preencha os dados, adicione produtos, adicione anexos e salve.

- No modal de confirmação, clique em "Baixar arquivo JSON" para obter o arquivo completo.
