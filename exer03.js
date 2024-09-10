function Calcular(){

    var res= document.getElementById('tabb');
    var n = Number(document.getElementById('nn').value);


    res.innerHTML= ''

    for(var c =0 ; c<=10; c++){

        var item= document.createElement('option') 

        item.text = ` ${c} x ${n} = ${c*n} ` 
        res.appendChild(item) 

        if(n==''){

            res.innerHTML="Digite um número"
            
        }
    }
}