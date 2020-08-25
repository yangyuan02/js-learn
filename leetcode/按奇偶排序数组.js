var sortArrayByParity = function (A) {
    let i = 0;
    let j = A.length;
    while (i < j) {
        if (A[i] % 2 === 1 && A[j] % 2 === 0) {
            // i
            [A[i], A[j]] = [A[j], A[i]];
            i++;
            j++;
        } else if (A[i] % 2 === 1 && A[j] % 2 === 0) {
            i++;
        } else if (A[i] % 2 === 0 && A[j] % 2 === 1) {
            i++;
            j--;
        } else {
            j--;
        }
    }
    return A;
};

// 输入 [3,1,2,3]
// 输出 [2,4,3,1]
