function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (Number(formAno.value) < 1900 || ano < Number(formAno.value)) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var idade = ano - Number(formAno.value)
        var formSex = document.getElementsByName('sexo')
        var img = document.createElement('img')
        img.setAttribute('src', 'foto')
        var genero = ''

        if (formSex[0].checked) {
            genero = 'homem'
            if (idade <= 1) {
                img.setAttribute('src', 'imagens/bebe.menino.png')
            } else if (idade < 5) {
                img.setAttribute('src', 'imagens/menininho.png')
            } else if (idade < 10) {
                img.setAttribute('src', 'imagens/menino.png')
            } else if (idade < 14) {
                img.setAttribute('src', 'imagens/menino.13.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'imagens/menino.adolescente.png')
            } else if (idade < 45) { 
                img.setAttribute('src', 'imagens/homem.jovem.png')
            } else if (idade < 65) {
                img.setAttribute('src', 'imagens/homem.png')
            } else if (idade < 70) {
                img.setAttribute('src', 'imagens/idoso.65.png')
            } else {
                img.setAttribute('src', 'imagens/idoso.png')
            }
        }  else {
            genero = 'mulher'
            if (idade <= 1) {
                img.setAttribute('src', 'imagens/bebe.menina.png')
            } else if (idade < 5) {
                img.setAttribute('src', 'imagens/menininha.png')
            } else if (idade < 10) {
                img.setAttribute('src', 'imagens/menina.png')
            } else if (idade < 14) {
                img.setAttribute('src', 'imagens/menina.13.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'imagens/menina.adolescente.png')
            } else if (idade < 45 ) {
                img.setAttribute('src', 'imagens/mulher.jovem.png')
            } else if (idade < 65) {
                img.setAttribute('src', 'imagens/mulher.png')
            } else if (idade < 70) {
                img.setAttribute('src', 'imagens/idosa.65.png')
            } else {
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        
        res.style.textAlign = 'center'

        if (genero == 'homem') {
            
            if (idade > 1) {
                res.innerHTML = `Indetificamos um ${genero} com ${idade} anos`
                res.appendChild(img)
            } else {
                genero = 'menino'
                res.innerHTML = `Indetificamos um ${genero} com ${idade} ano`
                res.appendChild(img)
            }
            
        } else {
            if (idade > 1) {
                res.innerHTML = `Identificamos uma ${genero} com ${idade} anos`
                res.appendChild(img) 
            } else {
                genero = 'menina'
                res.innerHTML = `Identificamos uma ${genero} com ${idade} ano`
                res.appendChild(img) 
            }
            
        }
        
        
    }
}