// 1.返回当前日期转换天数
const dayOfYear = (data) =>
    Math.floor(
        (data - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
    );
dayOfYear(new Date()); // 272

// 2.返回时分秒冒号格式字符串
const getColonTimeFromDate = (data) => data.toTimeString().slice(0, 8);
getColonTimeFromDate(new Date()); //08:38:00

// 3.返回2个时间的差异天数
const getDaysDiffBetweenDates = (dateInitial, dateFinal) => {
    (dateInitial - dateFinal) / (1000 * 3600 * 24);
};

// 4.判断日期之间大小
const isAfterDate = (dataA, dataB) => dataA - dataB;
isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); //true

// 5.返回给定的日期中最大的日期
const maxDate = (...dates) => new Date(Math.max.apply(null, ...dates));
const array = [
    new Date(2017, 4, 13),
    new Date(2018, 2, 12),
    new Date(2016, 0, 10),
    new Date(2016, 0, 9),
];
maxDate(array); // 2018-03-11T22:00:00.000Z

// 6.返回给定的日期中最小的日期
const minDate = (...dates) => new Date(Math.min.apply(null, ...dates));
const array = [
    new Date(2017, 4, 13),
    new Date(2018, 2, 12),
    new Date(2016, 0, 10),
    new Date(2016, 0, 9),
];
minDate(array); // 2016-01-08T22:00:00.000Z

var date1 = "2015/05/01 00:00:00"; //开始时间
var date2 = new Date(); //结束时间
var date3 = date2.getTime() - new Date(date1).getTime(); //时间差的毫秒数
//计算出相差天数
var days = Math.floor(date3 / (24 * 3600 * 1000));

//计算出小时数
var leave1 = date3 % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
var hours = Math.floor(leave1 / (3600 * 1000));
//计算相差分钟数
var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
var minutes = Math.floor(leave2 / (60 * 1000));
//计算相差秒数
var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
var seconds = Math.round(leave3 / 1000);
alert(
    " 相差 " +
        days +
        "天 " +
        hours +
        "小时 " +
        minutes +
        " 分钟" +
        seconds +
        " 秒"
);
