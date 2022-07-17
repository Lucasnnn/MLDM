function sobrepor(div) {
    const menu = document.querySelectorAll("nav ul a li");

    const saibamais = document.querySelectorAll('.saiba');

    const brs = document.querySelectorAll('.ambientes-delete')

    const x = document.querySelectorAll('#ambientes img');

    const ambientesexpancao = document.querySelectorAll('.ambientes-expancao');

    const icones = document.querySelectorAll('#icones p');

    var largura = document.getElementById(div).style.width;

    if(largura == "50%"){
        document.getElementById(div).style.position = 'absolute';
        document.getElementById(div).style.width = '100vw';
        document.getElementById(div).style.top = '0';

          if((div).includes('residencial')){
            saiba(1 , 'flex');
           document.getElementById(div).style.right = '0';
           x[3].src ="../MLDM/imagens/x.png";
          }else{
            saiba(0,'flex'); 
            br(ambientesexpancao , 'flex');
             x[1].src = "../MLDM/imagens/x.png";
            document.querySelector('#corporativo p').style = 'color : hsl(27, 37%, 66%); font-weight : 600 ;font-size : 1.5vw;'
        }

        document.getElementById(div).style.height = '52.75vw';
           cores(icones , '#ffffff77')
           cores(menu , '#ffffff77')
        document.getElementById(div).style.transition = 'width 1.5s';
        document.getElementById(div).style.zIndex = '6';
        document.getElementById(div).style.backgroundSize = 'cover';
        window.document.getElementById('facebook').style.display = 'flex';
        window.document.getElementById('youtube').style.display = 'none';
          br(brs , 'none');
    }

    else if(largura != "50%"){
        document.getElementById(div).style.position = 'relative';
        document.getElementById(div).style.width = '50%';
        document.getElementById(div).style.height = 'auto';
        document.getElementById(div).style.zIndex = '0';
        document.getElementById(div).style.backgroundSize = 'auto';
        window.document.getElementById('facebook').style.display = 'none';
        window.document.getElementById('youtube').style.display = 'flex';
        cores(icones , 'hsl(342, 100%, 28%)')
        cores(menu , 'hsl(342, 100%, 28%)')
        saiba(0 , 'none')
        saiba(1 , 'none')
        x[3].src ="../MLDM/imagens/+.png"
        x[1].src ="../MLDM/imagens/+.png"
        br(brs, 'flex')
        br(ambientesexpancao , 'none');
        document.querySelector('#corporativo p').style = 'color : white;font-size: 1.5vw;letter-spacing: 7.2px;'
    }

    
function saiba(numero , modo){
    saibamais[numero].style.display = modo;
    saibamais[numero].style.width = '15vw';
}

}


function br (tamanho , modo){
    for (let i = 0; i < tamanho.length; i++) {
        tamanho[i].style.display = modo;
         }
}



function cores (tamanho , cor){
    for (let i = 0; i < tamanho.length; i++) {
        tamanho[i].style.color = cor;
         }
}
