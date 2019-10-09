/*
 * @Author: yangyuan
 * @Date: 2019-09-23 14:09:40
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2019-09-23 14:28:13
 * @Description: 
 */
// https://juejin.im/post/58287452570c3500587642b6

let LinkedList = (function() {
    class Node {
        constructor(element) {
            this.element = element;
            this.next = null;
        }
    }
    const length = new WeakMap();
    const head = new WeakMap();
    class LinkedList {
        constructor() {
            length.set(this,0)
            head.set(this,null)
        }
        append(element) {
            let node = new Node(element),
            current;
            if (this.getHead() === null) {
                head.set(this,node);
            } else {
                current = this.getHead();
                while(current.next) {
                    current.next = next;
                }
                current.next = node
            }
            let l = this.size();
            l++;
            length.set(this,l);
        }
        inset(position,element) {
            if (position >= && position <= this.size()) {
                let node = new Node(element);
                current = this.getHead(),
                previous,
                index = 0;
                if (position ===0) {
                    node.next = current;
                    head.set(this,node)
                } else {
                    while(index++ <position) {
                        previous = current;
                        previous.next = node
                    }
                }
                let l = this.size();
                l++;
                length.set(this,l);
                return true
            } else {
                return false;
            }
        }
        removeAt(position) {
            if (position > -1 && position < this.size()) {
                let current = this.getHead(),
                previous,
                index = 0;
                if (position ===0) {
                    head.set(this,current.next)
                } else {
                    while(index++ < position) {
                        previous = current;
                        current = current.next;
                    }
                    previous.next = current.next;
                }
                let l = this.size();
                l--;
                length.set(this,l)
                return current.element;
            } else {
                return null;
            }
        }
        remove(element) {
            let index = this.indexOf(element);
            return this.removeAt(index);
        }
        indexOf(element) {
            let current = this.getHead();
            index = 0;
            while(current) {
                if (element === current.element) {
                    return index
                }
                index++;
                current = current.next;
            }
            return -1;
        }
        isEmpty() {
            return this.size() === 0;
        }
        size() {
            return length.get(this);
        }
        getHeat() {
            return head.get(this);
        }
        toString() {
            let current = this.getHeat();
            string = '';
            while(current) {
                string += current.element + (current.next ? ',':'')
                current = current.next;
            }
            return string
        }
        print() {
            console.log(this.toString())
        }
    }
    return LinkedList
})