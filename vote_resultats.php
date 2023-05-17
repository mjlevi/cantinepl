<!DOCTYPE html>
<html>
<head>
	<title>Résultat de vote</title>
	<script>
		function afficherPlatsSelectionnes() {
			var urlParams = new URLSearchParams(window.location.search);
			var plats = JSON.parse(decodeURIComponent(urlParams.get('plats')));
			var listePlats = document.getElementById('listePlats');
			for (var i = 0; i < plats.length; i++) {
				var li = document.createElement('li');
				li.textContent = plats[i];
				listePlats.appendChild(li);
			}
		}
	</script>
</head>
<body onload="afficherPlatsSelectionnes()">
	<h1>Résultat de vote</h1>
	<p>Voici les plats que vous avez sélectionnés :</p>
	<ul id="listePlats"></ul>
</body>
</html>
