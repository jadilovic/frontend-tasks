class Player {
	score = 0;

	jump() {
		console.log('player is jumping');
	}

	walking() {
		console.log('player is walking');
	}
}

const player1 = new Player();
console.log(player1.score);
player1.score;
player1.jump();
