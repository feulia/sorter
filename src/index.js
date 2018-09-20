class Sorter {

  constructor() {
    this.stack = [];
    this.check = function(first, second) {
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
    var temporaryStack = [];
    for (i = 0; i < indices.length; i++) {
      temporaryStack.push(this.stack[indices[i]]);
    }
    if (indices[1] - indices[0] >= 1) {
      temporaryStack.sort(this.check)
    };
    if (indices[1] - indices[0] <= -1) {
      temporaryStack.sort(this.check).reverse()
    };
    for (i = 0; i < indices.length; i++) {
      this.stack[indices[i]] = temporaryStack[i];
    }
  }

  setComparator(compareFunction) {
    this.check = compareFunction;
  }
}

module.exports = Sorter;
