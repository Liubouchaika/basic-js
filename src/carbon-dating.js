const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let number = Number(sampleActivity);
  if(isNaN(number) || number>15 || number<1 || typeof sampleActivity !== 'string') {
  	return false;
  } else {
  	let year = Math.log(MODERN_ACTIVITY / number) / (0.693 / HALF_LIFE_PERIOD);
  	let roundedYear = Math.ceil(year);
  	return roundedYear
  }
}
