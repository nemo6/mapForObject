function rec(x,arr=[]){

  for ( y of Object.keys(x) ) {
    
    if ( typeof x[y] != 'object' ){

      	if( y == "k" )
	arr.push(x[y])

    }else{

    	const isBelowThreshold = x => typeof x != 'object' // vérifie que la valeur n'est ni objet ni un tableau

    	if( Array.isArray(x[y]) && x[y].every(isBelowThreshold) && y == "k" )
    	arr.push(x[y])

	try { rec(x[y],arr) } catch(e) { console.log("%c"+y,"color:red") }

    }

  }

  return arr

}

console.log(rec(obj))
