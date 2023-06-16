function resultado() {
    let nasc = parseInt(document.getElementById('ano').value);
    let msg = document.getElementById('msg')
    let data = new Date()
    let anoA = data.getFullYear() 
    let idade = anoA - nasc
    if (nasc.value.length == 0 || nasc.value > ano) {
        window.alert('verifique os dados e tente novamente')
    }
}