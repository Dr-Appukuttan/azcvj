aboutmeclick=0;
langsclick=0;
projectclick=0;
osclick=0;
bmclick=0;
function aboutme() {
	aboutmeclick += 1;
	document.getElementById("aboutme").style.display="block";
	document.getElementById("lang").style.display="none";
	document.getElementById("projects").style.display="none";
	document.getElementById("os").style.display="none";
	document.getElementById("disclaimer").style.display="none";
}
function langs() {
	langsclick+=1;
	document.getElementById("aboutme").style.display="none";
	document.getElementById("lang").style.display="block";
	document.getElementById("projects").style.display="none";
	document.getElementById("os").style.display="none";
	document.getElementById("disclaimer").style.display="none";
}
function project() {
	projectclick+=1;
	document.getElementById("aboutme").style.display="none";
	document.getElementById("lang").style.display="none";
	document.getElementById("projects").style.display="block";
	document.getElementById("os").style.display="none";
	document.getElementById("disclaimer").style.display="none";
}
function os() {
	osclick+=1;
	document.getElementById("aboutme").style.display="none";
	document.getElementById("lang").style.display="none";
	document.getElementById("projects").style.display="none";
	document.getElementById("os").style.display="block";
	document.getElementById("disclaimer").style.display="none";
}
function bm() {
	bmclick+=1;
	document.getElementById("aboutme").style.display="none";
	document.getElementById("lang").style.display="none";
	document.getElementById("projects").style.display="none";
	document.getElementById("os").style.display="none";
	document.getElementById("disclaimer").style.display="block";
}
