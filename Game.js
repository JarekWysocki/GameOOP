class Game {
  constructor() {
	 this.stats = new Statistic(); 
    this.gameSummary = {
      numbers: 0,
      wins: 0,
      losses: 0,
      draws: 0
    };

    this.game = {
      playerHand: "",
      aiHand: ""
    };
	this.player = document.querySelector('[data-summary="your-choice"]');
	this.ai = document.querySelector('[data-summary="ai-choice"]');
	this.winner = document.querySelector('[data-summary="who-win"]');
	this.numOfGame = document.querySelector('p.numbers span');
	this.numOfWin = document.querySelector('p.wins span');
	this.numOfLoss = document.querySelector('p.losses span');
	this.numOfDraw = document.querySelector('p.draws span');
	
    this.hands = [...document.querySelectorAll(".select img")];
    this.hands.forEach(hand =>
      hand.addEventListener("click", this.handSelection)
    );
    document
      .querySelector(".start")
      .addEventListener("click", this.startGame.bind(this));

  }
  	   handSelection() {
    game.playerHand = this.dataset.option;
	this.style.boxShadow = '0 0 0 4px red';
  }
	  render(playerResult, aiResult, result, statistic = [0,0,0,0]) {
	  this.player.textContent = playerResult;
	  this.ai.textContent = aiResult;
	  
	   if (result === "win") {
	
		
		this.winner.textContent = "Ty wygrałeś!!!!"
		this.winner.style.color = "green";
		} else if (result === "loss") {
 
		this.winner.textContent = "Komputer wygrał :("
		this.winner.style.color = "red";
		} else {
  
		this.winner.textContent = "Remis :\\"
		this.winner.style.color = "gray";
		}
		this.numOfGame.textContent=statistic[0];
		this.numOfWin.textContent=statistic[1];
		this.numOfLoss.textContent=statistic[2];
		this.numOfDraw.textContent=statistic[3];
	  
  }


  startGame() {
    if (!game.playerHand) {
      return alert("wybierz dłoń!!!!");
    }
    this.draw = new Draw();
	this.draw.aiResult(this.hands);
	const result = Result.checkWinner(game.playerHand, this.draw.showResult());
	
	this.stats.addGameToStatistics(result);
	 
	this.render(game.playerHand, this.draw.showResult(), result, this.stats.showGameStatistics() );
	document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
	game.playerHand = "";
	
  }

}
