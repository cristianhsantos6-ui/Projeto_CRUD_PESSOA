//CRIANDO A FUNÇÃO PARA CALCULAR DESCONTOS
const calcDesconto =(objPessoa) => {
    let resulCalc = ''
if((objPessoa.idade < 18) ||(objPessoa.renda <=1700)){
    resulCalc = 'insento de Desconto'
}else if(objPessoa.renda <= 5000){
    resulCalc = (objPessoa.renda) * 0.05
}else if(objPessoa.renda<=8000){
    resulCalc = objPessoa.renda * 0.10
}else if(objPessoa.renda<= 12000){
    resulCalc = objPessoa.renda * 0.15
}else{
    resulCalc = objPessoa.renda * 0.20
}

return resulCalc

}

export{calcDesconto}


