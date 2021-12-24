const dino = document.querySelector(".dino");
const fundo = document.querySelector(".fundo");
let verifica = false;
let posicao = 0;
let fimJogo = false;

function teclaEspaco(event){
    if(event.keyCode === 32){
        if(!verifica){
            pulo();
        }
    }
}

function pulo(){
    verifica = true;
    let intervalo = setInterval(() => {
        if(posicao >= 150){
            clearInterval(intervalo);
            let descer = setInterval(() =>{
                if(posicao <= 0){
                    clearInterval(descer);
                    verifica = false;
                }else{
                    posicao -= 20;
                    dino.style.bottom = posicao + "px";
                }
            }, 20);
        }else{
            posicao += 20;
            dino.style.bottom = posicao + "px";
        }
    }, 20);
}

function criaCactos(){
    const cactos = document.createElement("div");
    let local = 1000;
    let aparecer = Math.random() * 6000;

    if(fimJogo) return;

    cactos.classList.add("cactos");
    fundo.appendChild(cactos);
    cactos.style.left = 1000 + "px";
    let moverCactos = setInterval(() => {
        if(local < -60){
            clearInterval(moverCactos);
            fundo.removeChild(cactos);
        }else if(local > 0 && local < 60 && posicao < 60){
            clearInterval(moverCactos);
            document.body.innerHTML = "<h1 class='fim-jogo'>Fim de jogo</h1>";
        }else{
            local -= 10;
            cactos.style.left = local + "px";
        }
    }, 20);
    setTimeout(criaCactos, aparecer);
}

criaCactos();
document.addEventListener("keyup", teclaEspaco);