let chickens;

function setup() {
	new Canvas(600, 600);

	chickens = new Group();
    let chickenAni = loadAnimation(
        'assets/sm_chicken001.png',
        'assets/sm_chicken002.png',
        'assets/sm_chicken001.png',
        'assets/sm_chicken003.png'
	);
    chickenAni.frameDelay = 10;
	chickens.addAni(chickenAni);
}

function draw() {
	clear();

	if (mouse.presses()) {
		new chickens.Sprite(mouse.x, mouse.y);
	}
}