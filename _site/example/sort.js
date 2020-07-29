/**
 * 冒泡排序
 */
function bubbleSort(arr) {
    let time = 0
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {        // 相邻元素两两对比
                var temp = arr[j + 1];        // 元素交换
                arr[j + 1] = arr[j];
                arr[j] = temp;
                time++;
                // console.log(j, arr[j])
                // console.log(j + 1, arr[j])
                console.log(time, 'bubbleSort: ', arr)
                console.log('-------------------')
            }
        }
    }
    console.log('bubbleSort: ', arr)
    return arr;
}
// bubbleSort([7,5,4,3,2])

function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {// 寻找最小的数
                minIndex = j;// 将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
        console.log(minIndex, 'selectionSort: ', arr)
        console.log('-------------------')
    }
    return arr;
}

// selectionSort([7,15,4,3,2])
/**
 * 插入排序
 */
function insertionSort(arr) {
    var len = arr.length;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}