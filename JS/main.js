// Espera até que o documento esteja completamente carregado antes de executar o código
$(document).ready(function () {

    // Inicializa o carrossel de imagens com a biblioteca Slick
    $('#carousel-images').slick({
        autoplay: true // Define o carrossel para reprodução automática
    });

    // Adiciona um evento de clique ao botão de menu (hamburguer)
    $('.menu-hamburguer').click(function(){
        // Seleciona a navegação e altera o slide para cima ou para baixo para mostrar ou ocultar
        $('nav').slideToggle();
    });

    // Adiciona uma máscara de entrada para o campo de telefone
    $('#telefone').mask('(00) 00000-0000');

    // Adiciona a validação do formulário usando o plugin jQuery Validate
    $('form').validate({
        rules: { // Define regras de validação para os campos do formulário
            nome: {
                required: true // O campo nome é obrigatório
            },
            email: {
                required: true, // O campo email é obrigatório
                email: true // O campo email deve ser um endereço de email válido
            },
            telefone: {
                required: true // O campo telefone é obrigatório
            },
            mensagem: {
                required: true // O campo mensagem é obrigatório
            },
            veiculoDeInteresse: {
                required: false // O campo veiculoDeInteresse é opcional
            }
        },
        messages: { // Define mensagens de erro personalizadas para campos específicos
            nome: 'Por favor, insira o seu nome' // Mensagem de erro para o campo nome
        },
        submitHandler: function(form){ // Manipulador de submissão do formulário
            // Exibe um alerta indicando que o formulário foi enviado com sucesso
            alert("Formulário enviado com sucesso!");
            
            // Limpa o formulário após o envio bem-sucedido
            form.reset();
            
            // Evita que o formulário seja enviado normalmente
            return false;
        },
        invalidHandler: function(evento, validador){ // Manipulador de campos inválidos
            // Verifica se há campos inválidos e exibe um alerta com a quantidade de campos incorretos
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });
});
