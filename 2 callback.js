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

function mapForObject(x,callback,arr=[]){
  for ( y of Object.keys(x) ) {
    if ( typeof x[y] != 'object' ){
      ( x => x && arr.push(x) )(callback(x[y],y))
    }else{
      mapForObject(x[y],callback,arr)
    }
  }
  return arr
}

console.log(mapForObject(obj,(x,i) => i == "test2" && (x+2))) // => [7, 8, 14, 57]
