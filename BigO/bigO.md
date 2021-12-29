# BigO

Big O Notation is a way to formalize fuzzy couning. 
We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases 
O(n) operation inside of an O(n) operation. O(n^2) 

function printAll(n) {
// O(n) 
	for (let i = 0; i< n; i++) {
    //O(n) 
	   for (let j = 0; j<n; j++) {
        console.log(i , j)
    }
  }
}


- Constants Don’t Matter

     O(2n) (x)  / O (500) (x) / O(13n^2) (x)