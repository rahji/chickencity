let chickenAni;

function setup() {
	new Canvas(400, 400);

	chickenAni = loadAnimation(
		'assets/sm_chicken1.png',
		'assets/sm_chicken2.png',
		'assets/sm_chicken1.png',
		'assets/sm_chicken3.png'
	);

	chickenAni.frameDelay = 10;
}

function draw() {
    clear();
	animation(chickenAni, 250, 100);
}