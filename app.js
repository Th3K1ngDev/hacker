var botao = document.querySelector('#botao');
var textos = document.querySelector('.textos');
var img = document.querySelector('.img');

botao.addEventListener('click', ()=>{
    frases();
    img.innerHTML = `<img id='imgMask' src="./download.png" alt="">`;
});

function frases(){
    for(var i = 0; i < 10; i++){
        textos.innerHTML +=`
    <p>Não eRa pra ter clicado</p>
    <p>Não era pra ter CLICADO</p>
    `;
    }
}

