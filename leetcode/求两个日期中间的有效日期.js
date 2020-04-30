/*
 * @Author: yangyuan
 * @Date: 2020-04-30 16:00:46
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2020-04-30 16:08:15
 * @Description:
 */

function rangeDate(startDate, endDate) {
    let start_ = new Date(startDate).getTime();
    let end_ = new Data(endDate).getTime();
    let day = 24 * 60 * 60 * 1000;
    let arr = [];
    for (let i = start_; i <= end_; i += day) {
        arr.push(i);
    }
    return arr.map((item) => {
        let date = new Date(item);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        return `${year}-${month}-${day}`;
    });
}
