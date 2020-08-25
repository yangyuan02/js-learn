var sortArrayByParityII = function (A) {
    let j = 1;
    for (let i = 0; i < A.length; i += 2) {
        if (A[i] % 2 === 1) {
            // 奇数
            while (A[j] % 2 === 1 && j < A.length) {
                j += 2;
            }
            [A[i], A[j]] = [A[j], A[i]];
        }
    }
    return A;
};

// 数组A一般是奇数,一般是偶数,对数据排序当A[i]为奇数是,i也为奇数,当A[i]为偶数时,i也为偶数
// 输入 [4,2,5,6]
// 输出 [4,5,2,7]
