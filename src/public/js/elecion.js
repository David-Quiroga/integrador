class eleccion {
    constructor(){
        this.si = document.getElementById('si')
        this.no = document.getElementById('no')
        this.seleccionArchivos = document.getElementById('seleccionArchivos')
    }
    inicio(){
        this.seleccionArchivos.style.display = 'none'
    }
    SI(){
        this.seleccionArchivos.style.display = 'block'
        this.si.setAttribute('', 'disabled')
        this.no.setAttribute('', '')
    }
    NO(){
        this.si.setAttribute('', '')
        this.no.setAttribute('', 'disabled')
    }
}

let elecciones = new eleccion()

window.onload = elecciones.inicio()

/*
class eleccion {
	constructor() {
		this.si = document.getElementById("si");
		this.no = document.getElementById("no");
		this.imagen = document.getElementById("imagenNueva");
		this.guardar = document.getElementById("guardar");
	}
	inicio() {
		this.imagen.style.display = "none";
		this.guardar.style.display = "none";
	}
	eleccionSiNo() {
		if (this.si.checked == true) {
			this.no.checked = false;
			this.imagen.style.display = "block";
			this.guardar.style.display = "block";
		}
		if (this.no.checked == true) {
			this.si.checked = false;
			this.imagen.style.display = "none";
			this.guardar.style.display = "none";
		}
	}
	aparicion() {
		this.guardar.style.display = "block";
	}
}

let elecciones = new eleccion();

window.onload = elecciones.inicio();*/