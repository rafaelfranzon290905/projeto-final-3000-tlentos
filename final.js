let cadastroAbrigos
let codigoNumber = 5
let listaAbrigos = [
    
    {código: 1, nome: "casa dos amigos", endereço: "rua do bobo, 0", telefone: 12313213, capacidade: 20, cidade: "Canoas"},
    {código: 2, nome: "Abrigo estrela", endereço: "algum lugar, 0", telefone: 12313213, capacidade: 15, cidade: "São Leopoldo"},
    {código: 3, nome: "Abrigo do bem", endereço: "ble, 0", telefone: 12313213, capacidade: 40, cidade: "Caxias"},
    {código: 4, nome: "casa dos anjos", endereço: "rua mucho loca, 0", telefone: 12313213, capacidade: 35, cidade: "Esteio"},
    {código: 5, nome: "Porão", endereço: "rua lá, 0", telefone: 12313213, capacidade: 5, cidade: "Canoas"}
]
let loop = 0


while (loop < 1){

    let escolha = Number(prompt(`===== SISTEMA DE CADASTRO DE ABRIGOS PARA NECESSITADOS =====
1. Cadastrar abrigo
2. Listar abrigos
3. Buscar abrigo por cidade
4. sair
Escolha uma opção: `));

    // console.log(`\n\n===== ABRIGOS TEMPORÁRIOS =====`)
    // console.log(`1. Cadastrar abrigo`)
    // console.log(`2. Listar abrigos`)
    // console.log(`3. Procurar abrigo`)
    // console.log(`4. Sair`)
    // console.log(`Escolha uma opção:`)

    // escolha = Number(prompt(`Escolha uma opção:`))

    switch (escolha) {
        case 1:
            function cadastrar () {
            alert("Cadastrar seu abrigo!")
            // nome, endereço, telefone e capacidade de lotação do abrigo
            let nome = prompt("Digite o nome do abrigo")
            let endereço = prompt("Digite o endereço do abrigo")
            let telefone = prompt("Digite o telefone do abrigo")
            let capacidade = prompt("Digite a capacidade de lotação")
            let cidade = prompt("Digite a cidade")
            cadastroAbrigos = {
                código: codigoNumber += 1,
                nome: nome,
                endereço: endereço,
                telefone: telefone,
                capacidade: capacidade,
                cidade: cidade
            }
            listaAbrigos.push(cadastroAbrigos)
            };
            cadastrar();
            console.log(listaAbrigos.código, listaAbrigos.nome, listaAbrigos.endereço, listaAbrigos.telefone, listaAbrigos. capacidade, listaAbrigos.cidade);
            
            let mensagem1 = ""
            for (let item = 0; item < listaAbrigos.length; item++){
                mensagem1 = `Código: ${listaAbrigos[item].código} | Nome: ${listaAbrigos[item].nome} | Endereço: ${listaAbrigos[item].endereço} | Telefone: ${listaAbrigos[item].telefone} | Capacidade: ${listaAbrigos[item].capacidade} | Cidade: ${listaAbrigos[item].cidade} \n\n`
            }


            alert(`Abrigo adicionado com sucesso!\n\n--------------------LISTAGEM DE ABRIGOS:--------------------\n\nCÓDIGO | NOME | ENDEREÇO | TELEFONE | CAPACIDADE | CIDADE\n\n Código: ${mensagem1}`)

            break;
    
        case 2:
            console.log("\n\n\n");
            console.log("\n--------------------LISTAGEM DE ABRIGOS:--------------------");
            let mensagem2 = ""
            for (item of listaAbrigos) {
                mensagem2 += `Código: ${item.código} | Nome: ${item.nome} | Endereço: ${item.endereço} | Telefone: ${item.telefone} | Capacidade: ${item.capacidade} | Cidade: ${item.cidade} \n\n`
            };
            alert(`--------------------LISTAGEM DE ABRIGOS:--------------------\n\nCÓDIGO | NOME | ENDEREÇO | TELEFONE | CAPACIDADE | CIDADE\n\n${mensagem2}`)
            break;
    
        case 3:
            
            let cidade1 = prompt("Qual a sua cidade?");

            function acharCidade (){
                let achados = []

                for (item of listaAbrigos) {
               
                    if (item.cidade.includes(cidade1)){
                        achados.push(item)
                    }
                };
               
                return achados
            }
           
            
            let jubileu = acharCidade()

            let mensagem = ""

            for (item of jubileu) {
                mensagem += `Código: ${item.código} | Nome: ${item.nome} | Cidade: ${item.cidade} | Endereço: ${item.endereço} | Telefone: ${item.telefone} | Capacidade: ${item.capacidade} \n\n`
                
            };
            alert(`--------------------
            LISTAGEM DE ABRIGOS:
            --------------------\n\n${mensagem}`)

            // console.log(jubileu)

            break;
    
        case 4:
            loop++
            alert(`Função encerrada!`)
            break;
    
        default:
            alert("Você não digitou certo")
            break;
    }

}



