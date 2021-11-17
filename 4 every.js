function rec(x,arr=[]){

  for ( y of Object.keys(x) ) {
    
    if ( typeof x[y] != 'object' ){

      	if( y == "k" )
	arr.push(x[y])

    }else{

	// x[y].every(isBelowThreshold) : vérifie que chaque élement dans x[y] n'est ni un objet ni un tableau

    	const isBelowThreshold = x => typeof x != 'object'

    	if( Array.isArray(x[y]) && x[y].every(isBelowThreshold) && y == "k" )
    	arr.push(x[y])

	try { rec(x[y],arr) } catch(e) { console.log("%c"+y,"color:red") }

    }

  }

  return arr

}

console.log(rec(obj))
