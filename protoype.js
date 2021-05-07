obj = {
  "test": {
    "a": {
      "test2" : 5
    },
    "b": {
      "test2" : 6,
      "test" : {
        "test3" : 8,
        "test": {
          "subtest": {
            "test2" : 12,
            "subtest": {
              "test1": 2,
              "test2" : 55
            }
          }
        }
      }
    }
  }
}

Object.prototype.mapForObject = function(callback,arr=[]){
  for ( y of Object.keys(this) ) {
    if ( typeof this[y] != 'object' ){
      ( x => x && arr.push(x) )(callback(this[y],[y]))
    }else{
      this[y].mapForObject(callback,arr)
    }
  }
  return arr
}

console.log( obj.mapForObject( (x,i) => i == "test2" && (x+2) ) ) // => [7, 8, 14, 57]
