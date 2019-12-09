/*
 * @Author: yangyuan
 * @Date: 2019-12-09 13:37:28
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2019-12-09 13:39:51
 * @Description:
 */
const arr = [
  { id: 1, parentId: 0, name: '四川' },
  { id: 2, parentId: 0, name: '贵州' },
  { id: 3, parentId: 0, name: '云南' },
  { id: 4, parentId: 0, name: '江苏' },

  { id: 5, parentId: 1, name: '成都' },
  { id: 6, parentId: 2, name: '贵州' },
  { id: 7, parentId: 3, name: '昆明' },
  { id: 8, parentId: 4, name: '苏州' },

  { id: 9, parentId: 5, name: '成都县1' },
  { id: 10, parentId: 5, name: '成都县2' },
  { id: 11, parentId: 5, name: '成都县3' },
  { id: 12, parentId: 5, name: '成都县4' },
  { id: 13, parentId: 5, name: '成都县5' },

  { id: 14, parentId: 6, name: '贵州县1' },
  { id: 15, parentId: 6, name: '贵州县2' },
  { id: 16, parentId: 6, name: '贵州县3' },

  { id: 17, parentId: 7, name: '昆明县1' },
  { id: 18, parentId: 7, name: '昆明县2' },
  { id: 19, parentId: 7, name: '昆明县3' },

  { id: 20, parentId: 8, name: '苏州县1' },
  { id: 21, parentId: 8, name: '苏州县2' },
  { id: 22, parentId: 8, name: '苏州县3' },
  { id: 23, parentId: 8, name: '苏州县4' },

  { id: 24, parentId: 9, name: '成都镇1' },
  { id: 25, parentId: 10, name: '成都镇2' },

  { id: 26, parentId: 24, name: '成都村11' },
  { id: 27, parentId: 24, name: '成都村12' },
  { id: 28, parentId: 24, name: '成都村13' }
];

function main(arr, pid = 0) {
  const temp = [];
  for (const item of arr) {
    if (item.parentId === pid) {
      item.children = main(arr, item.id);
      temp.push(item);
    }
  }
  return temp;
}

const res = main(arr, (pid = 0));
