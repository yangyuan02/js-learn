interface Ioptions {
    el:string
    data:any
    method:string
}

type showPool = {
    type:'if' | 'show'
    show:any
    data:string
    comment?:Comment
}

interface IIFShow {
    showPool: Map<HTMLElement | ChildNode, showPool>
    eventPol: Map<ChildNode, any>
}

class VifShow {
    private el: HTMLElement
    private method: string;
    private data:any
    private showPool: IIFShow['showPool']
    private eventPool: IIFShow['eventPol']
    constructor(options:Ioptions) {
        const {el, data, method} = options;
        this.el = document.querySelector(el);
        this.method = method;
        this.data = data;
        this.showPool = new Map()
        this.eventPool = new Map()
        this.init();
    }
    private init () {
        this.initData()
        this.initDom(this.el)
        this.ininView(this.showPool)
        this.initEvent(this.eventPool)
    }
    private initData() {
        for (let key in this.data) {
            Object.defineProperty(this, key, {
                get() {
                    return this.data[key]
                },
                set(value) {
                    this.data[key] = value
                }
            })
        }
    }
    private initDom (el:Element) {
        const _childNodes = el.childNodes;
        if (!_childNodes.length) {
            return
        }
        _childNodes.forEach(dom => {
            if (dom.nodeType === 1) {
                const vIf:string = (dom as HTMLElement).getAttribute('v-if');
                const vShow:string = (dom as HTMLElement).getAttribute('v-show');
                const vEvent:string = (dom as HTMLElement).getAttribute('@click');
                if (vIf) {
                    this.showPool.set(dom, {
                        type:"if",
                        show:this.data[vShow],
                        data:vIf
                    })
                }

                if (vShow) {
                    this.showPool.set(dom, {
                        type:"show",
                        show:this.data[vShow],
                        data:vShow
                    })
                }
                if (vEvent) {
                    this.eventPool.set(dom, this.method[vEvent])
                }
            }
        })
    }
    private ininView (showPool:IIFShow['showPool']) {
        this.domChange(null, showPool)
    }

    private domChange(data, showPool:IIFShow['showPool']) {
        if (!data) {
            for (let [k, v] of showPool) {
                switch (v.type) {
                    case 'if':
                        v.comment = document.createComment('v-if');
                        !v.show && k.parentNode.replaceChild(v.comment, k);
                        break
                    case 'show':
                        !v.show && ((k as HTMLElement).style.display = 'none')
                        break
                    default:
                        break;
                }
            }
            return
        }

        for (let [k, v] of showPool) {
            if (v.data === data) {
                switch (v.type) {
                    case 'if': 
                        v.show ?  k.parentNode.replaceChild(v.comment, k) : v.comment.parentNode.replaceChild(k, v.comment)
                        v.show = !v.show;
                    case 'show': 
                        v.show ? ((k as HTMLElement).style.display = 'none') : ((k as HTMLElement).style.display = 'block')
                        v.show = !v.show;
                    default:
                }
            }
        }
    }

    private initEvent(eventPool:IIFShow['eventPol']) {
        for (let [k, v] of eventPool) {
            k.addEventListener('click', v.bind(this), false)
        }
    }
}