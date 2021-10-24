// O(n) : we pass the function, the number n and this ran in times. 
// it ran 10 times at output 10. That's wht O of n is. 
// O of n is always going to be a straight line, it is proprotional, the number of operations is going to be
// proportional to whatever n is.
function logItem(n) {
    for(let i = 0; i < n; i++) {
        console.log(i);
    }
} 

//logItem(10);


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

//logItems(3);

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

//logItemsO(10);


// In times and times in operations or ten times, ten times ten since we pass at the number 10.
// n * n * n  = n ^ 3  O(n^3) => We are going to simplify this. O(n^2)
function logItemsOThree(n) {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            for(let k = 0; k < n; k++) {
                console.log(i, j ,k);
            }
        }
    }
} 

//logItemsOThree(10);

// Drop Non-Dominants
// O( n^2 + n ) : It's not really affecting the number of operations in sqaured is the dominant term and in by itself.
// is the non dominant term. So we just remove it so. We drop non-dominants
function logItemsNonDomi(n) {
    // O(n^2)
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }

    //  O(n)
    for(let k = 0; k < n; k++) {
        console.log(k);
    }
} 

//logItemsNonDomi(10);



// O(1) 
// This situation here where we have two editions. It's two operations that is constant, no matter what it is, the number 
// of operations does not change.
function addItems(n) {
    return n + n
}

// O (log n) 
// 문제를 해결하는데 필요한 단계들이 연산마다 특정요인에 의해 줄어든다.
// 오름차순 정렬된 배열의 이진 검색이 예시다. 


// Array
// 1) .pop(), .push() We don't have to reindex anything, and because of that push and pop
// are both of one operations. => O(1)

// 2) .shift(), .unshift() reindex. => O(n)


// Diffrent Terms for Input
// O(2n) => O(n)
function diffTerms(n) {
    for (let i =0; i<n; i++) {
        console.log(i)
    }

    for(let j=0; j<n; j++) {
        console.log(j);
    }
}


// 
function diffTermsA(a, b) {
    // O(a)
    for (let i =0; i<a; i++) {
        console.log(i)
    }

    // O(b)
    for(let j=0; j<b; j++) {
        console.log(j);
    }
}