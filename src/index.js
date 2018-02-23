class Sorter {
  constructor() {
    this.Array = new Array() 
    this.compare = function(a, b){
      if(a > b) return 1;
      if(a < b) return -1;
      if(a == b) return 0;
    }
  }

  add(element) {
    this.Array.push(element);
  }

  at(index) {
    return this.Array[index];
  }

  get length() {
    return this.Array.length;
  }

  toArray() {
    return this.Array;
  }

  sort(indices) {
    indices.sort((a, b) => (a - b));
    for(var i = 0; i < indices.length; i++){
      for(var j = 0; j < indices.length; j++){
          var indexI = indices[i];
          var indexJ = indices[j];
          if(this.compare(this.at(indexI), this.at(indexJ)) < 0){
              var temp = this.at(indexI);
              this.Array[indexI] = this.at(indexJ);
              this.Array[indexJ] = temp;
          }
      }
    }
  }

  setComparator(compareFunction) {
    this.compare = compareFunction;
  }
}

module.exports = Sorter;