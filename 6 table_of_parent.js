function mapForObject(x,callback,v=[],i=0,p=[]){

	let last = (x,n) => x[x.length-n]

	for ( let y of Object.keys(x) ) {

		if ( typeof x[y] != 'object' || x[y] == null ){

			( (x) => x && v.push(x) )( callback(x[y],y,p,last) ) // x[y] value y key x parent p table of parent
		
		}else{

			p.push(x[y])
			i++
			mapForObject(x[y],callback,v,i,p)
			i--
			p.pop()
		}
	}
	
	return v
}

console.log( mapForObject( d, (x,i,_,p,last) => i == "uri" && [x,last(p,1).name] )) // x value i key _ parent p table of parent
