/*
 * @Author: yangyuan
 * @Date: 2019-08-29 15:05:40
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2019-09-02 11:30:13
 */
// https://juejin.im/post/5cd7f2c4e51d453a7d63b715
'ues strict'
import React, { FC, PropsWithChildren, useContext, useCallback, ChangeEventHandler, Component, ChangeEvent } from 'react';

export interface MyComponentProps {
  className?: string;
  style?: React.CSSProperties;
}

export const MyComponent: FC<MyComponentProps> = props => {
  // bad
  return <div>hello react</div>;
};

export interface MyComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function MyComponent(props: MyComponentProps) {
  //good
  return <div>hello react</div>;
}

export default (props: {}) => {
  // bad
  return <div>hello word</div>;
};

export default function Foo(props: {}) {
  // good
  return <div>hello word</div>;
}

export interface HelloProps {
  name: string;
}
// 默认的props解决方案
export const Hello: FC<HelloProps> = ({ name }) => <div>hello {name}</div>; // bad
Hello.defaultProps = { name: 'tj' };

export const Hello: FC<HelloProps> = ({ name = 'tj' }) => <div>hello {name}</div>; // good

// 泛型函数组件
export interface ListProps<T> {
  visible: boolean;
  list: [];
  renderItem: (item: T, index: number) => React.ReactNode;
}
export function List<T>(props: ListProps<T>) {
  return <div />;
}
function Test() {
  return (
    <List
      list={[1, 2, 3]}
      renderItem={i => {
        /*自动推断i为number类型*/
      }}
    />
  );
}

export interface LayoutProps {}
export interface LayoutHeaderProps {}
export interface LayoutFooterProps {}

export function Layout(props: PropsWithChildren<LayoutProps>) {
  return <div className="layout">{props.children}</div>;
}

Layout.Header = (props: PropsWithChildren<LayoutHeaderProps>) => {
  return <div className="header">{props.children}</div>;
};

Layout.Footer = (props: PropsWithChildren<LayoutFooterProps>) => {
  return <div className="footer">{props.children}</div>;
};

<Layout>
  <Layout.Header></Layout.Header>
  <Layout.Footer></Layout.Footer>
</Layout>;

// 类组件

export interface CounterProps {
  defaultCount: number;
}
interface State {
  count: number;
}
export class Counter extends React.Component<CounterProps, State> {
  public static defaultProps = {
    // 默认props
    defaultCount: 0
  };
  public state = {
    // state
    count: this.props.defaultCount
  };
  public componentDidMount() {}
  public componentWillMount() {}
  public componentDidCatch() {}
  public componentDidUpdate(prevProps: CounterProps, prevState: State) {}
  public render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
  private increment = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };
  private decrement = () => {
    this.setState(({ count }) => ({ count: count - 1 }));
  };
}

// 子组件声明  类组件可以使用静态属性形式声明子组件

export class Layout extends React.Component<LayoutProps> {
  public static Header = Header;
  public static Footer = Footer;
  public render() {
    return <div className="Layout">{this.props.children}</div>;
  }
}
// 泛型
export class List<T> extends React.Component<ListProps<T>> {
  public render() {}
}
// 高阶组件
export interface ThemeProps {
  primary: string;
  secondary: string;
}

export function withTheme<P>(Component: React.ComponentType<P & ThemeProps>) {
  interface OwnProps {} // 自己暴露的Props
  type WithThemeProps = P & OwnProps;
  const WithTheme = (props: WithThemeProps) => {
    const fakeTheme: ThemeProps = {
      primary: 'red',
      secondary: 'blue'
    };
    return <Component {...fakeTheme} {...props} />;
  };
  WithTheme.displayName = `withTheme${Component.displayName}`;
  return WithTheme;
}
const Foo: Fc<{ a: number } & ThemeProps> = props => <div style={{ color: props.primary }} />;
const FooWithTheme = withTheme(Foo);
() => {
  <FooWithTheme a={1} />;
};

/**
 * 抽取出通用的高阶组件类型
 */
type HOC<InjectedProps, OwnProps = {}> = <P>(Component: React.ComponentType<P & InjectedProps>) => React.ComponentType<P & OwnProps>;

/**
 * 声明注入的Props
 */
export interface ThemeProps {
  primary: string;
  secondary: string;
}

export const withTheme: HOC<ThemeProps> = Component => props => {
  // 假设theme从context中获取
  const fakeTheme: ThemeProps = {
    primary: 'red',
    secondary: 'blue'
  };
  return <Component {...fakeTheme} {...props} />;
};

// Render Props

export interface ThemeConsumerProps {
  children: (theme: Theme) => React.ReactNode;
}
export const ThemeConsumer = (props:ThemeConsumerProps) => {
    const fakeTheme = {primary:'red',secondary:'blue'}
    return props.children(fakeTheme);
}
<ThemeConsumer>
    {
        ({primary} => {
            return <div style={{color:primary}} />
        })
    }
</ThemeConsumer>

