
//Task 2 first various
var coffee={
	message: 'Your coffee is ready',
	start: function(){
	setTimeout(function() { alert(this.message) }.bind(this), 1000);
	}	
};
coffee.start();

//Task 2 second various
var coffee = {
  message: "Your coffee is ready",
  start: function() {
    alert( this.message );
  }
};

setTimeout(function() {
  coffee.start();
}, 3000);
