//entrada
let nome = "David";
let exp = 100010;
let rank = "indefinido"

//cálculo experiência
if (exp >=1 && exp <= 1000) {
    rank = "Ferro";
}
else if (exp >=1001 && exp <= 2000){
    rank = "Bronze";
}
else if (exp >=2001 && exp <= 5000){
    rank = "Prata";
}
else if (exp >=5001 && exp <= 7000){
    rank = "Ouro";
}
else if (exp >=7001 && exp <= 8000){
    rank = "Platina";
}
else if (exp >=8001 && exp <= 9000){
    rank = "Ascendente";
}
else if (exp >=9001 && exp <= 10000){
    rank = "Imortal";
}
else if (exp >= 10001){
    rank = "Radiante";
}
else{rank}



//saída
let msg = console.log(" O herói nome " + nome + " está no nível de: " + rank)