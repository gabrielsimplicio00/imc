
function imc(){
    let peso = document.querySelector('.peso').value
    let altura = document.querySelector('.altura').value
    let res = document.getElementById('resultado')
    let res2 = document.getElementById('resultado2')

    document.getElementById('erropeso').innerHTML = ''
    document.getElementById('erroaltura').innerHTML = ''
    
    if (altura.length == 0 || peso.length == 0){
        alert('ERRO: Preencha todos os campos para prosseguir')
    } else{
        if (altura.includes(',') || altura.includes('.') || peso.includes(',') || peso.includes('.')){
            if(altura.includes(',') || peso.includes(',')){
                altura = altura.replace(',', '.')
                peso = peso.replace(',', '.')
            }
            
            let numPeso = Number(peso)
            let numAltura = Number(altura)
            const resultado = numPeso/ numAltura**2
            
            if (!numPeso || !numAltura){
                if (!numPeso){
                    document.getElementById('erropeso').innerHTML = 'Apenas números são aceitos'
                } else if (!numAltura){
                    document.getElementById('erroaltura').innerHTML = 'Apenas números são aceitos'
                }
                
            } else{
                if (resultado < 18.5){
                    situacao = 'Situação: Abaixo do peso'
                } 
                else if (resultado >= 18.5 && resultado < 24.9){
                    situacao = 'Situação: Peso normal'
                } 
                else if (resultado >= 25 && resultado < 29.9){
                    situacao = 'Situação: Sobrepeso'
                } 
                else if (resultado >= 30 && resultado < 34.9){
                    situacao = 'Situação: Obesidade grau 1'
                } 
                else if (resultado >= 35 && resultado < 39.9){
                    situacao = 'Situação: Obesidade grau 2'
                }
                else if (resultado > 40){
                    situacao = 'Situação: Obesidade grau 3'
            }
                res.innerHTML = `Seu IMC é ${resultado.toFixed(2)}`
                res2.innerHTML = situacao
                document.querySelector('.altura').value = ''
                document.querySelector('.peso').value = ''
            }
        } else if (peso.toLowerCase() != peso.toUpperCase() && altura.toLowerCase() != altura.toUpperCase()){
            document.getElementById('erropeso').innerHTML = 'Apenas números são aceitos'
            document.getElementById('erroaltura').innerHTML = 'Apenas números são aceitos'
            document.querySelector('.altura').value = ''
            document.querySelector('.peso').value = ''
            res.innerHTML = ''
            res2.innerHTML = ''
        }else if (peso.toLowerCase() != peso.toUpperCase()){
                document.getElementById('erropeso').innerHTML = 'Apenas números são aceitos'
                document.querySelector('.peso').value = ''
                res.innerHTML = ''
                res2.innerHTML = ''
        }else if (altura.toLowerCase() != altura.toUpperCase()){
                document.getElementById('erroaltura').innerHTML = 'Apenas números são aceitos'
                document.querySelector('.altura').value = ''
                res.innerHTML = ''
                res2.innerHTML = ''
        }else{
            document.getElementById('erroaltura').innerHTML = 'Sua altura deve ter pontuação'
            return
        } 
        document.querySelector('.altura').value = ''
        document.querySelector('.peso').value = '' 
    }
}


