/*
 * @Author: yangyuan
 * @Date: 2019-11-11 15:45:42
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2019-11-11 16:09:31
 * @Description:
 */
let foo = <div id="foo">Hello</div>;

var foo = h('div', { id: 'foo' }, 'Hello');

{
    nodeName: 'div',
    attributes: {id:'foo'},
    children: ['hello']
}

function Vnode(nodeName, attributes, children) {
    this.nodeName = nodeName;
    this.attributes = attributes;
    this.children = children
}

function h(nodeName, attributes, ...args) {
    let children = args.length ? [].concat(...args) : null;
    return new Vnode(nodeName, attributes, children);
}

const Preact = {
    render: function(vNode, container) {
        if (typeof vNode === 'string') {
            return document.createTextNode(vNode);
        }
        let { nodeName ,attributes: attrs, children } = vNode;
        let node;
        if (typeof nodeName === 'string') {
            node = document.createElement(nodeName);
            if (attrs) {
                for (let key in attrs) {
                    if (attrs.hasOwnProperty(key)) {
                        node.setAttribute(key, attrs[key])
                    }
                }
            }
            (children || []).forEach(child => {
                node.appendChild(Preact.render(child))
            });
        }
        container.appendChild(node)
    }
}

Preact.render(h('div',{id: 'daisy'},'hello world'),document.getElementById('container'))