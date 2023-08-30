let splats;

function setup() {
	new Canvas(600, 600);

	splats = new Group();
	splats.addAni('assets/sm_chicken001.png', 3);
}

function draw() {
	clear();

	if (mouse.presses()) {
		new splats.Sprite(mouse.x, mouse.y);
	}
}