class Draw {
	constructor (){
		this.result='';
	}
  aiResult(e) {
    this.result = e[Math.floor(Math.random() * 3)].dataset.option;
  
  }
		showResult() {
			 
			return this.result; 
		}
	 
  
}
