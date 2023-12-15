class eleccion{
    constructor(){
        this.si = document.getElementById('si')
        this.no = document.getElementById('no')
        this.imagen = document.getElementById('imagen')
    }
    inicio(){
        this.imagen.style.display = 'none'
    }
    Si(){
        this.imagen.style.display = 'block'
    }
}

let elecciones = new eleccion()

window.onload = elecciones.inicio()