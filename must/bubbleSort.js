let arr = [2, 4, 555, 12, 0, 0, 1, 12.2]

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let k = 0; k < arr.length - 1 - i; k++) {
      let cur = arr[k]
      let next = arr[k + 1]
      if (cur > next) {
        arr[k] = next
        arr[k + 1] = cur
      }
    }
  }
  return arr
}
console.log(bubbleSort(arr));