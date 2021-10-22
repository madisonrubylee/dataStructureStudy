let arr= [10,11,12,13,14,15,16,17,18,19]

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