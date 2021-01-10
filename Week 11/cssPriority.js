function getPriority (arr, n) {
    let S = arr[0] * Math.pow(n, 3) + arr[1] * Math.pow(n, 2) + arr[2] * Math.pow(n, 1) +arr[3] * Math.pow(n, 0);

    console.log(S);
    return S;
}

let N = 1000000;
let arr1 = [0,1,3,1];
let arr2 = [0,2,0,0];
let arr3 = [0,0,1,0];
let arr4 = [0,0,1,1];

getPriority(arr1, N);
getPriority(arr2, N);
getPriority(arr3, N);
getPriority(arr4, N);