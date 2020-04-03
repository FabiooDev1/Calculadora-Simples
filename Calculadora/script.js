function calcular() {
    let valor1 = document.getElementById('txtv1')
    let valor2 = document.getElementById('txtv2')
    let res = document.getElementById('res')

    if (valor1.value.length == 0 || valor2.value.length == 0) { // Condição onde
        alert('[ERRO] Preencha todos os campos abaixo:')
    }else{
        let v1 = Number(valor1.value) // Converção do valor1(String) para um valor numerico 
        let v2 = Number(valor2.value) // Converção do valor1(String) para um valor numerico
        let cop = document.getElementsByName('radnum') // Variável para os checkBox
    
        // Condição que irá verificar cada checkBox e realizar as suas respectivas operações.
        if (cop[0].checked) { 
            let soma = (v1 + v2)
            res.innerHTML = `O resultado da soma entre ${v1} e ${v2} é igual a ${soma}`
        }else if (cop[1].checked) {
            let subtracao = (v1 - v2)
            res.innerHTML = `O resultado da subtração entre ${v1} e ${v2} é igual a ${subtracao}`
        }else if (cop[2].checked) {
            let multiplicacao = (v1 * v2)
            res.innerHTML = `O resultado da multipliçacão entre ${v1} e ${v2} é igual a ${multiplicacao}`
        }else if (cop[3].checked) {
            if (v1 == 0) {
                alert('[ERROR] Não existe divisão por zero. Porfavor coleque um valor maior!')
            }else{
                let divisao = (v1 / v2)
                res.innerHTML = `O resultado da divisão entre ${v1} e ${v2} é igual a ${divisao}`
            }
            
        }
    
    }


}