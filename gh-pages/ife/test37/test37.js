function $(id){
	return document.getElementById(id);
}

function popWindow(){
	$('mask').style.display = "block";
	$('surface').style.display = "block";
	if($('mask').style.display = "block"){
		$('confirm').onclick = $('cancel').onclick = $('mask').onclick = close;
	}
}

window.onload = function(){
	$('bounced').onclick = popWindow;
}
function close(){
		$('mask').style.display = "none";
	    $('surface').style.display = "none";
}
