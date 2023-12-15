class implemeto {
    constructor() {
        this.nombre = document.getElementById('nombre')
        this.implementos = document.getElementById('implementos')
        this.implementos2 = document.getElementById('implementos2')
        this.implementos3 = document.getElementById('implementos3')
        this.implementos4 = document.getElementById('implementos4')
        this.implementos5 = document.getElementById('implementos5')
    }
    inicio() {
        this.implementos.style.display = 'none'
        this.implementos2.style.display = 'none'
        this.implementos3.style.display = 'none'
        this.implementos4.style.display = 'none'
        this.implementos5.style.display = 'none'
    }
    metodo() {
        if (this.nombre.value == 'CODIGOS DE ESPECIFICACIÓN') {
            this.implementos.style.display = 'block'
            this.implementos2.style.display = 'none'
            this.implementos3.style.display = 'none'
            this.implementos4.style.display = 'none'
            this.implementos5.style.display = 'none'
        }
        if (this.nombre.value == 'NIVELES') {
            this.implementos.style.display = 'none'
            this.implementos2.style.display = 'block'
            this.implementos3.style.display = 'none'
            this.implementos4.style.display = 'none'
            this.implementos5.style.display = 'none'
        }
        if (this.nombre.value == 'ELEMENTOS DE SEGURIDAD  Y SERVICIOS') {
            this.implementos.style.display = 'none'
            this.implementos3.style.display = 'block'
            this.implementos2.style.display = 'none'
            this.implementos4.style.display = 'none'
            this.implementos5.style.display = 'none'
        }
        if (this.nombre.value == 'HERRAMIENTAS') {
            this.implementos.style.display = 'none'
            this.implementos4.style.display = 'block'
            this.implementos2.style.display = 'none'
            this.implementos3.style.display = 'none'
            this.implementos5.style.display = 'none'
        }
        if (this.nombre.value == 'LUCES') {
            this.implementos.style.display = 'none'
            this.implementos5.style.display = 'block'
            this.implementos2.style.display = 'none'
            this.implementos4.style.display = 'none'
            this.implementos3.style.display = 'none'
        }
    }
}

let implement = new implemeto()
window.onload = implement.inicio()