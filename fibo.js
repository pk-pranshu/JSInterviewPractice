function fibo(n){
  var curr=0,next=1,swap;
  for(var i=0; i < n; i++){
   console.log(curr);
   swap=curr; 
   curr=next;
   next=next+swap;
  }
  console.log(curr);
}
fibo(8);

// 0 1 1 2 3 5 8 13 21 

// function* fibGen (n) {
//   var current = 0, next = 1, swap
//   for (var i = 0; i &lt; n; i++) {
//     swap = current, current = next
//     next = swap + next
//     yield current
//   }
// }
// 
// var newfibo = fibGen (8);
// console.log(newfibo);