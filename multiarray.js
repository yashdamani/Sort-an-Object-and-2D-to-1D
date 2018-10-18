var a = [[1,2,3,4],5,6,7,[8,9,0],[5]];
var b = [];
for(var i = 0; i<a.length; i++){
 	if(a[i].length!==undefined){
		for(var j = 0; j<a[i].length; j++){
		 	b.push(a[i][j]);
		}
	}
	else{
		b.push(a[i]);
	}
}

console.log(b);