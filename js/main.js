import { setupMasks } from './masks.js';
import { setupFormValidation } from './formValidation.js';
import { setupCepHandler } from './cepHandler.js';
import { setupProdutos } from './produtosHandler.js';
import { setupAnexos } from './anexosHandler.js';
import { setupSubmitButton } from './submitHandler.js';

$(document).ready(function() {
   if (typeof window.jQuery === 'undefined') {
      console.error('jQuery não foi carregado!');
      return;
   }

   setupMasks();
   setupFormValidation();
   setupCepHandler();
   setupProdutos();
   setupAnexos();
   setupSubmitButton();
});