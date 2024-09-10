function Calcular(){

    var res= document.getElementById('resul1');
    var res1= document.getElementById('resul'); 

    var inic = Number(document.getElementById('ini').value);
    var fimm = Number(document.getElementById('fim').value);
    var pass = Number(document.getElementById('incre').value);


    var c = inic 
 
    if(inic.length ==0 || fimm.length==0 || pass.length==0){

        alert('Digite um número:')
    }

    if(inic<fimm){
    while( c<= fimm){

        res1.innerHTML+= `${c} \u{1F642}`
        c=c + pass 

        
    }
}else if(fimm<inic){

    while( c>= fimm){

        res1.innerHTML+= `${c} \u{1F642}`
        c=c - pass 

}

} 
}