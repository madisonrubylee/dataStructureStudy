// O(n) : we pass the function, the number n and this ran in times. 
// it ran 10 times at output 10. That's wht O of n is. 
// O of n is always going to be a straight line, it is proprotional, the number of operations is going to be
// proportional to whatever n is.
function logItem(n) {
    for(let i = 0; i < n; i++) {
        console.log(i);
    }
} 

logItem(10);


// In this case, code ran n plus n times. n + n = 2n
// O (2n) => drop constants => O(n).
// And we say that this code is O of n, so our first rule for simplifying our big O notation,drop constants.
function logItems(n) {
    for(let i = 0; i < n; i++) {
        console.log(i);
    }

    for(let j = 0; j < n; j++) {
        console.log(j);
    }
} 

logItems(3);

// O(n^2) : output 100 items.
// The number of items that were output in this case is in times in.\
// And that's where we get our whole event squared.
function logItemsO(n) {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
} 

logItemsO(10);


function logItemsOThree(n) {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            for(let k = 0; k < n; k++) {
                console.log(i, j ,k);
            }
        }
    }
} 

logItemsOThree(10);