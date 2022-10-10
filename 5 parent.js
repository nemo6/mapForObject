function mapForObject(x,callback,arr=[]){

	for ( let y of Object.keys(x) )
		if ( typeof x[y] != 'object' )
			( x => x && arr.push(x) )(callback(x[y],y,x)) // je rajoute le x en plus, c'est l'objet qui contient la valeur ( ou la clé ) que je cherche
		else
			mapForObject(x[y],callback,arr)

	return arr

}
//
console.log(mapForObject( obj, (x,i,p) => i == "title" && [x,p.dateAdded] )) // p correspond a l'objet qui contient la valeur x
