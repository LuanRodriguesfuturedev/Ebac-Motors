//script de funcionamento do carrosel

$(document).ready(function () {
    $('#carousel-images').slick({
        autoplay: true, // Habilita a mudança automática de slides
    });

    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle();
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
