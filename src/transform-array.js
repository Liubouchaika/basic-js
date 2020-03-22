module.exports = function transform(arr) {
   let discardNext = '--discard-next';
   let discardPrev = '--discard-prev';
   let doubleNext = '--double-next';
   let doublePrev = '--double-prev';
   let newArray =[];
 
	if(!Array.isArray(arr)) {
   		throw new Error("It's not array!");
	};

   	for (let i=0; i<arr.length; i++) {
   	 	if(arr[i] == discardNext) {
   	 		if (i+1 !== arr.length) {
   	 			i++;
   	 		}
   	 	} else if(arr[i] == discardPrev) {
   	 		if(i !== 0) {
   	 			newArray.pop();
   	 		}
   	 	} else if(arr[i] == doubleNext) {
   	 		if(i+1 !== arr.length) {
   	 			newArray.push(arr[i+1]);
   	 		}
   	 	} else if(arr[i] == doublePrev) {
   	 		if(i !== 0) {
   	 			newArray.push(arr[i-1]);
   	 		} 
   	 	} else {
   	 		newArray.push(arr[i]);
   	 	}
   	}

   	return newArray;

};
