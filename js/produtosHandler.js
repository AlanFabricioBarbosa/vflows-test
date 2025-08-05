const produtosArray = [];
let initialized = false;

export function setupProdutos() {
   if (initialized) return produtosArray;
   initialized = true;

   const produtosCard = document.querySelector("[data-produtos]");
   const adicionarProdutoButton = document.querySelector("#addproduto");

   adicionarProdutoButton.addEventListener("click", adicionarProduto);

   if (!adicionarProdutoButton.dataset.listenerAttached) {
      adicionarProdutoButton.addEventListener("click", adicionarProduto);
      adicionarProdutoButton.dataset.listenerAttached = "true";
   }

         function atualizarNumeracaoProdutos() {
   const cards = produtosCard.querySelectorAll(".card-header");
   cards.forEach((cardHeader, index) => {
      cardHeader.textContent = `Produto - ${index + 1}`;
   });
   }

   function adicionarProduto(event) {
      event.preventDefault();
      const id = Date.now();
      const numeroProduto = produtosArray.length + 1;

      const produtoHTML = `
         <div class="row mb-3" id="produto${id}">
               <div class="d-flex col-1 justify-content-center align-items-center">
                  <i class="bi bi-trash h2" id="removerProduto${id}" style="color: #da0000; cursor: pointer;"></i>
               </div>
               <div class="col-11">
                  <div class="card">
                     <div class="card-header">Produto - ${numeroProduto}</div>
                     <div class="card-body">
                           <div class="row">
                              <div class="d-flex col-1 align-items-center">
                                 <i class="bi bi-box-seam display-2"></i>
                              </div>
                              <div class="col-11">
                                 <div class="row row-cols-2">
                                       <div class="mb-3 col-12">
                                          <label for="produtoInput${id}" class="form-label">Produto</label>
                                          <input type="text" class="form-control" id="produtoInput${id}" />
                                       </div>
                                       <div class="mb-3 col-3">
                                          <label class="form-label">UND. Medida</label>
                                          <select class="form-select" id="medida${id}" required>
                                             <option>cm</option>
                                             <option>metro</option>
                                             <option>kg</option>
                                             <option>grama</option>
                                             <option>litro</option>
                                             <option>unidade</option>
                                             <option>x-não definido</option>
                                          </select>
                                       </div>
                                       <div class="mb-3 col-3">
                                          <label for="qntdEstoque${id}" class="form-label">QDTDE. em Estoque</label>
                                          <input type="number" class="form-control" id="qntdEstoque${id}" min="0" required />
                                       </div>
                                       <div class="mb-3 col-3">
                                          <label for="valorUnitario${id}" class="form-label">Valor Unitário</label>
                                          <input type="number" class="form-control" id="valorUnitario${id}" min="0" required />
                                       </div>
                                       <div class="mb-3 col-3">
                                          <fieldset disabled>
                                             <label for="valorTotalInput${id}" class="form-label">Valor Total</label>
                                             <input type="number" class="form-control" id="valorTotalInput${id}" required min="0" />
                                          </fieldset>
                                       </div>
                                 </div>
                              </div>
                           </div>
                     </div>
                  </div>
               </div>
         </div>
      `;
      produtosCard.insertAdjacentHTML("beforeend", produtoHTML);

      const descricaoProduto = document.querySelector(`#produtoInput${id}`);
      const medida = document.querySelector(`#medida${id}`);
      const qntdEstoque = document.querySelector(`#qntdEstoque${id}`);
      const valorUnitario = document.querySelector(`#valorUnitario${id}`);
      const valorTotal = document.querySelector(`#valorTotalInput${id}`);
      const removerProduto = document.querySelector(`#removerProduto${id}`);
      const produtoDiv = document.querySelector(`#produto${id}`);

      const produtoObject = {
         id,
         descricaoProduto: "",
         unidadeMedida: "",
         qtdeEstoque: 0,
         valorUnitario: 0,
         valorTotal: 0,
      };

      produtosArray.push(produtoObject);
      atualizarNumeracaoProdutos();

      const atualizarValorTotal = () => {
         valorTotal.value = (Number(qntdEstoque.value) * Number(valorUnitario.value)).toFixed(2);
      };

      qntdEstoque.addEventListener("input", atualizarValorTotal);
      valorUnitario.addEventListener("input", atualizarValorTotal);

      removerProduto.addEventListener("click", () => {
         const index = produtosArray.findIndex(p => p.id === id);
         if (index !== -1) {
            produtosArray.splice(index, 1);
            produtoDiv.remove();
            atualizarNumeracaoProdutos();
         }
      });

      produtoDiv.addEventListener("input", () => {
         const produto = produtosArray.find(p => p.id === id);
         if (produto) {
            produto.descricaoProduto = descricaoProduto.value;
            produto.unidadeMedida = medida.value;
            produto.qtdeEstoque = qntdEstoque.value;
            produto.valorUnitario = valorUnitario.value;
            produto.valorTotal = valorTotal.value;
         }
      });
   }

   return produtosArray;
}
