let _links = [];

const chainMaker = {
  getLength() {
    return _links.length;
  },
  addLink(value) {
    if (value === undefined){
      _links.push('');
    } else {
      _links.push(value + '');
    }

    return chainMaker;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position == NaN || position > _links.length || position < 1) {
      _links = [];
      throw new Error("Input is not correct!!!");
    } 
    _links.splice(position-1, 1);
    return chainMaker;  
  },
  reverseChain() {
    _links.reverse();
    return chainMaker;
  },
  finishChain() {
    let chain = '( ' + _links.join(' )~~( ') + ' )';
    _links = [];
    return chain;
  }
};

module.exports = chainMaker;
