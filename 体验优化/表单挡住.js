/*
 * @Author: yangyuan
 * @Date: 2019-10-28 10:38:29
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2019-10-28 10:44:55
 * @Description: 
 */
const handResize() {
    const clientHeight = document.documentElement.clientHeight;
    window.addEventListener('resize',() => {
        if (document.activeElement.tagName === 'INPUT'||document.activeElement.tagName === 'TEXTAREA') {
            setTimeout(() => {
                document.activeElement.scrollIntoView();
            }, 0);
        }
    })
    // fiex定位元素被顶起问题
    const bodyHeight = document.documentElement.clientHeight;
    const ele = document.getElementById('fixed-bottom');
    if (ele) {
        if (clientHeight > bodyHeight) {
            ele.style.display = 'none'
        } else {
            ele.style.display = 'block';
        }
    }
}