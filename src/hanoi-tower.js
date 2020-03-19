module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
    let turns = 2 ** disksNumber - 1;
    let seconds = turns / (turnsSpeed / (60 * 60));

    let object = {
    	turns: turns,
    	seconds: seconds
    };
    return object;
}