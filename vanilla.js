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

function mapForObject (x,arr=[]){
  for ( y of Object.keys(x) ) {
    if ( typeof x[y] != 'object' ){
      if( y == "test2" ) // le callback remplace ça
      arr.push(x[y]+2) // et le "+2"
    }else{
      rec(x[y],arr)
    }
  }
  return arr
}

console.log( mapForObject(obj) ) // => [7, 8, 14, 57]
