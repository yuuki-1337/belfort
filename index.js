let cor = "verde";

switch (cor){
    case "verde":
        console.log("siga");
        break;

        case "vermelho":
        console.log("pare");
        break;

        case "amarelo":
        console.log("atenção");
        break;

        default:
            console.log("Erro");
            break;
}
let n = 5;

for(i = 0; i <= 10; i++){

    console.log(`${i} X ${n} = ${i*n}`);
}



function calc(x1,x2, operator){

    return eval(`${x1} ${operator} ${x2}`);
}
let resultado = calc(1,2,"+");
console.log(resultado);



let calc2 = (x1,x2, operator) => {

    return eval(`${x1} ${operator} ${x2}`);
}
let resultado2 = calc(1,2,"*");
console.log(resultado2);

window.addEventListener('focus', event => {

    console.log("focus");
});

document.addEventListener('click', event =>{

    console.log("click");
});



