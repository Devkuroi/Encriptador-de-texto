let textoEncriptar = document.querySelector(".textarea")

function btnEncript(){
        const textoEncriptado = Encript(textoEncriptar.value)
        textoEncriptar.value = textoEncriptado
}

function btnDesencript(){
    const textoEncriptado = Desencript(textoEncriptar.value)
    textoEncriptar.value = textoEncriptado
}

function copy(){
    textoEncriptar.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(textoEncriptar.value)
    
}


function Encript(texto){
    let code = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    texto = texto.toLowerCase()

    for(i = 0; i < code.length; i++) {
        if(texto.includes(code[i][0])){
            texto = texto.replaceAll(code[i][0], code[i][1])
        }
    }
    return texto
}

function Desencript(texto){
    let code = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    texto = texto.toLowerCase()

    for(i = 0; i < code.length; i++) {
        if(texto.includes(code[i][0])){
            texto = texto.replaceAll(code[i][1], code[i][0])
        }
    }
    return texto
}
