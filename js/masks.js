const $ = window.jQuery;

export function setupMasks() {
   if (typeof $.fn.inputmask === 'undefined') {
      console.error('InputMask plugin não carregado!');
      return;
   }

   $("#inputCnpj").inputmask("99.999.999/9999-99");
   $("#inputTelefone").inputmask("(99) 99999-9999");
   $("#inputCep").inputmask("99.999-999");
}