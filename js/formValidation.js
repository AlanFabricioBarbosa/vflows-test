const $ = window.jQuery;

export function setupFormValidation() {
   $.validator.addMethod(
   "celular",
   function(value, element) {
      value = value.replace(/[()\s-]/g, "");
      if (value.length < 10 || value.length > 11) {
            return this.optional(element) || false;
      }
      return /^[6-9]/.test(value.substring(2, 3));
   },
   "Informe um número de telefone celular válido!"
   );
   $("#formValidation").validate({
   debug: true,
   rules: {
      rsocial: { 
            required: true, 
            minlength: 3 
      },
      cnpj: { 
            required: true, 
            minlength: 14 
      },
      nomeFantasia: { 
            required: true, 
            minlength: 3 
      },
      cep: { 
            required: true, 
            minlength: 9 
      },
      endereco: { 
            required: true 
      },
      numero: { 
            required: true, 
            digits: true 
      },
      bairro: { 
            required: true 
      },
      municipio: { 
            required: true 
      },
      estado: { 
            required: true, 
            minlength: 2 
      },
      contato: { 
            required: true 
      },
      telefone: { 
            required: true, 
            celular: true 
      },
      email: { 
            required: true, 
            email: true 
      }
   },
   messages: {
      rsocial: {
            required: "Por favor, insira a razão social.",
            minlength: "A razão social deve ter pelo menos 3 caracteres."
      },
      cnpj: {
            required: "Por favor, insira o CNPJ.",
            minlength: "O CNPJ deve conter 14 caracteres."
      },
      nomeFantasia: {
            required: "Por favor, insira o nome fantasia.",
            minlength: "O nome fantasia deve ter pelo menos 3 caracteres."
      },
      cep: {
            required: "Campo obrigatório",
            minlength: "Digite um CEP válido (XXXXX-XXX)"
      },
      endereco: { 
            required: "Por favor, insira o endereço." 
      },
      numero: {
            required: "Por favor, insira o número.",
            digits: "O número deve conter apenas dígitos."
      },
      bairro: { 
            required: "Por favor, insira o bairro." 
      },
      municipio: { 
            required: "Por favor, insira o município." 
      },
      estado: {
            required: "Por favor, insira o estado.",
            minlength: "O estado deve ter pelo menos 2 caracteres."
      },
      contato: { 
            required: "Por favor, insira o nome da pessoa de contato." 
      },
      telefone: { 
            required: "Por favor, insira o telefone." 
      },
      email: {
            required: "Por favor, insira o email.",
            email: "Por favor, insira um email válido."
      }
   },
   errorElement: "div",
   errorClass: "invalid-feedback",
   highlight: function(element) {
      $(element).addClass("is-invalid");
   },
   unhighlight: function(element) {
      $(element).removeClass("is-invalid");
   },
   errorPlacement: function(error, element) {
      if (element.attr("name") === "cep") {
            error.insertAfter(element.parent());
      } else {
            error.insertAfter(element);
      }
   }
   });
}