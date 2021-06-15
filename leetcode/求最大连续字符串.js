const str = 'aaaaabbbbbbccccc';
// 双指针
let i = 0;
let j = 0;
let max = 0;
let maxStr = '';
while (i <= str.length - 1) {
    if (str[i] !== str[j]) { // str[i]和str[j]不相等了说明不是连续的字符了,让i到j的位置
        i = j
    }
    if (j - i > max) { //如果大于max,让max = j - i
        max = j - i
        maxStr = str[i]
    }
    // j会一直++
    j++;
}