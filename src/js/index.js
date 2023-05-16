const Botaoalterartema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imgBotaoTrocaDeTema = document.querySelector(".imagem-botao");

Botaoalterartema.addEventListener("click",()=>{

const ModoEscuroAtivo = body.classList.contains("modo-escuro");

body.classList.toggle("modo-escuro")
if(ModoEscuroAtivo){
    imgBotaoTrocaDeTema.setAttribute("src","./src/imagens/sun.png");
}else{
    imgBotaoTrocaDeTema.setAttribute("src","./src/imagens/moon.png");
}
});

