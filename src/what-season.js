module.exports = function getSeason(date) {
  	let month; let monthTitle;
	if (date && !isNaN(date)) {
		month = date.getMonth(); 
		if(month == 11 || month < 2 && month > -1 ) {
			monthTitle = 'winter';
			return monthTitle;
		} else {
			if(month > 1 && month < 5) {
				monthTitle = 'spring';
				return monthTitle;
			} else {
				if(month > 4 && month < 8) {
					monthTitle = 'summer';
					return monthTitle;
				} else {
					if(month > 7 && month < 11) {
						monthTitle = 'fall';
						return monthTitle;
					} else {
						throw new getSeason('Unable to determine the time of year!');
					}
				}
			}
		} 
	} else { 
		if (date==undefined){
			return 'Unable to determine the time of year!';
		} else {
			throw new getSeason('Unable to determine the time of year!');
		}
	}
} 