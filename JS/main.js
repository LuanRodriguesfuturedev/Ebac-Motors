//script de funcionamento do carrosel

$(document).ready(function () {
    $('#carousel-images').slick({
        autoplay: true, // Habilita a mudança automática de slides
    });

    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000')//validação de telefone usando jQuery Mask Pluguin
    
    $('form').validate({ //Essas linhas de código indicam que os campos do formulário é obrigatório
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            veiculoInteresse: {
                required: false
            },
            mensagem: {
                required: true
            },
        },
        messages: { // Essas linhas de código editam as mensagens que devem aparecer p/ o usuário
            //informando que os demais campos são obrigatórios
            nome: 'Por favor, insira o seu nome',
            email: 'Este campo é obrigatório',
            telefone: 'Este campo é obrigatório',
            mensagem: 'Este campo é obrigatório'
        },

        submitHandler: function(form){
            // Esta função é executada quando o formulário é enviado com sucesso.
            // 'form' é o objeto do formulário que está sendo enviado.
            console.log(form)
            // Imprime o objeto do formulário no console.
        },
        invalidHandler: function(evento, validador){
            // Esta função é executada quando o formulário tem campos inválidos.
            // 'evento' é o evento que desencadeou a chamada e 'validador' é o objeto do validador.
            let camposIncorretos = validador.numberOfInvalids()
            // Calcula o número de campos inválidos no formulário.
            console.log(camposIncorretos)
            // Imprime o número de campos inválidos no console.
            if (camposIncorretos){
                // Se houver campos inválidos, exibe um alerta informando a quantidade de campos incorretos.
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        // Associa um evento de clique aos botões dentro de elementos com classe 'lista-veiculos'
        const destino = $('#contato')
        // Obtém o elemento com id 'contato' e o armazena na variável 'destino'.

        const nomeVeiculo = $(this).parent().find('h3').text()
        // Obtém o texto do elemento 'h3' que é um irmão do botão clicado e o armazena na variável 'nomeVeiculo'.

        $('#veiculo-interesse').val(nomeVeiculo)
        // Define o valor do campo de entrada com id 'veiculo-interesse' como o nome do veículo obtido anteriormente.

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000 )
        // Realiza uma animação de rolagem até o topo do elemento 'destino' com duração de 1000 milissegundos (1 segundo).
    })
    
    $('form').submit(function(event) {
        // Impede o comportamento padrão de envio do formulário, que é atualizar a página
        event.preventDefault();
    
        // Limpa os campos do formulário
        $(this).trigger('reset');
    });
})
