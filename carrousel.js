var
	carousel = document.querySelector('.carousel'),
	figure = carousel.querySelector('figure'),
	nav = carousel.querySelector('nav'),
	numImages = figure.childElementCount,
	theta =  2 * Math.PI / numImages,
	currImage = 0
	currPoss = 0
	nameVille = [
		'Victoria - Colombie Britanique',
		'Charlottetown - Île du Prince Edward',
		'Winnipeg - Manitoba',
		'Fredericton - New Brunswick',
		'Iqualuit - Ninavut',
		'Halifax - Nouvelle Ecosse',
		'Ottawa - Ontario',
		'Toronto - Ontario',
		'Québec - Québec',
		'Regina - Saskatchewan',
		'Saint John\'s - Terre Neuve',
		'Yellowknife - Territoire du Nord Ouest',
		'Whitehorse - Yukon',
		'Edmonton - Alberta']
;	
nav.addEventListener('click', onClick, true);
function onClick(e) {
	e.stopPropagation();
	
	var t = e.target;
	if (t.tagName.toUpperCase() != 'BUTTON')
		return;
	
	if (t.classList.contains('next')) {
		currImage++;
		currPoss++;
		if (currPoss == 14) {
			currPoss = 0;
		}
	}
	else {
		currImage--;
		currPoss--;
		if (currPoss == -1) {
			currPoss = 13;
		}
	}
	var position = document.getElementById("nomville");
	var pville = nameVille[currPoss]
	position.textContent = pville;

	figure.style.transform = `rotateY(${currImage * -theta}rad)`;
}
