/*
 * @Author: yangyuan
 * @Date: 2019-10-31 14:14:50
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2019-10-31 14:24:37
 * @Description:
 */
import React, { Component } from 'react';
export default class Test extends Component {
  constructor() {
    super(arguments);
    this.onReactClick.bind(this);
  }
  componentDidMount() {
    const parentDom = ReactDOM.findDOMNode(this);
    const childrenDom = parentDom.querySelector('.button');
    childrenDom.addEventListen('click', this.onDomClick, false);
  }
  onDomClick() {
    console.log('Javascript Dom click');
  }
  onReactClick() {
    console.log('React click');
  }
  render() {
    <div>
      <button className="button" onClick={this.onReactClick()}>
        点击
      </button>
    </div>;
  }
}

// Dom click
// React click
