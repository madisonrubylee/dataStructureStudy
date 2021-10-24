let arr= [10,11,12,13,14,15,16,17,18,19]
let unsorted = [10,13,11,17,14,12,15,19,18,16]

// Let's convert the ascending array into a max heap 
function makeMaxHeap(arr) {
    let maxHeap = []
    let length = arr.length
    for(let i=0; i<length; i++) {
        maxHeap.push(arr[i])
        let newNodeIndex = maxHeap.length - 1
        while(newNodeIndex>0) {
            // add an if statement to compare the last element of Max heap with its parent 
            // Math.floor((newNodeIndex-1)/2) = parent node 
            if(maxHeap[Math.floor((newNodeIndex-1)/2)]<maxHeap[newNodeIndex]) {
                let tmp = maxHeap[newNodeIndex]
                maxHeap[newNodeIndex] = maxHeap[Math.floor((newNodeIndex-1)/2)]
                maxHeap[Math.floor((newNodeIndex-1)/2)] = tmp 
                // reset the new node index's value to the index of its original parent node 
                newNodeIndex = Math.floor((newNodeIndex-1)/2)
            } else {
                break
            }
        }
    }
    return maxHeap
}

// heap sort 
// worst time complexity : O (n log n), space complexity: O(1)
function heapSort(arr) {
    let sorted = []
    let maxHeap = makeMaxHeap(arr)
    while(maxHeap.length) {
        let max = maxHeap.shift()
        console.log('max', max)
        sorted.push(max)
        maxHeap = makeMaxHeap(maxHeap)
        console.log('maxHeap', maxHeap)
    }
    return sorted
}