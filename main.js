//Criando Númwero qualquer

const screen1 =  document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const alertNumber = Math.round(Math.random() * 10) 
let xAsepts = 1

function handleClick(event){
    event.preventDefault() //Não faça o padrão, não envie o formúlario

    //Pegar um elemento
   const inputNumber = document.querySelector("#inputNumber");

   if(Number(inputNumber.value) == alertNumber){
    //Adiciona a tela screen1
    screen1.classList.add("hide");
    //remove a tela screen2
    screen2.classList.remove("hide");
    
    document
    .querySelector(".screen2 h2")
    .innerText = `Acertou em ${xAsepts} tentativas `
  
   }
   xAsepts++
   
   //tentou apaga campo
   inputNumber.value = ""
}

//evento
const btnTry = document.querySelector("#btnTry");
const btnAgain = document.querySelector("#btnAgain");


//Função callback
btnTry.addEventListener("click" ,handleClick );
btnAgain.addEventListener("click" , function(){
    
    screen1.classList.remove("hide");
    
    screen2.classList.add("hide");

    xAsepts = 1
})