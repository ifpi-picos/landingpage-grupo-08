let click  = 0

document.getElementById("openNavBtn").addEventListener("click", ()=>{
	click ++	
	if(click<2){
		openNav()
	
	}
	else{
		click = click-2
		closeNav()
	}

});

function openNav() {
  var navModal = document.getElementById("navModal");
  navModal.style.display = "block";
}

function closeNav() {
  var navModal = document.getElementById("navModal");
  navModal.style.display = "none";
}


