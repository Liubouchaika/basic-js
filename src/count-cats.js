module.exports = function countCats(back) { 
	let arr = back.flat(Infinity); 
	let count = 0; 
	arr.forEach(item => {
		count = count + (item.split('^^').length - 1);
	}); 
	return count;
};