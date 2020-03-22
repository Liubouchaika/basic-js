module.exports = function repeater(str, options) {
   let arrAdditions = new Array(options.additionRepeatTimes);
   str = str + '';

   let addition = undefined;
   if (options.addition !== undefined) {
   		addition = '' + options.addition;
   }

   let additionsSrt = str + arrAdditions.fill(addition).join(options.additionSeparator);
   let arrAdditionsSrt = new Array(options.repeatTimes);
   let result;

   if (options.separator == undefined) {
   	options.separator = '+';
   	}
   	result = arrAdditionsSrt.fill(additionsSrt).join(options.separator);
   	return result;
};
  