"use client";

import { Component } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 1,
  };

  // 해결방법1) 화살표함수
  onClickCountUp = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <>
        <div>{this.state.count}</div>

        {/* 해결방법2) 로직상의 this를 연결(.bind) */}
        <button onClick={this.onClickCountUp.bind(this)}>
          카운트 올리는 버튼
        </button>
      </>
    );
  }
}
