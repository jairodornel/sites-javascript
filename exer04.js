

    var res = document.getElementById('ini'); 
    var lista= document.getElementById('tabb');
    var res1= document.getElementById('res'); 
    var vet = [] 


    function isNumero(n){
    if(Number(n) >=1 && Number(n) <=100){

        return true
    } else {

        return false
    }

    }

    function inLista(n,lista){
       
        if(lista.indexOf(Number(n)) != -1){

            return true
        }else{
            return false 
        }
    }

    function Add(){

    if(isNumero(res.value) && !inLista(res.value,vet)){
        vet.push(Number(res.value)) 
        var item= document.createElement('option') 
        item.text = ` Valor ${res.value}  adicionado` 
        lista.appendChild(item)
        res1.innerHTML= '' 

    }else{

        alert("Valor invalido ou contem na lista")
    }

    res.value = ''
    res.focus() 

}

function Fim(){


    if(vet.length==0){
        alert("Adicione um valor")
    }else{
        var tot= vet.length
        var maior= vet[0]
        var menor= vet[0]
        var soma = 0
        var media = 0 
        for( var pos in vet ){

            soma+= vet[pos] 

            if(vet[pos]> maior){

                maior= vet[pos]
            }

            if(vet[pos] < menor){

                menor= vet[pos]
            }
        }

        media= soma/ tot 


        res1.innerHTML= ''
        res1.innerHTML+= `<p> Temos ${tot} numeros cadastrados</p> `
        res1.innerHTML+= `<p> Maior numero  ${maior} </p> `
        res1.innerHTML+= `<p> Menor numero ${menor} </p> `
        res1.innerHTML+= `<p>Somando todos os valores  temos ${soma} </p> `
        res1.innerHTML+= `<p> A media é ${media} </p> `




    }
}