module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (Array.isArray(arr)) {
            // let result = 1;

            // let tempArr = arr.map(t => 
            //     return this.calculateDepth(t)
            // });

            // if (tempArr.length) {
            //     result += ;
            // }
            return 1 + Math.max(...arr.map(t => this.calculateDepth(t)));
            // return 1 + this.calculateDepth(...arr.filter());
        } else {
            return 0;
        }
    }
};
