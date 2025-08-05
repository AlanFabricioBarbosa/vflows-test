const $ = window.$;

export function setupCepHandler() {
   $("#inputCep").blur(function() {
      const cep = $(this).val().replace(/\D/g, "");
      
      if (cep && /^[0-9]{8}$/.test(cep)) {
         $.getJSON(`https://viacep.com.br/ws/${cep}/json/`)
               .done(data => {
                  if (!("erro" in data)) {
                     $("#inputEndereco").val(data.logradouro);
                     $("#inputBairro").val(data.bairro);
                     $("#inputMunicipio").val(data.localidade);
                     $("#inputEstado").val(data.uf);
                  } else {
                     alert("CEP não encontrado.");
                  }
               })
               .fail(() => alert("Erro ao buscar o CEP."));
      }
   });
}