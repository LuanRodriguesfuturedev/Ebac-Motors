$(document).ready(function () {
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
})