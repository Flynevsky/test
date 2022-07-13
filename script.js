x=0
function oui() {
	let resultat=document.querySelector("#resultat");
	resultat.innerHTML="Vous etes gay";
}
function non() {
	if (x==1) {
		let resultat=document.querySelector("#resultat");
		resultat.innerHTML="Vous etes gay";
	}
	if (x==0) {
		let oui=document.querySelector("#test");
		oui.innerHTML="OUI";
		x=1;
	}
}
function non_survol() {
	if (x==0) {
	let oui=document.querySelector("#test");
	oui.innerHTML="OUI";
	}
}
function non_out() {
	if (x==0) {
	let oui=document.querySelector("#test");
	oui.innerHTML="NON";
	}
}
function gay() {
	let oui=document.querySelector("#gay");
	oui.innerHTML="Vous etes gay";
}
function retry1() {
	let resultat=document.querySelector("#resultat");
	resultat.innerHTML="";
	x=0;
	let oui=document.querySelector("#gay");
	oui.innerHTML="Etes-vous gay?";
	let a=document.querySelector("#test");
	a.innerHTML="NON";
}