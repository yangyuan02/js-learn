/*
 * @Author: yangyuan
 * @Date: 2019-11-12 10:48:03
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2019-11-18 15:14:50
 * @Description:
 */
// https://juejin.im/post/5dc786026fb9a04a7847f56a

const binarySearch = (arr, target) => {
  if (arr.length === 0) return -1;
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (target < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

const arr = [1, 2, 4, 5, 6, 6, 7, 8, 9, 11, 12, 14];
console.log(binarySearch(arr, 6));

const list = [
  {
    code: 'CHN',
    name: '中国',
    type: '0',
    pcode: '',
    checked: true,
    state: {
      checked: true,
      half: true
    }
  },
  {
    code: '370000',
    name: '山东',
    type: '1',
    pcode: 'CHN',
    checked: true,
    state: {
      checked: true,
      half: false
    }
  },
  {
    code: '370900',
    name: '泰安',
    type: '2',
    pcode: '370000',
    checked: true,
    state: {
      checked: true,
      half: false
    }
  },
  {
    code: '370902',
    name: '泰山',
    type: '3',
    pcode: '370900',
    checked: true,
    state: {
      checked: true,
      half: false
    }
  },
  {
    code: '370903',
    name: '岱岳',
    type: '3',
    pcode: '370900',
    checked: true,
    state: {
      checked: true,
      half: false
    }
  },
  {
    code: '370921',
    name: '宁阳',
    type: '3',
    pcode: '370900',
    checked: true,
    state: {
      checked: true,
      half: false
    }
  },
  {
    code: '370923',
    name: '东平',
    type: '3',
    pcode: '370900',
    checked: true,
    state: {
      checked: true,
      half: false
    }
  },
  {
    code: '370982',
    name: '新泰',
    type: '3',
    pcode: '370900',
    checked: true,
    state: {
      checked: true,
      half: false
    }
  }
];

function area(list) {
  const areaList = [];
  const county = list.filter(item => item.type === '3');
  for (let i = 0; i < county.length; i++) {
    const item = {};
    item.countyCode = county[i].code;
    item.cityCode = county[i].pcode;
    areaList.push(item);
  }
  return areaList;
}

function getProvice(list) {
  const areaList = area(list);
  for (let i = 0; i < areaList.length; i++) {
    if (areaList[i] && areaList[i].cityCode) {
      const proviceItem = list.find(item => item.code === areaList[i].cityCode);
      if (proviceItem) {
        areaList[i].proviceCode = proviceItem.code;
        areaList[i].countryCode = proviceItem.pcode;
      }
    }
  }
  return areaList;
}
