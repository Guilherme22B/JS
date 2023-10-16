const a = [4, 8 ,9, 12]

/*
for(c = 0; c < a.length; c++ ){
    console.log(a[c])
}
*/

for(c in a){
    console.log(a[c])
}
let pos = a.indexOf(8)

console.log(pos)
 