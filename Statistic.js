class Statistic {
	constructor() {
  this.games = 0;
  this.wins = 0;
  this.loses = 0;
  this.draw = 0;

 }
  addGameToStatistics(result) {
  
  ++this.games;
  
  if (result === "win") {
	++this.wins;  
  }
  else if (result === "loss") {
	 ++this.loses; 
  }
  else {
	  ++this.draw;
  }

 }
  showGameStatistics() {
 return [this.games, this.wins , this.loses, this.draw];
  

 }
}