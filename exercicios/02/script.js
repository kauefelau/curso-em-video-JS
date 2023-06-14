function resultado() {
    var anoN = document.getElementById('ano')
    anoN = Number(anoN)
    var msg = document.getElementById('msg')
    var idade = 2023 - anoN
    msg.innerHTML = idade
}