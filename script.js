function toggleImages(category) {
	let images = document.querySelectorAll('.gallery img');
	images.forEach(img => {
		if (category === 'all' || img.alt.includes(category)) {
			img.classList.remove('hidden');
		} else {
			img.classList.add('hidden');
		}
	});
}

function showInfo(src, name, date, bioUrl) {
	let infoCard = document.getElementById('infoCard');
	let fullscreenOverlay = document.getElementById('fullscreenOverlay');
	
	document.getElementById('infoImage').src = src;
	document.getElementById('infoName').innerText = name;
	document.getElementById('infoDate').innerText = "Created on: " + date;
	infoCard.style.display = 'flex';
	infoCard.style.transform = 'translate(-50%, -50%) scale(0.01)';
	infoCard.style.opacity = '0';

	fetch(bioUrl)
		.then(response => response.text())
		.then(bio => 
		{
			document.getElementById('infoBio').innerText = bio.toString();
		})		
		.catch(error => 
		{
			document.getElementById('infoBio').innerText = "Bio not available.";
		});
			
	setTimeout(() => {
		infoCard.style.transform = 'translate(-50%, -50%) scale(1)';
		infoCard.style.opacity = '1';
	}, 10);
	
	fullscreenOverlay.style.display = 'block';
}

function closeInfo() {
	let infoCard = document.getElementById('infoCard');
	let fullscreenOverlay = document.getElementById('fullscreenOverlay');
	infoCard.style.opacity = '0';
	infoCard.style.transform = 'translate(-50%, -50%) scale(0.1)';
	setTimeout(() => {
		infoCard.style.display = 'none';
	}, 100);
	
	fullscreenOverlay.style.display = 'none';
}