const $ = window.jQuery;

import { setupProdutos } from './produtosHandler.js';
import { anexosArray } from './anexosHandler.js';

export function setupSubmitButton() {
   const produtosArray = setupProdutos();

   const downloadJSON = (data, filename) => {
      const blob = new Blob([JSON.stringify(data, null, 2)], {
         type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
   };
   const validateForm = () => {
      let isValid = true;
      const requiredFields = [
         "#inputRsocial",
         "#inputCnpj",
         "#inputCep",
         "#inputEndereco",
         "#inputNumero",
         "#inputBairro",
         "#inputMunicipio",
         "#inputEstado",
         "#inputContato",
         "#inputTelefone",
         "#inputEmail"
      ];

      $.each(requiredFields, (_, selector) => {
         const $input = $(selector);
         if ($.trim($input.val()) === "") {
            isValid = false;
            $input.addClass("is-invalid");
         } else {
            $input.removeClass("is-invalid");
         }
      });
      return isValid;
   };
   $("#submit-button").on("click", function(event) {
      event.preventDefault();
      if (validateForm()) {
         const formData = {
               fornecedor: {
                  rsocial: $("#inputRsocial").val(),
                  cnpj: $("#inputCnpj").val(),
                  nomeFantasia: $("#inputNomeFant").val(),
                  cep: $("#inputCep").val(),
                  endereco: $("#inputEndereco").val(),
                  numero: $("#inputNumero").val(),
                  complemento: $("#inputComplemento").val(),
                  bairro: $("#inputBairro").val(),
                  municipio: $("#inputMunicipio").val(),
                  estado: $("#inputEstado").val(),
                  contato: $("#inputContato").val(),
                  telefone: $("#inputTelefone").val(),
                  email: $("#inputEmail").val()
               },
               produtos: produtosArray,
               anexos: anexosArray
         };
         const modalElement = document.getElementById('exampleModal');
         const modal = new bootstrap.Modal(modalElement);
         modal.show();
         $(modalElement).one("shown.bs.modal", () => {
            $("#downloadJson").off("click").on("click", () => {
               downloadJSON(formData, "fornecedor.json");
         });
});

      } else {
         alert("Por favor, preencha todos os campos obrigatórios.");
      }
   });
}