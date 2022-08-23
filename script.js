var yaescrito = false;

function convertir (texto) {

	var textoproc=[];

		for (var i=0;i<=(texto.length-1);i++) {

			if (texto[i]=="a") {
				textoproc[i] = "ai";
				yaescrito=true;
			}

			if (texto[i]=="e") {
				textoproc[i] = "enter";
				yaescrito=true;
			}

			if (texto[i]=="i") {
				textoproc[i] = "imes";			
				yaescrito=true;
			}

			if (texto[i]=="o") {
				textoproc[i] = "ober";				
				yaescrito=true;
			}

			if (texto[i]=="u") {
				textoproc[i] = "ufat";		
				yaescrito=true;
			}

			if (yaescrito==false) {
				textoproc[i]=texto[i];
			}

			yaescrito=false;
		}

	return textoproc;
}

function captura() {
	var	textcap = document.getElementById('textoin').value;
	var encriptado = convertir(textcap);

	textout.value = encriptado.join("");
	textout.style.transition = "opacity 800ms"
	textout.style.opacity = 1;

	sintexto.style.transition = "opacity 800ms"
	sintexto.style.opacity = 0;

	muñeco.style.transition = "opacity 800ms";
	muñeco.style.opacity = 0;

	botoncopy.style.transition = "opacity 800ms";
	botoncopy.style.opacity = 1;

	cajader.style.borderStyle = "none";

	console.log(encriptado.join(""));
}

	function desencriptar (texto) {

		var textoproc=[];
		
		for (var i=0;i<=(texto.length-1);i++) {

			var yaescrito = false;

			console.log(i);

			if (texto[i]=="a" & texto[i+1] == "i") {

				textoproc[i] = "a"
				var yaescrito = true;
				i=i+1;
				
			}

			if (texto[i] =="e" & texto[i+1]=="n" & texto[i+2] =="t" & texto[i+3] =="e" & texto[i+4] =="r" ) {

				textoproc[i] = "e"
				var yaescrito = true;
				i=i+4;
			}

			if (texto[i] =="i" & texto[i+1]=="m" & texto[i+2] =="e" & texto[i+3] =="s" ) {

				textoproc[i] = "i"
				var yaescrito = true;
				i=i+3;

			}

			if (texto[i] =="o" & texto[i+1]=="b" & texto[i+2] =="e" & texto[i+3] =="r" ) {

				textoproc[i] = "o"
				var yaescrito = true;
				i=i+3;

			}

			if (texto[i] =="u" & texto[i+1]=="f" & texto[i+2] =="a" & texto[i+3] =="t" ) {

				textoproc[i] = "u"
				var yaescrito = true;
				i=i+3;

			}

			if (yaescrito==false) {

				textoproc[i]=texto[i];

			}
			
		}
		return textoproc;
	}

function BotonDesencriptar() {
	var textcap = document.getElementById("textoin").value;
	var desencriptado = desencriptar(textcap);

	textout.value = desencriptado.join("");
	textout.style.transition = "opacity 800ms"
	textout.style.opacity = 1;

	sintexto.style.transition = "opacity 800ms"
	sintexto.style.opacity = 0;

	muñeco.style.transition = "opacity 800ms";
	muñeco.style.opacity = 0;

	botoncopy.style.transition = "opacity 800ms";
	botoncopy.style.opacity = 1;

	cajader.style.borderStyle = "borderStyle 800ms";
	cajader.style.borderStyle = "none";

	console.log(desencriptado.join(""));
}

function limpiarcajas () {
	textout.value = "";

	textout.style.transition = "opacity 800ms"
	textout.style.opacity = 0;

	sintexto.style.transition = "opacity 800ms"
	sintexto.style.opacity = 1;

	muñeco.style.transition = "opacity 800ms";
	muñeco.style.opacity = 1;

	botoncopy.style.transition = "opacity 800ms";
	botoncopy.style.opacity = 0;

	cajader.style.borderStyle = "borderStyle 800ms";
	cajader.style.borderStyle = "solid";
}

function BotonCopiar() {
	var mensaje = document.getElementById("textout");
	mensaje.select();
	document.execCommand("cut");	
	alert("Tu mensaje ha sido copiado al portapapeles.");

	textout.style.transition = "opacity 800ms"
	textout.style.opacity = 0;

	sintexto.style.transition = "opacity 800ms"
	sintexto.style.opacity = 1;

	muñeco.style.transition = "opacity 800ms";
	muñeco.style.opacity = 1;

	botoncopy.style.transition = "opacity 800ms";
	botoncopy.style.opacity = 0;

	cajader.style.borderStyle = "borderStyle 800ms";
	cajader.style.borderStyle = "solid";

}
