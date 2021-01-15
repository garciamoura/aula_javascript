function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Thx por clicar</b>";
    //alert("Thx por clicar");
}

function redirecionar(){
    window.open("https://giphy.com/gifs/3oEdva9BUHPIs2SkGk");
    //window.location.href= "https://giphy.com/gifs/3oEdva9BUHPIs2SkGk"; Abre na mesma janela
}

function trocar(elemento){
   elemento.innerHTML = "PASSOU CERTIN"
    //document.getElementById("mousemove").innerHTML = "Passou certinho";
}

function voltar(elemento){
    elemento.innerHTML = "PASSE O MOUSE AQUI"
    //document.getElementById("mousemove").innerHTML = "PASSE O MOUSE AQUI";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}



/*var validar;
function validaIdade(idade){
    if(idade>=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Informe idade");
console.log(validaIdade(idade));
console.log(validar);
function soma (n1,n2){
    return n1+n2;
}
alert(soma(1,2));

//function setReplace(frase, nome, novo_nome){
//    return frase.replace(nome,novo_nome);
//}

//alert(setReplace("Vai Japão","Japão","Brasil"));
*/


/*var data=new Date();
alert(data.getFullYear());
alert(data);
*/
/*var count;
for(count=0; count<=5; count++){
    alert(count);
}*/

/*var count = 0;
while(count<5){
    console.log(count);
    count++;
}*/


/*var idade = prompt("Qual sua idade? ");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade")
}*/


/*var frutas = [{nome:"maçã", cor:"vermelha"},{nome:"uva", cor:"preta"} ]
console.log(frutas[0].nome);
alert(frutas[1].cor);
console.log(frutas);*/

/*var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);*/


/*var lista = ["maçã","pera","laranja"];
lista.push("uva");
//lista.pop();
console.log(lista);
console.log(lista[1]);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.toString()[0]);
console.log(lista.join("-"));*/


/*var nome = "Gabriela Garcia Moura";
var n1 =21;
var n2= 10;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem" + idade + " anos");
//alert(idade+idade2);
console.log(nome);
console.log(n1*n2);
console.log(frase.replace("Japão", "Brasil").toUpperCase());
//alert(frase.replace("Japão", "Brasil"));*/
