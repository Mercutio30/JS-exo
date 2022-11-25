let img = document.getElementById("navIcon");
var message =`Informations sur votre navigateur :
Nom : ${navigator.appName}
Version : ${navigator.appVersion}
Langue : ${navigator.language}`
					img.addEventListener("mouseover", () => {
						alert(message)
					});
