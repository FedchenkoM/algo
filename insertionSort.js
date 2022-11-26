let arr = [22, 4, 7, Infinity, -100, 555, 12, 0, 0, 1, 12.2, 21, 2.2, 77, -Infinity]

const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {

    for (let k = i; k > 0; k--) {
      if (arr[k] < arr[k - 1]) {
        const buffer = arr[k]
        arr[k] = arr[k - 1]
        arr[k - 1] = buffer
      }
    }
  }
  return arr
}

console.log(insertionSort(arr));