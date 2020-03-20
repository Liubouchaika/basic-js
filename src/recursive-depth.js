module.exports = class DepthCalculator {
	calculateDepth(arr) {
    	if (!Array.isArray(arr)) {
    		return 0;
    	}

		let nestedDepth = 0;
	    for (let i = 0; i < arr.length; i++) {
	      	if (Array.isArray(arr[i])) {
	      		let localDepth = this.calculateDepth(arr[i]);
	    		if (localDepth > nestedDepth) {
	    			nestedDepth = localDepth;
	    		} 
	      	}
	    };

		return 1 + nestedDepth;	
	}
}
	
