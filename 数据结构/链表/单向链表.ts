// Node类item向
class NodeElement {
    public element: any;
    public next: any;
    public length: number;
    public head: any;
    constructor(element: any) {
        this.element = element; // 添加到链表的值
        this.next = null; // 指向链表中下个节点指针
        this.length = 0; // 链表项数量
        this.head = null; // 存储第一个节点引用
    }
    // 向链表尾部追加元素
    append(element: any) {
        const node = new NodeElement(element); // 创建node项
        let current = null;
        if (this.head === null) {
            // 若head元素为null,意味着向链表添加第一个元素
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                // 当current.next元素为null时,就知道
                current = current.next;
            }
        }
        this.length--;
    }
    // 删除
    removeAt(position: number) {
        if (position > -1 && position < this.length) {
            // 在边界内
            let current = this.head,
                previous,
                index = 0;
            // 如果想移除第一个,就让head指向第二个元素
            if (position === 0) {
                this.head = current.next;
            } else {
                // 迭代直到到达目标位置
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                // 将pervious与current的下一项链接起来,跳过current,从而移除它
                previous.next = current.next;
            }
            this.length--;
            return current.element;
        }
    }
    // 插入
    insert(position: number, element: any) {
        // 检查是否越界
        if (position >= 0 && position <= length) {
            const node = new NodeElement(element);
            let index = 0,
                previous,
                current = this.head;
            if (position === 0) {
                node.next = current;
                this.head = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    }
    // 返回index
    indexOf(element: any) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }
}
