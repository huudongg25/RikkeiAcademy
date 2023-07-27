//Tạo hàm faMap có chức năng giống map
function faMap(arr, callback) {
    if (!Array.isArray(arr)) {
        return false
    }

    const mappedArray = [];
    for (let i = 0; i < arr.length; i++) {
        mappedArray.push(callback(arr[i], i, arr));
    }

    return mappedArray;
}

const numbers = [1, 2, 3, 4];

const doubledNumbers = faMap(numbers, (num) => num * 2);
console.log(doubledNumbers);

//tạo ra 1 hàm faFilter mô phỏng lại hàm filter
function faFilter(arr, callback) {
    if (!Array.isArray(arr)) {
        return false
    }

    const filteredArray = faMap(arr, (element, index) => {
        return callback(element, index) ? element : undefined;
    });

    return filteredArray.filter((element) => element !== undefined);
}

const numbers2 = [1, 2, 3, 4, 5, 6];

const oddNumbers = faFilter(numbers2, (num) => num % 2 !== 0);
console.log(oddNumbers);

//viết hàm faReduce mô phỏng hàm reduce 
function faReduce(arr, callback, initialValue) {
    if (!Array.isArray(arr)) {
        return false
    }

    let result;
    let index;

    if (initialValue !== undefined) {
        result = initialValue;
        index = 0;
    } else {
        result = arr[0];
        index = 1;
    }

    for (let i = index; i < arr.length; i++) {
        result = callback(result, arr[i], i, arr);
    }

    return result;
}

const numbers3 = [1, 2, 3, 4];

const sum = faReduce(numbers, (acc, num) => acc + num, 0);
console.log(sum); 