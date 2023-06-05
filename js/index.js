let textoEncriptar = document.querySelector(".textarea");

function Encript(texto) {
	let code = [
		["e", "enter"],
		["i", "imes"],
		["a", "ai"],
		["o", "ober"],
		["u", "ufat"],
	];
	texto = texto.toLowerCase();

	for (i = 0; i < code.length; i++) {
		if (texto.includes(code[i][0])) {
			texto = texto.replaceAll(code[i][0], code[i][1]);
		}
	}
	return texto;
}

function btnEncript() {
	const textoEncriptado = Encript(textoEncriptar.value);
	textoEncriptar.value = textoEncriptado;
}

function Desencript(texto) {
	let code = [
		["e", "enter"],
		["i", "imes"],
		["a", "ai"],
		["o", "ober"],
		["u", "ufat"],
	];
	texto = texto.toLowerCase();

	for (i = 0; i < code.length; i++) {
		if (texto.includes(code[i][0])) {
			texto = texto.replaceAll(code[i][1], code[i][0]);
		}
	}
	return texto;
}

function btnDesencript() {
	const textoEncriptado = Desencript(textoEncriptar.value);
	textoEncriptar.value = textoEncriptado;
}

// function copy to clipboard

function copy() {
	textoEncriptar.setSelectionRange(0, 9999);
	navigator.clipboard.writeText(textoEncriptar.value);
}

// function button hamburger

const open = document.querySelector("#open");
const nav = document.querySelector("#nav");
const close = document.querySelector(".close");

open.addEventListener("click", () => {
	nav.classList.toggle("visible");
});

open.addEventListener("click", () => {
	open.classList.toggle("active");
});

// function button dark mode

const dark_mode = document.querySelector(".switch")

dark_mode.addEventListener("click", () => {
    dark_mode.classList.toggle("active-dark")
    document.body.classList.toggle("dark")
})