window.onload = function() {
	document.querySelector('#shop_ip').onclick = function() {
		ajaxGet('ip.php', function(data){
			console.log(data);
		});
		
		ajaxGet('ip.php?id=12&a=b&hz=nz', fucntion(data) {
			document.querySelector('#myip').innerHTML = data;
		});
	};

};

function ajaxGet(url, callback) {

	var f = callback || function(data){};

	var request = new XMLHttpRequest();

	request.onreadystatechange = function() { 
		if(request.readyState == 4) {
			f(request.responseText);
		};
	};

	request.open('GET', url);
	request.send();
}