// Context
export interface Theme {
    primary:string,
    secondary:string
}
export interface ThemeContextValue {
    theme:Theme;
    onThemeChange:(theme:Theme) => void;
}
export const ThemeContext = React.createContext<ThemeContextValue>({
    theme:{
        primary:'red',
        secondary:'blue'
    },
    onThemeChange:() => {}
})
export const ThemeProvider:FC<{theme:Theme;onThemeChange:(theme:Theme) => void}> = props => {
    return (
        <ThemeContext.Provider value={{theme:props,onThemeChange:props.onThemeChange}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext);
}

// 杂项 handle{Type}{Event}
export const EventDemo:FC<{}> = props => {
    const handleClick = useCallback<React.MouseEventHandler>(evt => {
        evt.preventDefault()
    },[])
    return <button onClick={handleClick} />
}

// 简洁的声明事件处理类型
export const EventDemo:FC<{}> = props => {
    const handerChnage = useCallback<ChangeEventHandler<HTMLElement>> (evt => {
        console.log(evt.target.value)
    },[])
    return <button onClick={handleClick} />
}
// 自定义事件处理器类型以
export interface UploadValue {
    url:string,
    name:string,
    size:number
}
// 暴露事件处理类型
export type UploadChangeHandler = (value?:UploadValue,file?:File) => void;
export interface UploadProps {
    value?:UploadValue,
    onChange?:UploadChangeHandler
}
export const Upload:FC<UploadProps> = props => {
    return <div></div>
}
// 一些注释写法
export interface ColumnProps extends React.HTMLAttributes<any> {
    /**props1 description */
    props1?:string,
    /**props12 description */
    props2?:string
}

export class Column extends Component<ColumnProps, {}> {
    render() {
        return <div>Column</div>
    }
}

// Event事件对象类型
ClipboardEvent<T = Element> // 剪贴板事件对象
DragEvent<T = Element> // 拖拽事件对象
ChangeEvent<T = Element> // Change事件对象
KeyboardEvent<T = Element> // 键盘事件对象
MouseEvent<T = Element> // 鼠标事件对象
TouchEvent<T = Element> // 触摸事件对象
WheelEvent<T = Element> // 滚动事件对象
AnimationEvent<T = Element> //动画事件对象
TransitionEvent<T = Element> //过度事件对象

interface Iprops {
   onclick(event:MouseEvent<HTMLDivElement>) :void 
}

// Promise 类型
interface IResponse<T> {
    message:string,
    result:T,
    success:boolean
}
async function getResponse():Promise<IResponse<number[]>> {
    return {
        message:'获取成功',
        result:[1,2,3],
        success:true
    }
}

getResponse().then(response => {
    console.log(response.result)
})

// 工具泛型使用技巧 一般我们都是先定义类型，再去赋值使用，但是使用 typeof 我们可以把使用顺序倒过来
// 一些技巧
const options = {
    a:1,
    str:'111',
    fun:() => {},
    arr:[]
}
type Options = typeof options;

interface Iprops {
    color:'red'|'blue'|'yellow'
}
// 使用 Partial 将所有的 props 属性都变为可选值
type Partial<T> = { [P in keyof T]?: T[P] };

// 如果 props 所有的属性值都是可选的我们可以借助 Partial 这样实现
interface Iprops {
    color:'red'|'blue'|'yellow',
    onClick(event:MouseEvent<HTMLDivElement>):void
}
const Button:FC<Partial<Iprops>> = ({onClick,children,color}) => {
    return (<div onClick={onClick}>
        {children}
    </div>)
}
// 使用 Required 将所有 props 属性都设为必填项

// 一些关键字修改 Extract<T,U> Pick<T,K> Exclude<T,U> Omit<T,K>

// type Required<T> = { [P in keyof T]-?: T[P] };

interface Person {
    name:string,
    age:number,
    sex:string
}
let person:Pick<Person,'name'|'age'> = {
    name:'小王',
    age:21
}

export interface IYarnResource {
    id:number,
    namespace:string,
    user:string,
    queue:string
}
export interface IYarnStatus {
    name:string,
    error:string,
    maxCapacity:number,
    state:string,
    used:number,
    capacity:number
}
export interface IYarnEntity extends IYarnResource {
    status:IYarnStatus,
    keytab:string
}

const defaultState = {
    name:111
}
type Istate = Readonly<typeof defaultState>
class User extends Component<{}, Istate> {
    readonly state:Istate = defaultState;
}

interface IList {
    title:string
}
data:IList[] = [
    {title:'111'}
]


handlerChange = (event:ChangeEvent<HTMLInputElement>) => {
    const {name,value}:{name:string,value:string} = event.target;  // 为event对象中的name和value指定类型
    const {name,value}:any = event.target;
}

// *****
interface Options {color:string,volume:number}

let options = {} as Options;

options.color = 'red';
options.volume = 111;


//******** */ declare的使用

declare function require(path:string):any;

declare function define(...args:any[]):any

