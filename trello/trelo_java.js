
function adicionando_meta() {
    while (true) {
        //--> Criando botões TAGS usadas em todas as tarefas

        var meta = document.getElementById("meta").value
        var input = document.createElement("input")
        input.value = meta
        var espaco1 = document.createElement("br")
        var espaco2 = document.createElement("br")

        //--> FIM
        
        // --> Criando TAGS usadas em Tarefas_andamento
        var remover_andamento = document.createElement("button")
        var concluido_andamento = document.createElement("button")
        concluido_andamento.id = "id_andamento"
        var imagem_negativo_andamento = document.createElement("img")
        var imagem_positivo_andamento = document.createElement("img")
        imagem_negativo_andamento.src = "imagem/positivo.jpg"
        imagem_positivo_andamento.src = "imagem/negativo.png"
        concluido_andamento.appendChild(imagem_negativo_andamento)
        remover_andamento.appendChild(imagem_positivo_andamento)
        adicionando_bloco(espaco2, input, remover_andamento,
                    concluido_andamento, espaco1, "tarefas_andamento")

        //--> Fim


        //-->  Criando TAGS usadas em Tarefas concluídas

        var remover_concluido = document.createElement("button")
        var andamento_concluido = document.createElement("button")
        var imagem_negativo_concluido = document.createElement("img")
        var imagem_positivo_concluido = document.createElement("img")
        imagem_negativo_concluido.src = "imagem/positivo.jpg"
        imagem_positivo_concluido.src = "imagem/negativo.png"
        andamento_concluido.id = "id_concluido"
        andamento_concluido.appendChild(imagem_negativo_concluido)
        remover_concluido.appendChild(imagem_positivo_concluido)

        //-- FIM


        //-->  Criando TAGS usadas em Tarefas Excluídas

        var remover_excluido = document.createElement("button")
        var andamento_excluido = document.createElement("button")
        var imagem_negativo_excluido = document.createElement("img")
        var imagem_positivo_excluido = document.createElement("img")
        imagem_negativo_excluido.src = "imagem/positivo.jpg"
        imagem_positivo_excluido.src = "imagem/negativo.png"
        andamento_excluido.id = "id_excluido"
        andamento_excluido.appendChild(imagem_negativo_excluido)
        remover_excluido .appendChild(imagem_positivo_excluido)

        //--> FIM


        //--> TAREFAS EM ANDAMENTO
        remover_andamento.onclick = function (){
            adicionando_bloco(input, remover_excluido, andamento_excluido,
                         espaco1, espaco2, "tarefas_excluidas")
            removendo_bloco(remover_andamento, concluido_andamento)
        }
        concluido_andamento.onclick = function() {
            adicionando_bloco(input, remover_concluido, andamento_concluido,
                espaco1, espaco2, "tarefas_conluidas")
            removendo_bloco(remover_andamento, concluido_andamento)
        }
        //--> FIM

        //--> TAREFAS CONCLUIDAS

        remover_concluido.onclick = function (){

            adicionando_bloco(input, remover_excluido, andamento_excluido,
                         espaco1, espaco2, "tarefas_excluidas")
            removendo_bloco(remover_concluido, andamento_concluido)
        }

        andamento_concluido.onclick = function() {

            adicionando_bloco(espaco1, input, remover_andamento,
                           concluido_andamento, espaco2, "tarefas_andamento")


            removendo_bloco(remover_concluido, andamento_concluido)
        }

        //--> FIM


        //--> TAREFAS EXCLUIDAS

        remover_excluido.onclick = function () {
            removendo_bloco(input, remover_excluido, andamento_excluido,
                         espaco1, espaco2)
        }

        andamento_excluido.onclick = function() {
            adicionando_bloco(espaco1, input, remover_andamento,
                           concluido_andamento, espaco2, "tarefas_andamento")
            removendo_bloco(remover_excluido, andamento_excluido)
        }

        //--> FIM

        document.getElementById("meta").value =''
        break
    }
}

function adicionando_bloco(espaco1, input, botao_remover,
                           botao_conluido, espaco2, id) {
    document.getElementById(id).appendChild(espaco1)
    document.getElementById(id).appendChild(input)
    document.getElementById(id).appendChild(botao_remover)
    document.getElementById(id).appendChild(botao_conluido)
    document.getElementById(id).appendChild(espaco2)

}

function removendo_bloco(input, botao_remover, botao_conluido,
                         espaco1, espaco2) {
    input.remove()
    botao_remover.remove()
    botao_conluido.remove()
    espaco1.remove()
    espaco2.remove()

}


