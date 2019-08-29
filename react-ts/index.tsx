/*
 * @Author: yangyuan
 * @Date: 2019-08-29 15:05:40
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2019-08-29 16:21:07
 */
// https://juejin.im/post/5cd7f2c4e51d453a7d63b715

import React, { FC, PropsWithChildren } from 'react';

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
