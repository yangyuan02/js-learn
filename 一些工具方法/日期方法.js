// 1.返回当前日期转换天数
const dayOfYear = data => Math.floor((data - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
dayOfYear(new Date()); // 272

// 2.返回时分秒冒号格式字符串
const getColonTimeFromDate = data => data.toTimeString().slice(0, 8);
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
const array = [new Date(2017, 4, 13), new Date(2018, 2, 12), new Date(2016, 0, 10), new Date(2016, 0, 9)];
maxDate(array); // 2018-03-11T22:00:00.000Z

// 6.返回给定的日期中最小的日期
const minDate = (...dates) => new Date(Math.min.apply(null, ...dates));
const array = [new Date(2017, 4, 13), new Date(2018, 2, 12), new Date(2016, 0, 10), new Date(2016, 0, 9)];
minDate(array); // 2016-01-08T22:00:00.000Z
