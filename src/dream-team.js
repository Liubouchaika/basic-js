module.exports = function createDreamTeam(members) {
	if(Array.isArray(members)) {
		let rightType = members.filter(item => {
  	return typeof item == 'string';
  }); 
	  let noSpaces = rightType.map(item => item.split(' ').join('')); 
	  let names = noSpaces.map(item => item[0].toUpperCase()); 
	  let logo = names.sort().join('');
	  return logo;
	} else {
		return false;
	}
};