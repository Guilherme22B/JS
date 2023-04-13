function verificar(){
    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        alert("[ERRO] verifique os dado e tente novamente")
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""

        var img = document.createElement('img')
        img.style.paddingTop = '10px'

        if (fsex[0].checked){
            genero = "Homem"
            if(idade >= 0 && idade < 12){
                //crainca
                img.setAttribute('src','imagens/foto-criança-m.jpg')
            }
            else if(idade > 12 && idade <= 18){
                //jovem
                img.setAttribute('src','imagens/foto-jovem-m.jpg')
            }
            else if(idade < 50){
                //adulto
                img.setAttribute('src','imagens/foto-adulto-m.jpg')
            }
            else{
                //velho
                img.setAttribute('src','imagens/foto-idoso-m.jpg')
            }

        }
        else if(fsex[1].checked){
            genero = "Mulher"
            if(idade >= 0 && idade <= 12){
                //criança
                img.setAttribute('src','imagens/foto-criança-f.jpg')
            }
            else if(idade > 12 && idade <= 18){
                //jovem
                img.setAttribute('src','imagens/foto-jovem-f.jpg')
            }
            else if(idade < 50){
                //adulto 
                img.setAttribute('src','imagens/foto-adulto-f.jpg')
            }
            else{
                //velho
                img.setAttribute('src','imagens/foto-idoso-f.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.style.textAling = 'center'
        res.appendChild(img)
    }
}