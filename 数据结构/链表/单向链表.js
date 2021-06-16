/*
 * @Author: yangyuan
 * @Date: 2020-01-08 15:31:20
 * @Email: 1367511704@qq.com
 * @LastEditTime : 2020-01-08 17:36:24
 * @Description:
 */

/**
 *
 * 单个链表节点
 * @class Node
 */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 *
 * 链表结构
 * @class LinkedList
 */
class LinkedList {
    constructor(val = null) {
        this.head = null;
        this.length = 0;
        if (val) {
            this.head = new Node(val);
            this.length = 1;
        }
    }
    append(val) {
        const node = new Node(val);
        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length += 1;
    }
    removeAt(position) {
        // 判断输入
        if (position >= this.length || position < 0) {
            return null;
        }
        let current = this.head;
        // 删除头节点,只需要改变head指针即可
        if (position === 0) {
            this.head = current.next;
        } else {
            let index = 0;
            let prev = null;
            while (index < position) {
                prev = current;
                current = current.next;
                index += 1;
            }
            prev.next = current.next; // 改变上一个节点的next指向
        }
        this.length -= 1; // 长度减少
        return current.val; // 返回删除节点值
    }
    insert(position, val) {
        if (position >= this.length || position < 0) {
            return false;
        }
        const node = new Node(val);
        if (position === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let index = 0;
            let current = this.head;
            let prev = null;
            while (index < position) {
                prev = current;
                current = current.next;
                index += 1;
            }
            node.next = current;
            prev.next = node;
        }
        this.length += 1;
        return true;
    }
    indexOf(val, start = 0) {
        if (start >= this.length) {
            // 判断起始位置是否合法
            return -1;
        }
        let index = 0;
        let current = this.head;
        while (index < this.length) {
            if (current.val === val && index >= start) {
                return index;
            }
            current = current.next;
            index += 1;
        }
        return -1;
    }
    remove(val, start = 0) {
        const index = this.indexOf(val, start);
        return this.removeAt(index);
    }
    size() {
        return this.length;
    }
    isEmpty() {
        return !!this.length;
    }
}
