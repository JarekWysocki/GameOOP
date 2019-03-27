class Result {
	static checkWinner(player, ai) {
		
		 if (player === ai) {
  return 'draw';
 } else if ((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")) {
  return 'win';
 } else { return 'loss'; }
	}
}