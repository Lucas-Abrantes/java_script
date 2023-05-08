function tocaSom(idsom){
    document.querySelector(idsom).play() 
}


const listaSom = document.querySelectorAll('.tecla');




for (let contador = 0;contador < listaSom.length; contador++){

    const tecla = listaSom[contador];
    const instrumento = tecla.classList[1];
    const idaudio = `#som_${instrumento}`;


    tecla.onclick = function(){
        tocaSom(idaudio);
    }

    tecla.onkeydown = function(){
        tecla.classList.add('.ativa');
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('.ativa');
    }
}
