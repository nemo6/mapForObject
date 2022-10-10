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

function mapForObject(x,arr=[]){
  for ( y of Object.keys(x) ) {
    if ( typeof x[y] != 'object' ){
      if( y == "test2" ) // le callback remplace ça
      arr.push(x[y])
    }else{
      mapForObject(x[y],arr)
    }
  }
  return arr
}

console.log( mapForObject(obj) ) // => [5, 6, 12, 55]
