const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20];

const binarySearch = (arr, num) => {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.round((start + end) / 2);

    while (arr[mid] !== num) {
        if (start === end) {
            return -1;
        }
        if (arr[mid] > num) {
            start = 0;
            end = mid;
            mid = Math.floor((start + end) / 2);
        } else {
            start = mid;
            end = arr.length - 1;
            mid = Math.ceil((start + end) / 2);
        }
    }
    return mid;
};
