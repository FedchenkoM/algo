const arr = [2, 4, 555, 12, 0, 0, 1, 12.2, 234, -0.3];

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIdx = i;

        for (let k = 0 + i; k < arr.length; k++) {
            if (arr[k] < arr[minIdx]) {
                minIdx = k;
            }
        }
        const buffer = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = buffer;
    }
    return arr;
};
