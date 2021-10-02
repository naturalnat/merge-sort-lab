function findMinAndRemoveSorted(array) {
    let minIndex = array.indexOf(Math.min(...array))
    return array.splice(minIndex, 1)
}

function merge(array1, array2) {
    let sorted = []
    while (array1.length != 0 && array2.length != 0) {
        if (array1[0] < array2[0]) {
            let val = array1.splice(0, 1)
            sorted.push(val[0])
        }
        else {
            let val = array2.splice(0, 1)
            sorted.push(val[0])
        }
    }
    return sorted.concat(array1).concat(array2)
}

function mergeSort(array) {
    let mid = array.length / 2
    let array1 = array.slice(0, mid)
    let array2 = array.slice(mid)

    if (array.length < 2) {
        return array
    } else {
        return merge(mergeSort(array1), mergeSort(array2))
    }
}