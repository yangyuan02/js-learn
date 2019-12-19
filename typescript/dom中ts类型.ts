/*
 * @Author: yangyuan
 * @Date: 2019-12-19 16:28:34
 * @Email: 1367511704@qq.com
 * @LastEditTime : 2019-12-19 16:40:15
 * @Description:
 */
// HTMLElementTagNameMap 中查看有哪些集合

// createElement
const div: HTMLDivElement = document.createElement('div');

const span: HTMLSpanElement = document.createElement('span');

const p: HTMLParagraphElement = document.createElement('p');

// getElementById
const divEle: HTMLElement = document.getElementById('div');

// querySelector
const spanEle = document.querySelector<HTMLSpanElement>('span');

// querySelectorAll
const spanEleAll = document.querySelectorAll<HTMLSpanElement>('span');
