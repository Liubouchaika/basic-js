module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
    let turns = Math.pow(2, disksNumber)-1;
    let seconds = turns/turnsSpeed*60*60;
    let object = {};
  	object.turns = turns;
   	object.seconds = seconds;
    return object;
}