count = 0;
var element=document.body;
function dark() {
	count += 1;
	if ( count % 2 == 0 ) {
		document.getElementById("link1").style.color="ff0000";
		document.getElementById("link2").style.color="ff0000";
		document.getElementById("link3").style.color="ff0000";
		document.getElementById("link4").style.color="ff0000";
		document.getElementById("link5").style.color="ff0000";
		document.getElementById("link6").style.color="ff0000";
		document.getElementById("link7").style.color="ff0000";
		document.getElementById("link8").style.color="ff0000";
		document.getElementById("link9").style.color="ff0000";
		document.getElementById("link10").style.color="ff0000";
		document.getElementById("link11").style.color="ff0000";
		document.getElementById("link12").style.color="ff0000";
		document.getElementById("link13").style.color="ff0000";
		document.getElementById("link14").style.color="ff0000";
		document.getElementById("link15").style.color="ff0000";
		document.getElementById("darkbtn").style.color="ff0000";
		document.getElementById("osico1").style.color="ff0000";
		document.getElementById("osico2").style.color="ff0000";
		document.getElementById("socialacc").className="glowblack";
		document.getElementById("sidenavi").className="sidenav1";
		document.body.style.color="ffffff";
		document.body.style.backgroundColor="000000";
	}
	else {
		document.getElementById("link1").style.color="0000FF";
		document.getElementById("link2").style.color="0000FF";
		document.getElementById("link3").style.color="0000FF";
		document.getElementById("link4").style.color="0000FF";
		document.getElementById("link5").style.color="0000FF";
		document.getElementById("link6").style.color="0000FF";
		document.getElementById("link7").style.color="0000FF";
		document.getElementById("link8").style.color="0000FF";
		document.getElementById("link9").style.color="0000FF";
		document.getElementById("link10").style.color="0000FF";
		document.getElementById("link11").style.color="0000FF";
		document.getElementById("link12").style.color="0000FF";
		document.getElementById("link13").style.color="0000FF";
		document.getElementById("link14").style.color="0000FF";
		document.getElementById("link15").style.color="0000FF";
		document.getElementById("darkbtn").style.color="0000FF";
		document.getElementById("osico1").style.color="0000FF";
		document.getElementById("osico2").style.color="0000FF";
		document.getElementById("socialacc").className="glowwhite";
		document.getElementById("sidenavi").className="sidenav2";
		document.body.style.color="000000";
		document.body.style.backgroundColor="ffffff";
	}
}
