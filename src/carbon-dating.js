const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let number = parseFloat(sampleActivity);
  if(isNaN(number) || number>MODERN_ACTIVITY || number<1 || typeof sampleActivity !== 'string') {
  	return false;
  } else {
  	let year = Math.log(MODERN_ACTIVITY / number) / (0.693 / HALF_LIFE_PERIOD);
  	let roundedYear = Math.ceil(year);
  	return roundedYear
  }
  //  if (typeof sample !== "string" || //isn't a string
  //     /[A-Za-z]/.test(sample) || //has letters
  //     sample < 1 || sample > MODERN_ACTIVITY) //is inadequate
  // return false;

  // let rate = Math.LN2.toFixed(3) / HALF_LIFE_PERIOD;
  // let years = Math.log(MODERN_ACTIVITY / parseFloat(sample)) / rate;
  // return Math.ceil(years);
}
