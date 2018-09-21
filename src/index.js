class Sorter {

  constructor() {
    this.stack = new Array();
    this.compare = function(first, second) {
      return first - second;
    };
  }

  add(element) {
    this.stack.push(element);
  }

  at(index) {
    return this.stack[index];
  }

  get length() {
    return this.stack.length;
  }

  toArray() {
    return this.stack;
  }

  sort(indices) {
    const temporaryStack = [];
    for (let i = 0; i < indices.length; i++) {
      temporaryStack.push(this.stack[indices[i]]);
    }
    if (indices[1] - indices[0] >= 1) {
      temporaryStack.sort(this.compare)
    };
    if (indices[1] - indices[0] <= -1) {
      temporaryStack.sort(this.compare).reverse()
    };
    for (let i = 0; i < indices.length; i++) {
      this.stack[indices[i]] = temporaryStack[i];
    }
  }

  setComparator(compareFunction) {
    this.compare = compareFunction;
  }
}

module.exports = Sorter;
