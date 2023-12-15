class obtenerNumeros {
    constructor() {
        this.numero = document.getElementById('numeros')
    }
    aumento() {
        if (this.numero.value === '') {
            this.numero.value = 1
        } else {
            this.numero.value = parseInt(this.numero.value) + 1
        }
    }
}

let number = new obtenerNumeros()

window.onload = number.aumento()